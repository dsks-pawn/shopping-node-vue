import express from "express"
const router = express.Router()
import rp from 'request-promise'
import cheerio from "cheerio"
import { SUCCESS, FAILED } from "../constans.js"
import HomeServices from '../models/services/HomeServices'
import HomeControllers from "../controllers/HomeControllers"

router.get("/information-fpt", async (req, res) => {
    let baseOptions = {
        uri: 'https://fptshop.com.vn/',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(baseOptions)
        .then(async function ($) {
           let menu = await HomeServices.crawlMenu($)
           let newsWithAds = await HomeServices.crawlNewsWithAds($)
           let productsHot = await HomeServices.crawlProductsHot($)
           let accessoriesHot = await HomeServices.crawlAccessoriesHot($)
           if(menu && newsWithAds && productsHot && accessoriesHot){
            let result = {}
            result.menu = menu
            result.carousel = newsWithAds.carousel
            result.ads = newsWithAds.ads
            result.news = newsWithAds.news
            result.products = productsHot
            result.accessories = accessoriesHot

            try {
                let data = await HomeControllers.insertDataByFpt(result)
                if (data) {
                    return res.json({
                        status: SUCCESS,
                        data: data,
                        message: `Tạo mới sản phẩm thành công`
                    })
                } else {
                    return res.json({
                        status: FAILED,
                        data: {},
                        message: `Lỗi trong quá trình tạo mới sản phẩm`
                    })
                }
            } catch (error) {
                return res.json({
                    status: FAILED,
                    data: {},
                    message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
                })
            }
           }
        })
        .catch(function (err) {
          throw err
        });
})

router.get("/information-db", async(req, res) => {
    let data = await HomeControllers.getDataByDb()
    try {
        if (data) {
            return res.json({
                status: SUCCESS,
                data: data,
                message: `Lấy dữ liệu sản phẩm thành công`
            })
        } else {
            return res.json({
                status: FAILED,
                data: {},
                message: `Lỗi trong quá trình lấy dữ liệu sản phẩm`
            })
        }
    } catch (error) {
        return res.json({
            status: FAILED,
            data: {},
            message: `Lỗi xảy ra trong quá trình lấy dữ liệu sản phẩm từ cơ sở dữ liệu ${error}`
        })
    }
})


module.exports = router	