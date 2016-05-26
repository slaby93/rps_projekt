/**
 * Created by danielslaby on 22/05/16.
 */
"use strict";
let fs = require('fs');
let _ = require('lodash');
let moment = require('moment');
let async = require('async');
let exported = {};
module.exports = exported;

exported.getClassesDiagramData = (data) => {
    "use strict";
    return new Promise((resolve, reject)=> {
        let result = [];
        async.each(data, (klasa, callback)=> {
            getDataForClass(klasa).then((res)=> {
                result.push({class: klasa.class, data: res});
                callback();
            });
        }, ()=> {
            resolve(result);
        });
    });
}

function getDataForClass(klasa) {
    let self = this;
    return new Promise((resolve, reject)=> {
        let users = klasa.users;
        let usersObjects = [];
        fs.readFile('./equations/users.json', (err, fs)=> {
            let data = JSON.parse(fs.toString()); // dane
            // sprawdzam, czy dana osoba jest w wyszukiwanej klasie. jezeli tak to dodaje ja do zbioru.
            _.forEach(_.keys(data), (key)=> {
                if (_.indexOf(users, key) > -1) {
                    usersObjects.push(data[key]);
                }
            });

            _.forEach(usersObjects, (user)=> {
                _.orderBy(user, 'time', 'asc');
            });
            let flatted = _.flatMap(usersObjects, (n)=> {
                return n;
            });
            let arrayOfDates = _.map(flatted, 'time');
            let setOfDates = new Set();
            // I get Quaters of year
            let dateFormat = 'YYYY Q';
            _.forEach(arrayOfDates, (date)=> {
                let day = moment.unix(date).format(dateFormat);
                setOfDates.add(day);
            });
            let result = [];

            _.forEach(Array.from(setOfDates), (date)=> {
                let obj = {
                    date: date,
                    value: 0
                };
                date = moment(date);

                _.forEach(usersObjects, (item)=> {
                    let tmp = moment.unix(_.first(item).time).format(dateFormat);

                    if (date.diff(tmp, 'quaters') >= 0) {
                        obj.value += 1;
                    }
                });

                result.push(obj);
            });

            result = _.orderBy(result, 'date', 'asc');
            console.log("RESOLVED");
            resolve(result);
        });


    });

}