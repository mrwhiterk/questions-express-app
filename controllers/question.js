const Question = require('../models/index')

module.exports = {
  new: (req, res) => {
    res.render('question/new')
  },
  create: (req, res) => {
    const {
      content,
      answers
    } = req.body
    Question.create({
      content,
      answers,
      isAnswered: false
    }).then(item => {
      res.redirect('/')
    })
  },
  show: (req, res) => {
    res.send('show')
  },
  edit: (req, res) => {
    res.send('edit')
  },
  update: (req, res) => {
    res.send('update')
  },
  delete: (req, res) => {
    res.send('delete')
  }
}