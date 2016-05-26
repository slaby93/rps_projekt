/**
 * Created by piec on 5/2/2016.
 */
"use strict";
var fs = require('fs');
let _ = require('lodash');
let moment = require('moment');
let exported = {};
module.exports = exported;

exported.getUsersClasses = () => {
    return new Promise((resolve, reject)=> {
        getClasses().then((data)=> {
            _.forEach(data, (val)=> {
                val.value = val.value.length;
                delete val.model;
            });
            resolve(data)
        });
    });
};
/**
 * Returns classes like [{class:'Klasa 1',users:[xxx]},...]
 */
exported.getClassesGroups = ()=> {
    return new Promise((resolve, reject)=> {
        let result = [];
        getClasses().then((data)=> {
            _.forEach(data, (val)=> {
                let userList = [];
                _.forEach(val.value, (userObject)=> {
                    userList.push(userObject.user);
                });
                result.push({class: val.class, users: userList});
            });
            resolve(result);
        });
    });
}

function getClasses() {
    return new Promise((resolve, reject)=> {
        fs.readFile('./equations/users.json', (err, fs)=> {
            "use strict";
            if (err) {
                console.log("ERR", err);
                reject(err)
                return;
            }
            let sumAVG = 0; // pierwszy skladnik wzoru. Suma srednich uzytkownikow.
            let data = JSON.parse(fs.toString()); // dane
            let k = _.keys(data).length; // ilosc uzytkownikow
            let usersWithAvg = [];
            let maxAvg = 0;
            let minAvg = 1000;
            _.forEach(data, (value, key)=> {
                value = _.sortBy(value, (a)=> {
                    return a.time;
                });
                let first = moment.unix(_.head(value).time);
                let last = moment.unix(_.last(value).time);
                let diff = last.diff(first, 'days');
                if (diff === 0) {
                    diff = 1;
                }
                let avg = value.length / diff;
                if (avg > maxAvg) {
                    maxAvg = avg;
                }
                if (avg < minAvg) {
                    minAvg = avg;
                }
                sumAVG += avg;
                usersWithAvg.push({
                    user: key,
                    avg: avg,
                    model: value
                });
            });
            let wynik = {
                1: [],
                2: [],
                3: []
            };
            sumAVG /= k;
            // let gornaGranica = (sumAVG / k) + ((maxAvg * 2) / 3);
            let gornaGranica = 0.55;
            // let dolnaGranica = (sumAVG / k) - ((minAvg * 2) / 3);
            let dolnaGranica = 0.05;

            _.forEach(usersWithAvg, (user)=> {
                // console.log(user);
                if (user.avg > gornaGranica) {
                    wynik[3].push(user);
                } else if (user.avg <= dolnaGranica) {
                    wynik[1].push(user);
                } else {
                    wynik[2].push(user);
                }
            });

            // console.log("Gorna granica:", gornaGranica);
            // console.log("Dolna granica:", dolnaGranica);
            // console.log("1:", wynik[1].length);
            // console.log("2:", wynik[2].length);
            // console.log("3:", wynik[3].length);
            // resolve([
            //     {"class": "Klasa 1", "value": wynik[1].length},
            //     {"class": "Klasa 2", "value": wynik[2].length},
            //     {"class": "Klasa 3", "value": wynik[3].length}
            // ]);
            resolve([
                {"class": "Klasa 1", "value": wynik[1]},
                {"class": "Klasa 2", "value": wynik[2]},
                {"class": "Klasa 3", "value": wynik[3]}
            ]);
        });
    });
}

