/**
 * Created by danielslaby on 26/05/16.
 */
/**
 * Created by danielslaby on 26/05/16.
 */
'use strict';
let fs = require('fs');
let _ = require('lodash');
let exported = {};
let moment = require('moment');
moment.locale('pl');
 
exported.getMaintaining = ()=> {
    return new Promise((resolve, reject)=> {
        fs.readFile('./equations/hours.json', (err, fileHandler)=> {
            'use strict';
            let data = JSON.parse(fileHandler.toString()); // dane
            let keys = _.keys(data);
            let result = {};
            _.forEach(keys, (item)=> {
                let year, day, hour;
                year = _.split(item, " ")[0];
                day = _.split(item, " ")[1];
                hour = _.split(item, " ")[2];
                let fullDate = new moment(item, 'YYYY DDD HH');
                let klucz = fullDate.format('d HH');
                if (!result[klucz]) {
                    result[klucz] = {
                        value: 0,
                        number: 0,
                        day: fullDate.day(),
                        hour: hour,
                        fullDate: fullDate,
                    };
                }
                result[klucz].value += data[item].length;
                result[klucz].number += 1;
            });
            let res = [];
            _.forEach(_.keys(result), (item)=> {
                result[item].ratio = result[item].value / result[item].number;
                res.push({
                    value: result[item].ratio,
                    day: result[item].day,
                    hour: result[item].hour,
                    date: `${result[item].fullDate.format('ddd HH')}`,
                });
            });
            res = _.orderBy(res, ['day', 'hour'], 'asc');
            resolve(res);
        });
    });
};


module.exports = exported;
