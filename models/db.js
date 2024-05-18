const mysql = require('mysql2');

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port : '3306',
  database: 'startingplant',
  password: 'kalmaho0412'
});

connection.connect((err) => {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
    }
    console.log('Connected to database.');
  });



module.exports = connection;