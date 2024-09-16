const { createEnquiry ,getmeta, createUser } = require("./controller");
const router = require("express").Router();



router.post("/",createEnquiry);
router.get("/fetchmeta",getmeta);
router.post("/user",createUser);
// route.post("/login",);

module.exports = router;
