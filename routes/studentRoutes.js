const express = require('express');

const router = express.Router();
const studentController = require('../controller/student');

router.post('/student',studentController.studentSignUp);
router.get('/student', studentController.findStudent);
router.put('/student',studentController.updateStudent);
router.delete('/student',studentController.deleteStudent  )


module.exports = router;
