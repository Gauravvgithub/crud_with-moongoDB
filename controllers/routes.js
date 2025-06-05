const express = require("express");
const router = express.Router();
const Employee = require("../models/connection.model");

router.get("/add-emp", (request, response) => {
  response.render("addEmp");
});

router.post("/save-emp", async (request, response) => {
  try {
    const Emp = new Employee({
      fullname: request.body.fullname,
      email: request.body.email,
      phone: request.body.mobile,
      city: request.body.city,
    });
    await Emp.save();
    response.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

//show all employees

router.get("/show-all-emp", async (req,res)=>{
    try {
        const result = await Employee.find()
        // console.log(result)
        res.render("showEmp", {list : result})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
