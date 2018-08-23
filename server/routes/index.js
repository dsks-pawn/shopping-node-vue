var express = require("express")
var router = express.Router()

router.use("/auth", require(__dirname + "/AuthRoutes"))
router.use("/product", require(__dirname + "/ProductsRoutes"))
router.use("/item", require(__dirname + "/AccessoriesRoutes"))
router.use("/home", require(__dirname + "/HomeRoutes"))

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

module.exports = router
