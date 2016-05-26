/**
 * Created by danielslaby on 26/05/16.
 */
'use strict';
let fs = require('fs');
let _ = require('lodash');
let exported = {};

exported.getSuitableDates = ()=> {
    return new Promise((resolve, reject)=> {
        fs.readFile('./equations/dates.json', (err, fileHandler)=> {
            'use strict';
            let data = JSON.parse(fileHandler.toString()); // dane
            console.log(typeof data);
            let keys = _.keys(data);
            let result = {};
            _.forEach(keys, (item)=> {
                let year = _.split(item, " ")[0];
                let day = _.split(item, " ")[1];
                let value = data[item];
                if (!result[day]) {
                    result[day] = {
                        array: [],
                        years: new Set()
                    };
                }
                result[day].array.push(value);
                result[day].years.add(year);  
            });
            let res = [];
            _.forEach(_.keys(result), (key)=> {
                result[key].array = _.flatten(result[key].array).length;
                result[key].day = key;
                result[key].years = Array.from(result[key].years);
                result[key].ratio = result[key].array / result[key].years.length;
                res.push({
                    day: key,
                    ratio: result[key].ratio
                });
            });
            resolve(res);
        });
    });
};


module.exports = exported;
