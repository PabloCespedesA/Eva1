const express = require('express')
const PageController = require('./controllers/PageController')
const TestController = require('./controllers/TestController')
const FormulaController = require('./controllers/FormulaController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const testController = new TestController()
const formulaController = new FormulaController()

// Routes
router.get('/', pageController.renderHome)
router.get('/test', testController.renderTestPage)
router.post('/test', testController.renderDiscount)
router.get('/formula', formulaController.renderFormulaPage)
router.post('/formula', formulaController.renderInterestpercentage)

router.get('*', pageController.renderNotFound)

module.exports = router
