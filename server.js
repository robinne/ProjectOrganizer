var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var sql = require('sql.js');
var db = new sql.Database();
//var sqlite3 = require('sqlite3').verbose();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text({type: 'text/plain'}));

app.use(express.static('public'));
// app.use(require('connect-livereload')());

app.get('/some-data-api', function (request, response) {
    response.send([{id: 1, name: "robin database"}, {id: 2, name: "greg database"}]);
});

app.get('/post-data', function (request, response) {

    // sqlstr = "CREATE TABLE hello (a int, b char);";
    // sqlstr += "INSERT INTO hello VALUES (0, 'hello');"
    // sqlstr += "INSERT INTO hello VALUES (1, 'world');"
    // db.run(sqlstr); // Run the query without returning anything

    var res = db.exec("SELECT * FROM hello");

   response.send(res);
    // response.send({saying: "got it out here"});


});


app.listen(8000, function () {
    console.log('Express server started on port 8000');
});

