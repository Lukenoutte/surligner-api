const express = require("express");
const authMiddleware = require('../middlewares/auth');
const router = express.Router();
const User = require("../models/User");

router.use(authMiddleware);

router.get("/", async function (req, res) {
    res.send({ok: true});
});


router.post("/add_unknown_words", async function (req, res) {
    const { email, unkownWords } = req.body;

    try {
         const user = await User.findOne({ email });

         if (!user) return res.status(400).send({ error: "User not found" });
        
         await user.updateOne({$push: {unkownWords: unkownWords}})

         res.send();

    } catch (err) {
        res.status(400).send({ error: "Error on add new unknown word." });
    }
});

module.exports = router;