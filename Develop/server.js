const express = require('express')

const noteRoutes = require('./routes/notes-routes')
const htmlRoutes = require('./routes/html-routes')




const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/api', noteRoutes);



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);