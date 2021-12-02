const express = require("express");
const fs = require("fs"); 
const path = require('path');
const notes = require("./db/db.json");
const uuid = require('./helpers/uuid'); 

const PORT = 3001; 

const app = express(); 

// Middleware
app.use(express.json());
app.use(express.static("public")); 
app.use(express.urlencoded({ extended: true }));

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
  console.info(`received ${req.method} request to send notes`)
  res.status(200).json(notes);
});





app.post('/api/notes', (req, res) => {
  console.info(`received a ${req.method} request to save a note`);
  const {title, text} = req.body;
  if(title && text) {
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };
    const response = {
      status: 'success',
      body: newNote,
    };
    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting note');
  }
})






app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);




