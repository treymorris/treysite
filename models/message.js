var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    date: {type: Date}
});

module.exports = mongoose.model('Message', MessageSchema)