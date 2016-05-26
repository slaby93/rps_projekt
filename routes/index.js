var express = require('express');
var router = express.Router();
var check = require('check-types');
var assert = require('assert');
var http = require('http');
var util = require('util');
var fs = require('fs');
var b = require('./../equations/b');
var d = require('./../equations/d');
var h = require('./../equations/h');
var j = require('./../equations/j');
var l = require('./../equations/l');
/**
 * @description Zwraca index.html
 */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
// http://localhost:8080/testowo
/**
 * @description Testowy rout. Mozecie tutaj wrzucac sobie wszystko.
 */
// router.all('/data', function (req, res, next) {
//     fs.readFile('./parsed.json', function (err, fd) {
//         res.send(fd)
//     });
// });

router.all('/getUserClasses', function (req, res, next) {
    b.getUsersClasses().then((val)=> {
        "use strict";
        res.send(val);
    });
});
router.all('/getRatioOfIpChanges', function (req, res, next) {
    d.getWskaznikNatezenia().then((val)=> {
        "use strict";
        res.send(val);
    });
});

router.all('/getSuitableDates', function (req, res, next) {
    console.log('START');
    j.getSuitableDates().then((data)=> {
        "use strict";
        res.send(data);
    });
});

router.all('/getClassUserChanges', function (req, res, next) {
    b.getClassesGroups().then((data)=> {
        "use strict";
        h.getClassesDiagramData(data).then((resp)=> {
            res.send(resp);
        });

    });
});

router.all('/getMaintaining', function (req, res, next) {
    l.getMaintaining().then((data)=> {
        "use strict";
        res.send(data);
    });
});

module.exports = router;



