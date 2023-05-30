const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

// Routes for handling note data
app.get("api/notes", (req, res) => {});

app.post("api/notes", (req, res) => {});

// Setting up port for server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

////////////////////////////////////////////////////////////////////////////

// Retrieving notes from the backend
fetch("/api/notes")
  .then((response) => response.json())
  .then((data) => {
    // Handle the retrieved notes data
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors
    console.error("Error:", error);
  });

// Saving a new note to the backend
fetch("/api/notes", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "My Note Title",
    content: "My Note Content",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    // Handle the response data if needed
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors
    console.error("Error:", error);
  });

// Function to retrieve notes from the backend
function retrieveNotes() {
  fetch("/api/notes")
    .then((response) => response.json())
    .then((data) => {
      // Handle the retrieved notes data
      console.log(data);
      // Update your UI with the retrieved notes, e.g., display them on the page
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error);
    });
}

// Function to save a new note to the backend
function saveNote() {
  const title = "My Note Title";
  const content = "My Note Content";

  fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data if needed
      console.log(data);
      // Update your UI or perform any necessary actions after saving the note
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error);
    });
}

// Event handler for retrieving notes (e.g., when a button is clicked)
document
  .getElementById("retrieveButton")
  .addEventListener("click", retrieveNotes);

// Event handler for saving a note (e.g., when a form is submitted)
document
  .getElementById("saveForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    saveNote();
  });
