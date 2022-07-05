var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    name: { type: String, required: [true, "Name cannot be blank"] },
    email: { type: String, required: [true, "Email cannot be blank"] },
    subject: { type: String, required: [true, "Subject cannot be blank"] },
    message: { type: String, required: [true, "Message cannot be blank"] },
    date: {type: Date}
});

module.exports = mongoose.model('Message', MessageSchema)