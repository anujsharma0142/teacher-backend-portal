const express = require('express');
const {
    addStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, addStudent);
router.get('/', authMiddleware, getStudents);
router.get('/:id', authMiddleware, getStudentById);
router.put('/:id', authMiddleware, updateStudent);
router.delete('/:id', authMiddleware, deleteStudent);

module.exports = router;
