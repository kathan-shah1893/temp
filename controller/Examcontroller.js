const ExamModel = require('../Service/ExamInsert');

class ExamController {
  async storeExamData(req, res) {
    const examData = req.body;
    try {
      const exam = await ExamModel.create(examData);
      res.json({ message: 'Exam data inserted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error inserting exam data' });
    }
  }
}

module.exports = new ExamController();