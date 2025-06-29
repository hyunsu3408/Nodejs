const express = require('express');
const router = express.Router();
const {createContact,getAllContacts
    ,updateContact,deleteContact
    ,getContacts,addContactForm} = require("../controllers/conatactController")


router.route("/")
.get(getAllContacts);

// 연락처 추가
router.route("/add")
.get(addContactForm)
.post(createContact)

router.route("/:id")
.get(getContacts)
.put(updateContact)
.delete(deleteContact);

// router를 외부에서 쓰기 위해 exports 해주기
module.exports = router;