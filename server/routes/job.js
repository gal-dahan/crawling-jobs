
const express = require('express')

const router = express.Router()
const {
    getAllJobs,getJobByCompany
  } = require('../controllers/jobs')
  

router.route('/').get(getAllJobs)
router.route('/:companyName').get(getJobByCompany)

module.exports = router
