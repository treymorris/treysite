var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SkillSchema = new Schema({
  front: { type: Boolean },
  back: { type: Boolean },
  misc: { type: Boolean },
  name: { type: String },
  src: { type: String },
  url: { type: String },
  
});

module.exports = mongoose.model("Skill", SkillSchema);
