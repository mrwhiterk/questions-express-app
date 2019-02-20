const Question = require('../models/index')

Question.remove({}).then(() => {
  Question.create({
    content: 'What is a node?',
    answers: ['a node is something', 'a node is good'],
    isAnswered: false
  })
  Question.create({
    content: 'What is a cat?',
    answers: ['a furry animal', 'cute thing'],
    isAnswered: false
  })
  Question.create({
    content: 'What is a rat?',
    answers: ['disgusting', 'tasty'],
    isAnswered: false
  })
})