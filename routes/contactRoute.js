const express = require('express');
const router = express.Router();
const {createContact,getAllContacts
    ,updateContact,deleteContact
    ,getContacts} = require("../controllers/conatactController")


router.route("/")
.get(getAllContacts)
.post(createContact);

router.route("/:id")
.get(getContacts)
.put(updateContact)
.delete(deleteContact);

// router를 외부에서 쓰기 위해 exports 해주기
module.exports = router;