const mysql = require('mysql2');

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'startingplant',
  password: 'kalmaho0412'
});
connection.connect();
// 쿼리 실행



const express = require("express");
const bodyParser = require("body-parser");

const app = express();


connection.query('SELECT * FROM plants', function(err, results) {
  //console.log(results); // 결과 출력
  //res.send(results);
//console.log(fields); // 결과의 메타데이터 출력
});

app.get("/", (req, res)=>{
  connection.query('SELECT * FROM plants', function(err, results) {
    console.log(results[0]); // 결과 출력
    res.send(results[0]);
  //console.log(fields); // 결과의 메타데이터 출력
  });
    //res.json({message: "Hello World!2"});
});

app.get("/", (req, res)=>{
    res.json({message: "Hello World!"});
});

// 포트넘버 설정
app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
})
//------------------------------------------------------------------------------




// 연결 종료
// connection.end();
//node .\server.js
// http://localhost:3000/
//https://velog.io/@ziwon_c/Node.js-throw-er-Unhandled-error-event-%EC%97%90%EB%9F%AC   //서버끄기