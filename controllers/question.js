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
    Question.findById(req.params.id).then(item => {
      res.render("question/show", {
        item
      })
    })
  },
  edit: (req, res) => {
    Question.findById(req.params.id).then(item => {
      console.log(item)
      res.render("question/edit", {
        item
      })
    })
  },
  update: (req, res) => {
    const {
      content,
      answers
    } = req.body

    Question.findByIdAndUpdate(req.params.id, {
      content,
      answers: answers.split(",")
    }).then(item => {
      res.redirect(`/question/${item._id}`)
    })
  },
  delete: (req, res) => {
    Question.findByIdAndRemove(req.params.id).then(() => {

      return res.redirect('/')
    })
  }
}