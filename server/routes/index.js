var express = require("express")
var router = express.Router()

router.use("/auth", require(__dirname + "/AuthRoutes"))

module.exports = router
