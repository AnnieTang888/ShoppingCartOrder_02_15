const express = require('express')

const router = express.Router()//({caseSensitive: true})

router.get('/hello', (req, res) => {
    res.send("Hello World from admin app!!!")
})


router.get('/load', (req, res) => {
    res.send("New Module Loaded using routes!!!")
})

module.exports = router;
