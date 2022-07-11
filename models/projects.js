var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: { type: String },
    url: { type: String },
    src: { type: String },
    description: { type: String },
    published: { type: Boolean }
});

module.exports = mongoose.model('Project', ProjectSchema)