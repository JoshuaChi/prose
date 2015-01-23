// var connect = require('connect')
// var http = require('http')
// var express = require("express")
//
// var app = connect();
// app.use("/index", express.static(__dirname + '/index.html'));
// app.use("/locale.js", express.static(__dirname + '/locale.js'));
// app.use("/dist/prose.min.js", express.static(__dirname + '/dist/prose.min.js'));
// // fs = require('fs');
// //
// //
// // fs.readFile('./index.html', function (err, html) {
// //   if (err) {
// //     throw err;
// //   }
// //   http.createServer(function(request, response) {
// //       response.writeHeader(200, {"Content-Type": "text/html"});
// //       response.write(html);
// //       response.end();
// //   }).listen(3000);
// // });
//
// // respond to all requests
// // app.use(function(req, res){
// //   res.end('Hello from Connect!\n');
// // })
//
// //create node.js http server and listen on port
// http.createServer(app).listen(3000)


var express = require("express"),
    app = express(),
    fs = require('fs');
    
app.use(express.static(__dirname + '/'));
app.get('/', function(req, res){
  fs.readFile('./index.html', function (err, html) {
    if (err) {
      throw err;
    }
    
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();
  });
});
var port = process.env.PORT || 3000;
app.listen(port);