const Skill = require("../models/skills");

exports.skills_list = function (req, res, next) {
  Skill.find({})
    .sort({ name: 1 })
    .exec(function (err, list_skills) {
      if (err) {
        return next(err);
      }
      res.render("skills", {
        title: "Skills",
        skills_list: list_skills,
      });
    });
};
