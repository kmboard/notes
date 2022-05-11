const router = require('express').Router();
const controller = require('../db/controller')
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the tips
router.get('/notes', (req, res) => {
 controller
    .getAllNotes()
    .then((notes)=> {
        return res.json(notes)
    })
    .catch((err)=>res.status(500).json(err))
});

// POST Route for a new UX/UI tip
router.post('/', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title: title,
      text: text,  
      note_id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Notes added sucessfully 📝`);
  } else {
    res.error('Error adding note');
  }
});

module.exports = router;
