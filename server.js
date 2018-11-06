const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

const ngrok = require('ngrok');
(async function() {
  const url = await ngrok.connect(port);
  console.log('ngrok connected on \n', url);
})();

// Serve any static files
app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));