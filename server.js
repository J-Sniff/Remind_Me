const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

// Routes for handling note data
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.post("/api/notes", (req, res) => {
  const { title, content } = req.body;

  // Create a new note object
  const newNote = {
    id: Date.now(),
    title,
    content,
  };

  // Add the new note to the array or your data source
  notes.push(newNote);

  // Send a response indicating success
  res.status(201).json(newNote);
});

// Setting up port for server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
