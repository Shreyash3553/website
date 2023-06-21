const {addMsg ,getMessage}= require('../controllers/message.controllers.js')

const router = require('express').Router()


router.post("/sendmsg",addMsg);

router.post("/getmsg",getMessage);

module.exports =router