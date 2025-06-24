const express = require('express');
const router = express.Router();
const {createContact,getAllContacts} = require("../controllers/conatactController")


router.route("/")
.get(getAllContacts)
.post(createContact);

router.route("/:id")
.put((req, res) => {
    res.send(`update contact for id ${req.params.id}`);
})
.delete((req, res) => {
    res.send(`delete contact for id ${req.params.id}`);
});

// router를 외부에서 쓰기 위해 exports 해주기
module.exports = router;