const express = require("express");
const authMiddleware = require('../middlewares/auth');
const router = express.Router();
const User = require("../models/User");

router.use(authMiddleware);

router.get("/", async function (req, res) {
    res.send({ok: true});
});

router.post("/list_words", async function (req, res) {
    const { id } = req.body;
    
    try {
        const user = await User.findById( id ).select(
            "+unkownWords");
       
        if (!user) return res.status(400).send({ error: "User not found" });
        
        const unkownWords = user.unkownWords;
        res.send(unkownWords);

   } catch (err) {
       res.status(400).send({ error: "Error on get unknown words." });
   }
});

router.post("/add_unknown_words", async function (req, res) {
    const { id, unkownWords } = req.body;
    
    try {
         const user = await User.findById( id );
        
         if (!user) return res.status(400).send({ error: "User not found" });
         
         await user.updateOne({$push: {unkownWords: unkownWords}});

         res.send();

    } catch (err) {
        res.status(400).send({ error: "Error on add new unknown word." });
    }
});

router.post("/remove_unknown_words", async function (req, res) {
    const { id, unkownWords } = req.body;

    try {
         const user = await User.findById( id );

         if (!user) return res.status(400).send({ error: "User not found" });
        
         await user.updateOne({$pull: {unkownWords: { $in: unkownWords }}})

         res.send();

    } catch (err) {
        res.status(400).send({ error: "Error on remove new unknown word." });
    }
});

module.exports = router;