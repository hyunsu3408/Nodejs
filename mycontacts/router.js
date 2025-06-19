
const express = require('express');
const app = express();

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

app.use(router);
app.listen(3000, ()=>{
    console.log("서버 실행 중");
})