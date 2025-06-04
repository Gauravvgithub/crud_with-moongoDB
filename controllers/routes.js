const express = require("express")
const router = express.Router()
const Employee = require("../models/connection.model")


router.get("/add-emp",(request, response)=>{
    response.render("addEmp")
})

router.post("/",()=>{
    
})

module.exports = router