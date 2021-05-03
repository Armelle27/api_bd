let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
  id:Number,
  auteur:String,
  nom:String,
  matiere:String,
  note:Number,
  dateDeRendu:Date,
  rendu:Boolean,
  remarques:String,
  photoProf : String,
  photoMat : String
});

AssignmentSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
 