const Router = require('express')
const router = new Router()
const projectController = require('../controllers/projectController')

router.post('/', projectController.create)
router.get('/', projectController.getAll)
router.get('/:id', projectController.getOne)
router.delete('/:id', projectController.destroy)


module.exports = router