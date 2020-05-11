const express = require('express');
const app = express();

app.use( express.static( `${__dirname}/build` ) )

app.listen(4005, () => console.log('listening on port 4005'));