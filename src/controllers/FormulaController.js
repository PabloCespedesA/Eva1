class FormulaController {
  constructor () {
    this.interestpercentage = null
    this.renderFormulaPage = this.renderFormulaPage.bind(this)
    this.calculateInterest = this.calculateInterest.bind(this)
    this.renderInterestpercentage = this.renderInterestpercentage.bind(this)
  }

  calculateInterest (capital, years, interestpercentage) {
    return (capital * years * (interestpercentage / 100))
  }

  renderFormulaPage (req, res) {
    res.render('formula', {
      interestpercentage: this.interestpercentage
    })
  }

  renderInterestpercentage (req, res) {
    const interestpercentage = parseFloat(req.body.interestpercentage)
    const capital = parseFloat(req.body.capital)
    const years = parseFloat(req.body.years)

    if (interestpercentage) {
      this.interestpercentage = interestpercentage
    }

    res.render('formula', {
      interestpercentage: this.interestpercentage,
      capital,
      years,
      interest: this.calculateInterest(capital, years)
    })
  }
}

module.exports = FormulaController
