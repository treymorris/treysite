const Project = require("../models/projects");

exports.projects_list = function (req, res, next) {
  Project.find({})
    .sort({ name: 1 })
    .exec(function (err, list_projects) {
      if (err) {
        return next(err);
      }
      res.render("project-list", {
        title: "Projects",
        project_list: list_projects,
      });
    });
};
