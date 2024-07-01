const express = require('express');
var cors = require('cors')
var app = express()
 
app.use(cors())
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const examRoute = require('./routes/exam');
app.use('/exam', examRoute);

app.listen(3002, () => {
  console.log('Server started on port 3002');
});