const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send({ status: 'Ok'});
  });
  
router.get('/favicon.ico', (req, res) => res.status(404).send());


module.exports = router;
