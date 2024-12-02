const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); 
require('./db')

const app = express();

// Enable CORS
app.use(cors());


// Parse JSON bodies (application/json)
app.use(bodyParser.json());

// Parse URL-encoded bodies (application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
