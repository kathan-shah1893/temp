const express = require('express');
const router = express.Router();
const ExamController = require('../controller/Examcontroller');

router.post('/store', ExamController.storeExamData);

module.exports = router;