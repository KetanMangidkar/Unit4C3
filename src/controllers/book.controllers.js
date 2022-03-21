const express = require("express");

const Book = require("../models/book.models");

const router = express.Router();

router.post("", async (req,res)=>{
    try {
        const post = await user.create(req.body);
        return res.send(post);
    } catch (err) {
        return res.send(err);
    }
});
router.get("", async (req,res)=>{
    try {
        const allusers = await user.find().lean().exec();
        return res.send(allusers);
    } catch (err) {
        return res.send(err);
    }
});
router.get("/:id", async (req,res)=>{
    try {
        const oneuser = await user.findByid(req.params.id).lean().exec();
        return res.send(oneuser);
    } catch (err) {
        return res.send(err);
    }
});
router.patch("/:id", async (req,res)=>{
    try {
        const changeuser = await user.findByidAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.send(changeuser);
    } catch (err) {
        return res.send(err);
    }
});
router.delete("", async (req,res)=>{
    try {
        const deleteuser = await user.findByidAndDelete(req.params.id);
        return res.send(deleteuser);
    } catch (err) {
        return res.send(err);
    }
});

module.exports = router;



