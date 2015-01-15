/**
 * Created by prabakarangopal on 15/01/2015.
 */

var mongoose = require("mongoose");

var jobschema = mongoose.Schema({
    title:{type:String},
    description:{type:String}
});

var Job = mongoose.model('Job',jobschema)

exports.seedJobs = function() {
    Job.find({}).exec(function (error, collection) {
        if(collection.length ===0){
            Job.create({title:'Cook',description:'You will be making bagels'});
            Job.create({title:'Waiter',description:'You will be putting food on peoples table'});
            Job.create({title:'Programmer',description:'You will be meaninglessly typing for hours'});
            Job.create({title:'Axe Maker',description:'You will be making Axes .. so many'});
        }
    })
}