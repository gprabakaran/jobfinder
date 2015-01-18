/**
 * Created by prabakarangopal on 15/01/2015.
 */

var mongoose = require("mongoose");

var jobschema = mongoose.Schema({
    title: {type: String},
    description: {type: String}
});

mongoose.model('Job', jobschema);
