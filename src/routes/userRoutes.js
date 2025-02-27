const express = require("express");
const router =  express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware")

// only admin can access this router
router.get("/admin",verifyToken,authorizeRoles("admin"),(req,res) =>{
    res.json({message : "Welcome Admin"});
})


// both admin and manager can access this router
router.get("/manager",verifyToken,authorizeRoles("admin","manager"),(req,res) =>{
    res.json({message : "Welcome manager"});
})



// all can access this route
router.get("/user",verifyToken,authorizeRoles("admin","manager","user"),(req,res) =>{
    res.json({message : "Welcome User"});
})

module.exports = router;