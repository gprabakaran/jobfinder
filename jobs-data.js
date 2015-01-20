/**
 * Created by prabakarangopal on 16/01/2015.
 */

var mongoose = require('mongoose');
var Promise = require("bluebird");
var jobModel = require('./models/job')

var Job = mongoose.model('Job', jobModel.jobschema);

var findJobs = function(query){
    return Promise.cast(Job.find(query).exec());
}

var createJob = Promise.promisify(Job.create, Job);

//exports

exports.findJobs = findJobs;

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

exports.saveJob = createJob;

exports.seedJobs = function () {
    return findJobs({}).then(function (collection) {
        if (collection.length === 0) {
            return Promise.map(seedJobs, function (job) {
                return createJob(job);
            });
        }

    });
}

var seedJobs = [
    {title: 'Cook', description: 'You will be making bagels'},
    {title: 'Waiter', description: 'You will be putting food on peoples table'},
    {title: 'Programmer', description: 'You will be meaninglessly typing for hours'},
    {title: 'Axe Maker', description: 'You will be making Axes .. so many'}
];