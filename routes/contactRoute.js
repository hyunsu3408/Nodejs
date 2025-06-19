const express = require('express');
const router = express.Router();

router.route("/")
.get((req, res) => {
    res.send("Contacts Page");
})
.post((req, res) => {
    console.log(req.body);
    res.send("Create Contacts");
});

router.route("/:id")
.put((req, res) => {
    res.send(`update contact for id ${req.params.id}`);
})
.delete((req, res) => {
    res.send(`delete contact for id ${req.params.id}`);
});


module.exports = router;