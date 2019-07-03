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
  var id = generateID(2456, 9643)
  var reportDetails = {
    id: id,
    policyTitle: req.session.data.report.policyTitle,
    area: 'People',
    departmentId: '',
    owner: "Sinead O'Sullivan",
    status: 'Created',
    createdDate: req.session.data.todaysDate,
    createdBy: 'Policy reporter',
    updatedDate: '',
    updatedBy: '',
    approvedDate: '',
    approvedBy: '',
    currentRagRating: req.session.data.report.currentRagRating,
    previousRagRating: 'amber',
    reasonsForRagRating: req.session.data.report.reasonsForRagRating,
    recentAchievements: req.session.data.report.recentAchievements,
    forwardLook: req.session.data.report.forwardLook,
    internationalAndDA: req.session.data.report.internationalAndDA || ''
  }
  req.session.data.reports.push(reportDetails)
  req.session.data.report.id = id
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
