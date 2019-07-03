const express = require('express')
const router = express.Router()

function generateID (min, max) {
  return 'IS' + Math.floor(Math.random() * (max - min + 1) + min)
}

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
    id: generateID(2456, 9643),
    title: '',
    status: 'Created',
    createdDate: req.session.data.todaysDate,
    createdBy: 'Policy reporter',
    updatedDate: '',
    updatedBy: '',
    approvedDate: '',
    approvedBy: ''
  }
  req.session.data.reports.push(reportDetails)
  req.session.data.report = '' // clear current data
  next()
})

router.get('/report/:id/:page?/:subpage?', function (req, res, next) {
  res.locals.report = req.session.data.reports.filter(function (report) {
    if (report.id === req.params.id) {
      return report
    }
  })[0]
  if (!req.params.page) {
    res.render('report/index')
  } else {
    res.render('report/' + req.params.page + '/' + req.params.subpage)
  }
})
module.exports = router
