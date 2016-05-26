var fs = require('fs');
var buf = new Buffer(128);
// Load the full build.
var _ = require('lodash');
console.log("Going to open an existing file");
var result = [];
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./log_phase8')
});

lineReader.on('line', function (line) {
    var data = _.words(line);
    // console.log('Line from file:', data);

    var time = data[data.length - 10];
    var user = data[data.length - 2] + data[data.length - 1];
    var ip_address = data[data.length - 13];
    var method = line.substr(41, line.length - (75 + 43));
    result.push({
        time: time,
        user: user,
        ip: ip_address,
        method: method
    });
});

lineReader.on('close', function (line) {
    console.log("RESULT");
    fs.writeFile("./parsed.json", JSON.stringify(result), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
});