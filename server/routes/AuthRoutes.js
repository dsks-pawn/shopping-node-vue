
import express from "express"
const router = express.Router()
import { isNumeric, isEmail } from 'validator';
import { SUCCESS, FAILED } from "../constans.js"

import AuthControllers from '../controllers/AuthControllers'

router.post("/register", async (req, res) => {
	let data = req.body
	try {
		let newUser = await AuthControllers.addNewUser(data)
		if (newUser) {
			res.json({
				status: SUCCESS,
				data: newUser,
				message: `Tạo mới user thành công`
			})
		} else {
			res.json({
				status: FAILED,
				data: {},
				message: `Lỗi trong quá trình tạo mới user`
			})
		}
	} catch (error) {
		res.json({
			status: FAILED,
			data: {},
			message: `Lỗi xảy ra trong quá trình tạo mới user ở cơ sở dữ liệu ${error}`
		})
	}
})

router.post("/login", async (req, res) => {
	let data = req.body
	try {
		let user = await AuthControllers.getUserByEmail(data)
		if (user) {
			if (user) {
				res.json({
					status: SUCCESS,
					data: user,
					message: `Login thành cmn công`
				})
			} else {
				res.json({
					status: FAILED,
					data: {},
					message: `Email hoặc Password bạn nhập không đúng`
				})
			}
		}
	} catch (error) {
		res.json({
			status: FAILED,
			data: {},
			message: `Lỗi xảy ra trong quá trình tìm kiếm user ở cơ sở dữ liệu ${error}`
		})
	}

})

module.exports = router