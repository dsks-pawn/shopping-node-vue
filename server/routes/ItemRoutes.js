import express from "express"
const router = express.Router()
import { SUCCESS, FAILED } from "../constans.js"

import ItemControllers from "../controllers/ItemControllers"

router.get("/items_hot", async (req, res) => {
	try {
		let manyItems = await ItemControllers.getAllItemWithLimit()
		if (manyItems) {
			res.json({
				status: SUCCESS,
				data: manyItems,
				message: `Lấy dữ liệu sản phẩm thành công`
			})
		} else {
			res.json({
				status: FAILED,
				data: {},
				message: `Lấy dữ liệu sản phẩm thất bại`
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

router.post("/items_hot", async (req, res) => {
	let data = req.body
	try {
		let newItem = await ItemControllers.addNewItem(data)
		if (newItem) {
			res.json({
				status: SUCCESS,
				data: newItem,
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
