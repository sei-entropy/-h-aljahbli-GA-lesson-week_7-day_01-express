const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.json({message: 'Hello from SEI'});
});


// exports router so it can be used by server.js file
module.exports = router;