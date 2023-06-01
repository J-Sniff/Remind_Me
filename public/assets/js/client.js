// Function to retrieve notes from the backend
function retrieveNotes() {
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
}

// Function to save a new note to the backend
function saveNote() {
  const title = document.querySelector(".note-title").value;
  const content = document.querySelector(".note-textarea").value;

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
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error);
    });
}

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

// Event handler for retrieving notes (e.g., when a button is clicked)
document
  .getElementById("retrieveButton")
  .addEventListener("click", retrieveNotes);

// Event handler for saving a note (e.g., when a form is submitted)
document.getElementById("saveButton").addEventListener("click", saveNote);

// Event handler for saving a note when the save button is clicked
saveNoteBtn.addEventListener('click', handleNoteSave);
