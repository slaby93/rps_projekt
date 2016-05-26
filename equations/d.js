"use strict";

let fs = require('fs');
let _ = require('lodash');
let moment = require('moment');
let exported = {};
module.exports = exported;

exported.getWskaznikNatezenia = ()=> {
    "use strict";
    return new Promise((resolve, reject)=> {
        fs.readFile('./equations/users.json', (err, fs)=> {
            let data = JSON.parse(fs.toString()); // dane
            let numberOfUsers = _.keys(data).length;
            let randomUsers = [179, 3241, 2291, 1176, 1355, 4369, 4082, 1834, 1362, 3006, 2482, 1195, 665, 429, 451, 3062, 984, 542, 3203, 4416, 456, 4406, 821, 2439, 60, 2865, 4153, 1225, 3961, 1271, 2981, 4140, 4511, 614, 658, 1209, 326, 83, 3043, 1687, 3089, 868, 2881, 3753, 1297, 3331, 2158, 2281, 3873, 704, 2039, 4328, 452, 2859, 2109, 511, 1066, 1605, 1736, 370, 2875, 59, 4509, 2729, 673, 509, 3937, 998, 592, 2323, 2684, 3680, 3190, 908, 2776, 4486, 4239, 277, 3454, 980, 4147, 3125, 1431, 2349, 577, 1942, 3415, 2181, 3677, 3784, 398, 3736, 3636, 3126, 4408, 4145, 2406, 748, 79, 71];
            randomUsers = _.orderBy(randomUsers, [], ['desc']); // 100

            let userNumber = randomUsers.pop();

            let currentUser = {};
            let currentUserData = {};
            let uniqueIp = new Set();
            let numberOfAllUniqueIpAddresses = 0;
            let results = [];
            for (let i = 0; i < numberOfUsers; i++) {
                uniqueIp = new Set();

                currentUser = _.keys(data)[i];
                currentUserData = data[currentUser];

                _.forEach(currentUserData, (record)=> {
                    uniqueIp.add(record.ip);
                });

                numberOfAllUniqueIpAddresses += uniqueIp.size;

                if (i === userNumber) {
                    results.push({
                        user: currentUser,
                        uniq: uniqueIp.size
                    });
                    userNumber = randomUsers.pop();
                }
            }
            _.forEach(results, (user)=> {
                user.ratio = (user.uniq / numberOfAllUniqueIpAddresses) * 100;
            });
            resolve(results);

        });

    });
}