/**
 * Created by prabakarangopal on 13/01/2015.
 */
var express = require('express');
var mongoose = require('mongoose');
var jobmodel = require('./models/job');

var app = express();

app.set('views', __dirname);
app.set('view engine','jade');

app.use(express.static(__dirname + '/public'));

//mongoose.connect('mongodb://localhost/jobfinder');
mongoose.connect('mongodb://job:123prabha@ds031591.mongolab.com:31591/jobfinder');

var con = mongoose.connection;
con.once('open',function(){
    console.log('Connected to mongodb sucessfully')
    jobmodel.seedJobs();
});

app.get('/api/jobs', function(req,res){
    mongoose.model('Job').find({}).exec(function(error,collection){
        res.send(collection);
    });
});

app.get('*',function(req,res){
    res.render('index');
});
var port = process.env.PORT || 3000;
app.listen(port);
