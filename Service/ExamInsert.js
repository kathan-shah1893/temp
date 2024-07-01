const mysql = require('mysql');

class ExamModel {
  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'exam'
    });
  }

  async create(examData) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `INSERT INTO exams SET ?`,
        examData,
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }
}

module.exports = new ExamModel();