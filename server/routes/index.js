var express = require("express")
var router = express.Router()

router.use("/auth", require(__dirname + "/AuthRoutes"))
router.use("/leech", require(__dirname + "/ProductsRoutes"))


module.exports = router
