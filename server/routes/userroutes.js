const {register ,login,setavatar,getallcontact}  = require('../controllers/usercontrollers')


const router = require('express').Router()

router.post("/register",register);

router.post("/login",login);

router.post("/setavatar/:id",setavatar);

router.get("/getallcontact/:id",getallcontact);


module.exports =router