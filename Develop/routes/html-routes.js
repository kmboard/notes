const require = require('express');
const notesRoute = ('./notes');
const app = express();

app.use('./notes', notesRoute );

module.exports = app;