const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const formSchema = new mongoose.Schema({
     patientname: String,
     preferredname: String,
     pronouns: String,
     pasttwomonths: String,
     nexttwomonths: String,
     conflict: String,
     options: String,
     refer: String,
     contact: String,
     notes: String,
     createdAt: String
});

const Form = mongoose.model('Form', formSchema);

let save = (formEntry) => {
  console.log(formEntry, 'SAVE IS RUNNING'); //returning undefined
  let newForm = new Form({
     patientname: formEntry.patientname,
     preferredname: formEntry.preferredname,
     pronouns: formEntry.pronouns,
     pasttwomonths: formEntry.pasttwomonths,
     nexttwomonths: formEntry.nexttwomonths,
     conflict: formEntry.conflict,
     options: formEntry.options,
     refer: formEntry.refer,
     contact: formEntry.contact,
     notes: formEntry.notes,
     createdAt: Date.now()
  });
  return newForm.save()
};

module.exports = {
  save,
  Form
}