/**
 * Created by piec on 5/2/2016.
 */
"use strict";
var fs = require('fs');
let _ = require('lodash');
fs.readFile('../parsed.json', (err, fs)=> {
    "use strict";
    if (err) {
        console.log("ERR", err);
    }
    let data = JSON.parse(fs.toString())
    console.log(data[0]);
    let users = {};
    _.forEach(data, (item)=> {
        if(!users[item.user]){
            users[item.user] = [];
        }

        users[item.user].push(item);
        delete item.user;
    });
    console.log("RESULT");
    var fs = require('fs');
    fs.writeFile("users.json", JSON.stringify(users), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
});