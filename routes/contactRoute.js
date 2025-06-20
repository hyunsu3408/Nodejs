const express = require('express');
const router = express.Router();

router.route("/")
.get((req, res) => {
    res.send("Contacts Page");
})
.post((req, res) => {
    // req.body에 req 정보 들어오게 됨
    console.log(req.body);
    const {name,email,phone} = req.body;
    if (!name || !email || !phone){
        return res.send("필수값 입력 바람")
    }
    res.send("Create Contacts");
});

router.route("/:id")
.put((req, res) => {
    res.send(`update contact for id ${req.params.id}`);
})
.delete((req, res) => {
    res.send(`delete contact for id ${req.params.id}`);
});

// router를 외부에서 쓰기 위해 exports 해주기
module.exports = router;