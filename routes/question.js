const express = require("express")
const router = express.Router();
const questionController = require("../controllers/question.js")

router.get('/new', questionController.new)
router.post('/', questionController.create)
router.get('/:id', questionController.show)
router.get('/:id/edit', questionController.edit)
router.put('/:id', questionController.update)
router.delete('/:id', questionController.new)

module.exports = router