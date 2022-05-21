const router = require('express').Router();
const controller = require('../db/controller');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the tips
router.get('/notes', (req, res) => {
  controller
      .getNotes()
     .then((notes)=> {
       res.json(notes)
     })
     .catch((err)=>res.status(500).json(err))
 });

// POST Route for a new UX/UI tip
router.post('/notes', (req, res) => {
  controller
  .readAndwrite(req.body)
  .then((note)=>res.json(note))
  .catch((err)=>res.status(500).json(err))
});


module.exports = router;
