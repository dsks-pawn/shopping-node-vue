var express = require("express")
var router = express.Router()

router.use("/auth", require(__dirname + "/AuthRoutes"))
router.use("/item", require(__dirname + "/ItemRoutes"))


module.exports = router
