const express = require('express')
const router = express.Router();
const Question = require('../models/index')

router.get("/", (req, res) => {
  Question.find({}).then(items => {
    res.render("index", {
      items
    })
  })
})

// router.use('/question', require("./question.js"))

module.exports = router;