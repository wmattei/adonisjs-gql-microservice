'use strict'

class HomeController {
  index({
    response
  }) {
    return response.json({
      test: "ok"
    })
  }
}

module.exports = HomeController
