var express = require("express");
var router = express.Router();
var projects_controller = require("../controllers/projectsController");
var skills_controller = require("../controllers/skillsController");
var contact_controller = require("../controllers/contactController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home", { title: "Home" });
});

router.get("/work", function (req, res, next) {
  res.render("work-list", { title: "Work" });
});

router.get("/projects", projects_controller.projects_list);

router.post("/contact", contact_controller.create_message);

router.get("/contact", function (req, res, next) {
  res.render("contact-page", {title: "Contact"});
});

router.get("/skills", skills_controller.skills_list);

module.exports = router;
