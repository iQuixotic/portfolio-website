const path = require("path");
const router = require('express').Router();

// if no routes are hit, go to index
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../views'));
});

module.exports = router;