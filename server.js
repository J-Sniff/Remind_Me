const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

// Routes for handling note data
app.get('api/notes', (req, res) => {

});

app.post('api/notes', (req, res) => {

});

// Setting up port for server
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});