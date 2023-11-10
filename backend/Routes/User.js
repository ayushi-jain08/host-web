const express = require("express");
const router = express();
const User = require("../Model/User");

router.get("/user", async(req,res) => {
    try {
        const user = await User.find()
        if(!user){
            res.status(400).json("No user found")
        }
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
})

module.exports = router