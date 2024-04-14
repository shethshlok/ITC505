const express = require('express');
const logger = require('morgan');
const path = require('path');
const server = express();

// Middleware to parse JSON bodies
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Existing route
server.get('/do_a_random', (req, res) => {
 res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`);
});

// New route to handle POST requests for the Mad Lib story
server.post('/generate-story', (req, res) => {
 const { noun1, adjective1, pluralNoun1, noun2, adjective2 } = req.body;

 const story = `
    Once upon a time, in a ${adjective1} world, there was a ${noun1} who loved ${pluralNoun1}. 
    Every day, this ${noun1} would watch ${pluralNoun1} on their ${noun2}, dreaming of the day they could be a part of the ${adjective2} ${pluralNoun1}.
 `;

 // Send the generated story back in the response
 res.json({ story });
});

// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public');
server.use(express.static(publicServedFilesPath));

// Adjust the port for Vercel
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Ready on port ${PORT}!`));
