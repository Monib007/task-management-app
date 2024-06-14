const { Router } = require('express');
const { getTasks, saveTasks, updateTasks, deleteTasks } = require('../controllers/taskController');

const router = Router();

router.get('/', getTasks)
router.post('/save', saveTasks)
router.post('/update', updateTasks)
router.post('/delete', deleteTasks)

module.exports = router