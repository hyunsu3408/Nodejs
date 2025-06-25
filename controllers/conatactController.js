// try-catch문을 대신해 async-handler가 그 역할을 함
const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactmodel")

// GET all contacts
// GET /contacts

const getAllContacts = asyncHandler(async(req,res)=>{
    const contacts = await Contact.find()
    res.send(contacts);
})

// create contact
// POST /contact
const createContact = asyncHandler(async(req,res)=>{
    // req.body에 req 정보 들어오게 됨
    console.log(req.body);
    const {name,email,phone} = req.body;
    if (!name || !email || !phone){
        return res.send("필수값 입력 바람");
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.send("Create Contacts");
})

const getContacts = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    res.send(contact)
})


// Get contact
// GET /contact/:id
const updateContact = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const {name, email, phone} = req.body;
    const contact = await Contact.findById(id);
    if(!contact){
        throw new Error("Contact not found");
    }
    contact.name = name;
    contact.email = email;
    contact.phone = phone;
})

const deleteContact = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const {name, email, phone} = req.body;
    const contact = await Contact.findById(id);
    if(!contact){
        throw new Error("Contact not found");
    }
    await Contact.deleteOne();
    res.send("Deleted")
})


module.exports = {
    createContact,getAllContacts
    ,updateContact,deleteContact,getContacts};