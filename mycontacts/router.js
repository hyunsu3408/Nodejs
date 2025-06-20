
const express = require('express');
const app = express();

// express의 router 호출
const router = express.Router();

router.route("/contacts")
.get((req, res) => {
    res.send("Contacts Page");
})
.post((req, res) => {
    console.log(req.body);
    res.send("Create Contacts");
});

router.route("/contacts/:id")
.put((req, res) => {
    res.send(`update contact for id ${req.params.id}`);
})
.delete((req, res) => {
    res.send(`delete contact for id ${req.params.id}`);
});

// 미들 웨어 사용하기 위해 app.use(router)
app.use(router);

app.listen(3000, ()=>{
    console.log("서버 실행 중");
})