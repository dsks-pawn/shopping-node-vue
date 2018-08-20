
import Product from "../models/schemas/Product"

const addProductByFpt = async products => {
	if (products) {
		try {
			let data = await Product.insertMany(products)
			return data
		} catch (error) {
			throw error
		}
	}
	return false
}

module.exports = { addProductByFpt}
