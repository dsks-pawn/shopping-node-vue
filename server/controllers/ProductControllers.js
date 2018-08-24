import Product from "../models/schemas/Product"

const addProductByFpt = async products => {
	try {
		let data = await Product.insertMany(products)
		return data
	} catch (error) {
		throw error
	}
	return false
}

const getProductByCategoryLimit = async category => {
	try {
		let data = await Product.find({ category: category}).limit(20).sort([['updatedAt', 'descending']])
		return data
	} catch (error) {
		throw error
	}
	return false
}
module.exports = { addProductByFpt, getProductByCategoryLimit }	
