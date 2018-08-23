import Accessories from "../models/schemas/Accessories"

const addAccessoriesByFpt = async products => {
	try {
		let data = await Accessories.insertMany(products)
		return data
	} catch (error) {
		throw error
	}
	return false
}
module.exports = {addAccessoriesByFpt}