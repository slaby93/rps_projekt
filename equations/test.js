/**
 * Created by piec on 5/2/2016.
 */
"use strict";
var fs = require('fs');
let _ = require('lodash');
fs.readFile('./dates.json', (err, fs)=> {
    "use strict";
    if (err) {
        console.log("ERR", err);
        return;
    }
    let data = JSON.parse(fs.toString())

    _.forEach(data, (value, key)=> {
        console.log(`${key}:${value.length}`);
    });
    console.log("RESULT");
});