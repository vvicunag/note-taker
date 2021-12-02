const express = require("express");
const fs = require("fs"); 
const path = require('path');
const notes = require("./db/db.json")

const PORT = 3001; 

const app = express(); 

// Middleware
app.use(express.json());
app.use(express.static("public")); 


// GET Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
  console.info("received request to render index html")
});

// GET Route for /notes html
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

//GET request for notes
app.get('/api/notes', (req, res) => {
  res.status(200).json(notes);
});



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);



// app.post('/api/tips', (req, res) => {
//   console.info(`${req.method} request received to add a tip`);

//   const { username, topic, tip } = req.body;

//   if (req.body) {
//     const newTip = {
//       username,
//       tip,
//       topic,
//       tip_id: uuid(),
//     };

//     readAndAppend(newTip, './db/tips.json');
//     res.json(`Tip added successfully 🚀`);
//   } else {
//     res.error('Error in adding tip');
//   }
// });



