var express = require("express")
var router = express.Router()

router.use("/auth", require(__dirname + "/AuthRoutes"))
router.use("/product", require(__dirname + "/ProductsRoutes"))
router.use("/item", require(__dirname + "/AccessoriesRoutes"))
router.use("/home", require(__dirname + "/HomeRoutes"))
router.use("/additional", require(__dirname + "/AdditionalRoutes"))
router.use("/filter-laptop", require(__dirname + "/FilterLaptopRoutes"))

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

module.exports = router
