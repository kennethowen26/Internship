const router = require('express').Router();
const ctrl = require('../controllers/task.controller');

router.post('/', ctrl.createTask);
router.get('/', ctrl.getTasks);
router.get('/:id', ctrl.getTaskById);
router.put('/:id', ctrl.updateTask);
router.delete('/:id', ctrl.deleteTask);

module.exports = router;