/**
 * Created by piec on 5/2/2016.
 */
"use strict";
var fs = require('fs');
let _ = require('lodash');
var moment = require('moment');

fs.readFile('../parsed.json', (err, fs)=> {
    "use strict";
    if (err) {
        console.log("ERR", err);
    }
    let data = JSON.parse(fs.toString())
    console.log(data[0]);
    let users = {};
    let date = '';
    _.forEach(data, (item)=> {
        date = moment.unix(item.time).format('YYYY DDD');
        // console.log("DATA:", date);

        if (!users[date]) {
            users[date] = [];
        }
        users[date].push(item);
        delete item.time;
    });
    console.log("RESULT");
    var fs = require('fs');
    fs.writeFile("dates.json", JSON.stringify(users), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
});
