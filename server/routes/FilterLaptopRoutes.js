import express from "express"
const router = express.Router()
import { SUCCESS, FAILED } from "../constans.js"

import FilterLaptopControllers from "../controllers/FilterLaptopControllers"

router.get("/product-fpt-shop-selected", async (req, res) => {
	try {
		let data = await FilterLaptopControllers.laptopFptShopSelected()
		if (data) {
			return res.json({
				status: SUCCESS,
				data: data,
				message: `lấy dữ liệu sản phẩm thành công`
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
