const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.use(function (req, res, next) {
  if (!req.session.data.reports) {
    req.session.data.reports = []
  }
  req.session.data.todaysDate = new Date(Date.now()).toISOString()
  next()
})


router.post('/create-a-report/confirmation', function (req, res, next) {
  var reportDetails = {
    id: 'jani',
    time: req.session.data.todaysDate,
    title: 'note'
  }
  req.session.data.reports.push(reportDetails)
  next()
})
module.exports = router
