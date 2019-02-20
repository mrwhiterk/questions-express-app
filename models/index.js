const mongoose = require('../db/connection')

const Question = new mongoose.Schema({
  content: String,
  isAnswered: Boolean,
  answers: {
    type: Array
  }
})

module.exports = mongoose.model("Question", Question)