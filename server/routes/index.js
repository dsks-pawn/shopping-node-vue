var express = require("express")
var router = express.Router()

router.use("/auth", require(__dirname + "/AuthRoutes"))
router.use("/item", require(__dirname + "/ItemRoutes"))
router.use("/company", require(__dirname + "/CompanyRoutes"))


module.exports = router
