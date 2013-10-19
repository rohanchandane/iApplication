/**
 * Created by Rohan on 10/17/13.
 */
var http = require("http");


exports.searchList = function(req, res){
    console.log("search list params: ", req.query);
    // res.send("respond with a resource");

    var searchQuery = '/api/'+ req.query.target +'/'+ req.query.platform +'/programme/searchatoz/' + req.query.searchText;
    console.log(searchQuery);
    var options = {
        host: 'mercury.itv.com',
        port: 80,
        path: searchQuery
    };

    http.get(options, function (http_res) {
        // initialize the container for our data
        var data = "";

        // this event fires many times, each time collecting another piece of the response
        http_res.on("data", function (chunk) {
            // append this chunk to our growing `data` var
            data += chunk;
        });

        // this event fires *one* time, after all the `data` events/chunks have been gathered
        http_res.on("end", function () {
            // you can use res.send instead of console.log to output via express
            console.log(data);
            res.send(data);
        });
    });

};