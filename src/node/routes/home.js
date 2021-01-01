const express = require('express');
const router = express.Router()

router.get('/', (req, res)=> {
    // for using html and pug
    res.render('index', {
      heading: "Platform HomePage "
    })
      
    })

module.exports = router;