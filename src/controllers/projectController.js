const express = require("express");
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

router.use(authMiddleware);

router.get("/", async function (req, res) {
    res.send({ok: true});
});

module.exports = router;