const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {Form, save} = require('../database/form_db.js');

const app = express();
const port = process.env.PORT || 1126;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));

//get all forms
app.get('/api/forms', function(req, res) {
  Form.find().sort({createdAt: -1}).exec()
  .then(formInfo => {
    if (!formInfo) {
      return res.status(500).send('Error in server GET request')
    } else {
      return (res.status(200).send(formInfo));
    }
  })
});

app.post('/api/forms', function(req, res) {
  console.log(req.body.formData);
  save(req.body.formData)
    .then(() => res.send('CREATED')); //this is ending my response
});


app.listen(port, (error) => {
  if (error) {
    console.log(error, 'ERROR: not connected to server!');
  }
  console.log(`Listening on port ${port}!`);
});



