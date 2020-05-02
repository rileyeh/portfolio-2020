const express = require('express');
const path = require('path');

const app = express();

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(4004, () => console.log('listening on port 4004'));