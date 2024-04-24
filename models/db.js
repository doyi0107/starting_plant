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


connection.query('SELECT * FROM plants WHERE plants_id = 1', function(err, results) {
  //console.log(results); // 결과 출력
  //res.send(results);
//console.log(fields); // 결과의 메타데이터 출력
});
// 연결 종료


module.exports = connection;