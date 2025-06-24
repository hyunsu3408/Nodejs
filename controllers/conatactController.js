// try-catch문을 대신해 async-handler가 그 역할을 함
const asyncHandler = require("express-async-handler")

// GET all contacts
// GET /contacts

const getAllContacts = asyncHandler(async(req,res)=>{
    res.send("Contact Page");
})

// create contact
// POST /contact
const createContact = asyncHandler(async(req,res)=>{
    // req.body에 req 정보 들어오게 됨
    console.log(req.body);
    const {name,email,phone} = req.body;
    if (!name || !email || !phone){
        return res.send("필수값 입력 바람")
    }
    res.send("Create Contacts");
})


module.exports = {createContact,getAllContacts};