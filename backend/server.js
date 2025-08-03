const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const configure = require('dotenv');
const cors = require('cors');
const data = require('./data.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
configure.config();

app.get('/', (req, res) => {
  res.send('Welcome to the stock finder API. Go to /getstock to get the book data');
});


app.get('/getbook', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 
