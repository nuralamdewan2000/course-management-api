const express = require('express');
const { getCourses, getCourse, create, update, remove } = require('../controllers/courseController');
const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/courses', authenticateToken, getCourses);
router.get('/courses/:id', authenticateToken, getCourse);
router.post('/courses', authenticateToken, authorizeRoles('teacher'), create);
router.put('/courses/:id', authenticateToken, authorizeRoles('teacher'), update);
router.delete('/courses/:id', authenticateToken, authorizeRoles('teacher'), remove);

module.exports = router;
 