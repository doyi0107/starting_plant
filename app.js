const mysql = require('mysql2');

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'startingplant',
  password: 'kalmaho0412'
});

// 쿼리 실행
connection.query('SELECT * FROM plants', function(err, results, fields) {
  console.log(results); // 결과 출력
  //console.log(fields); // 결과의 메타데이터 출력
});

// 연결 종료
connection.end();