import express from "express"
const router = express.Router()
import { SUCCESS, FAILED } from "../constans.js"

import CompanyControllers from "../controllers/CompanyControllers"

router.get("/brand_hot", async (req, res) => {
    try {
        let manyBrands = await CompanyControllers.getAllBrandWithLimit()
        if (manyBrands) {
            res.json({
                status: SUCCESS,
                data: manyBrands,
                message: `Lấy danh sách thương hiệu thành công`
            })
        } else {
            res.json({
                status: FAILED,
                data: {},
                message: `Lấy danh sách thương thất bại`
            })
        }
    } catch (error) {
        res.json({
            status: FAILED,
            data: {},
            message: `Lấy dữ liệu sản phẩm thất bại từ cơ sở dữ liệu ${error}`
        })
    }
})

router.post("/brand_hot", async (req, res) => {
    let data = req.body
    try {
        let newBrand = await CompanyControllers.addNewBrand(data)
        if (newBrand) {
            res.json({
                status: SUCCESS,
                data: newBrand,
                message: `Tạo sản phẩm mới thành công`
            })
        } else {
            res.json({
                status: FAILED,
                data: {},
                message: `Tạo sản phẩm thất bại`
            })
        }
    } catch (error) {
        res.json({
            status: FAILED,
            data: {},
            message: `Tạo sản phẩm thất bại từ cơ sở dữ liệu ${error}`
        })
    }
})

module.exports = router
