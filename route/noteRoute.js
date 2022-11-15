
var express = require('express')
var noteController = require('../controller/noteController')
var router = express.Router();
router.get('/notes',noteController.getAllNotes )
router.post('/notes/save',noteController.SaveNote )
router.put('/notes/update',noteController.UpdateNote )
router.delete('/notes/delete',noteController.deleteNote )

module.exports = router
