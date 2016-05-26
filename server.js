var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//evar sql = require('sql.js');
//var db = new sql.Database();
//var sqlite3 = require('sqlite3').verbose();

// fake project and tasks in object/json? format for mock data
var proj1 = {id: 1, name: "CAA Website", tasks:[{id:6, summary:
    "Show surveys in meeting"}, {id:7, summary:"Fix forums permissions"}]};
var proj2 = {id: 2, name: "Supplemental Estimator", tasks:
    [{id:8, summary: "Finish layout"}, {id:9, summary:"Publish the website"}]};
var projects = [proj1, proj2];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text({type: 'text/plain'}));

app.use(express.static('public'));
// app.use(require('connect-livereload')());

app.get('/get-all-projects', function(request, response){
    console.log("/get-all-projects");
    response.send(projects);
    // var db = new sqlite3.Database('database/MynewDatabase.db');
    // db.all("SELECT id, name from projects",[], function(err, rows){response.send(rows);console.log(rows)});
    // db.close();
});

app.post('/add-project', function(request, response){
    id = request.body.id;
    
   // var proj3 =

});

app.get('/some-data-api', function (request, response) {
    response.send([{id: 1, name: "robin database"}, {id: 2, name: "greg database"}]);
});

app.get('/post-data', function (request, response) {

    // sqlstr = "CREATE TABLE hello (a int, b char);";
    // sqlstr += "INSERT INTO hello VALUES (0, 'hello');"
    // sqlstr += "INSERT INTO hello VALUES (1, 'world');"
    // db.run(sqlstr); // Run the query without returning anything

    //var res = db.exec("SELECT * FROM hello");

    //response.send(res);
    response.send({saying: "got it out here"});


});
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(8000, function () {
    console.log('Express server started on port 8000');
});

