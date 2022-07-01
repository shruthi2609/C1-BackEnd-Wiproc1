const express=require("express")
const router=express.Router()
const Controllers=require("../controllers/ContactController")
router.get("/:id",Controllers.getUser)
router.post("/create",Controllers.createUser)
module.exports=router

