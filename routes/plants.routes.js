module.exports = app =>{
    const plant = require("../controllers/plants.controller.js");
   
    app.get('/:id', (req, res,next) => {
        const params = req.params
        const id = req.params.id
        res.send(id,'Hello World!')// 해당 데이터는 응답 메시지의 Body에 들어간다
    })


};//http://localhost:5000/calendar?user_id=123
//https://gofnrk.tistory.com/104