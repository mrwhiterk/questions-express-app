const Question = require('../models/index')

Question.remove({}).then(() => {
  Question.create({
    content: 'What is node?',
    answers: ['A javascript runtime created from the Chrome V8 engine', 'a good way to build things'],
    isAnswered: false
  })
  Question.create({
    content: 'What is the internet?',
    answers: ['a furry animal', 'A network of networks'],
    isAnswered: false
  })
  Question.create({
    content: 'What is a code bug?',
    answers: ['A undesirable action or property in code', 'The literal worst thing to find'],
    isAnswered: false
  })
})