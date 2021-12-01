const express = require("express");
const fs = require("fs"); 

const PORT = 3001; 

const app = express(); 

// Middleware
app.use(express.json());
app.use(express.static("public")); 





app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);