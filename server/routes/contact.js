
const express = require('express')

const router = express.Router()
  const{contact}=require('../controllers/contact');

router.route('').post(contact);

module.exports = router
