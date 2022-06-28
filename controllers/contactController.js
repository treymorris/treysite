const { body, validationResult } = require("express-validator");
const Message = require("../models/message");
var nodeoutlook = require("nodejs-nodemailer-outlook");
require("dotenv").config();

exports.create_message = [
  // validate and sanitize
  body("name", "Name cannot be empty").trim().isLength({ min: 1 }).escape(),
  body("email", "Email cannot be empty").trim().isLength({ min: 1 }).escape(),
  body("subject", "Subject cannot be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("message", "Message cannot be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),

  // process request
  (req, res, next) => {
    // extract errors
    const errors = validationResult(req.body);

    if (!errors.isEmpty()) return res.json({ errors: errors.array() });

    const message = new Message({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
      date: Date.now(),
    }).save(function (err) {
      if (err) {
        return next(err);
      }
      sendEmail(req.body.email, req.body.subject, req.body.message);
      res.redirect("/");
    });
  },
];

let outlookAddress = process.env.OUTLOOK_ADDRESS;
let outlookPass = process.env.OUTLOOK_PASS;

function sendEmail(email, subject, message) {
  nodeoutlook.sendEmail({
    auth: {
      user: outlookAddress,
      pass: outlookPass,
    },
    from: email,
    to: outlookAddress,
    subject: subject,
    text: message,
    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i),
  });
}
