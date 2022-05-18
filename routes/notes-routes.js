const router = require('express').Router();
const controller = require('../db/controller');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the tips
router.get('/notes', (req, res) => {
  controller
     .getNotes()
     .then((notes)=> {
       console.log(notes)
         return res.json(notes)
         
     })
     .catch((err)=>res.status(500).json(err))
 });

// POST Route for a new UX/UI tip
router.post('/notes', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title: title,
      text: text,  
      note_id: uuid(),
    };

    readAndAppend(newNote, './db.json');
    res.json(`Notes added sucessfully 📝`);
  } else {
    res.error('Error adding note');
  }
});

router.delete('/:id', (req,res) => {
  removeFromFile(req.params.id, './db.json');
  res.status(201).end();
});

module.exports = router;
