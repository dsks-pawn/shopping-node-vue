
import Auth from "../models/Auth"
import { hashPassword, comparePassword } from "../helper/encrypt-password"

const addNewUser = async data => {
	if (data) {
		try {
			data.password = await hashPassword(data.password)
			let newUser = await Auth.create(data)
			return newUser
		} catch (error) {
			throw error
		}
	}
	return false
}
const getUserByEmail = async data => {
	if (data) {
		try {
			let getUser = await Auth.findOne({ 'email': data.email })
			let user = comparePassword(data.password, getUser.password)
			return user
		} catch (error) {
			throw error
		}
	}
}
module.exports = { addNewUser, getUserByEmail }
