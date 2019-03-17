const {db, Form} = require('./form_db.js');

var formData = [
  {
    patientname: 'Jane Doe',
    preferredname: 'Janey',
    pronouns: 'she, her',
    pasttwomonths: 'yes',
    nexttwomonths: 'yes, I am worried that I will lose my job and will not be able to afford rent',
    conflict: 'no',
    options: 'n/a',
    refer: 'yes',
    contact: '555-555-555',
    notes: 'patient seems very anxious about her housing situation',
    createdAt: 'now'
  },
    {
    patientname: 'John Smith',
    preferredname: 'John',
    pronouns: 'he, him',
    pasttwomonths: 'no',
    nexttwomonths: 'yes',
    conflict: 'yes, I live in a halfway house where people are always fighting',
    options: 'no',
    refer: 'yes',
    contact: 'I have no phone. You can find me at the Sober Living halfway house',
    notes: 'patient will alert us when he gets a phone',
    createdAt: 'now'
  }
];


var seedDB = function seedDB() {
  Form.create(formData).then(function () {
    return db.disconnect();
  });
};

seedDB();