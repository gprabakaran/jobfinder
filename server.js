/**
 * Created by prabakarangopal on 13/01/2015.
 */
var express = require('express');
var jobmodel = require('./models/job');
var jobsData  = require("./jobs-data.js")

var app = express();

require("./jobs-service.js")(jobsData, app);

app.set('views', __dirname);
app.set('view engine','jade');

app.use(express.static(__dirname + '/public'));

app.get('*',function(req,res){
    res.render('index');
});

//mongoose.connect('mongodb://localhost/jobfinder');
jobsData.connectDB('mongodb://job:123prabha@ds031591.mongolab.com:31591/jobfinder')
    .then(function(){
        console.log('Connected to mongoDB successfully!');
 });
var port = process.env.PORT || 3000;
app.listen(port);
