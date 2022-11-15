
var express = require('express')
var router = express.Router();
router.get('/notes', function (req, res) {
    res.send('get all notes');
})

module.exports = router
