import express from "express"
const router = express.Router()
import rp from 'request-promise'
import cheerio from "cheerio"
import { SUCCESS, FAILED } from "../constans.js"
import AdditionalServices from '../models/services/AdditionalServices'
import AdditionalControllers from "../controllers/AdditionalControllers"

router.get("/phone-fpt", async (req, res) => {
    let options = {
        uri: 'https://fptshop.com.vn/dien-thoai',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(options)
        .then(async function ($) {
           let result = await AdditionalServices.crawlAdditional($)
           if(result){
            try {
                let data = await AdditionalControllers.insertDataPhoneByFpt(result)
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

router.get("/phone-db", async(req, res) => {
    let data = await AdditionalControllers.getDataPhoneByDb()
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

router.get("/laptop-fpt", async (req, res) => {
    let options = {
        uri: 'https://fptshop.com.vn/may-tinh-xach-tay',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(options)
        .then(async function ($) {
           let result = await AdditionalServices.crawlAdditional($)
           if(result){
            try {
                let data = await AdditionalControllers.insertDataLaptopByFpt(result)
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

router.get("/laptop-db", async(req, res) => {
    let data = await AdditionalControllers.getDataLaptopByDb()
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