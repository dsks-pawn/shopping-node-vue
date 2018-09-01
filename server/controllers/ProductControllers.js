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

const getProductByCategory = async category => {
	try {
		let data = await Product.find({ category: category }).sort({ currPrice: -1 })
		return data
	} catch (error) {
		throw error
	}
	return false
}

const getProductByCategoryLimit = async category => {
	try {
		let data = await Product.find({ category: category }).limit(20).sort({ currPrice: -1 })
		return data
	} catch (error) {
		throw error
	}
	return false
}

const getProductById = async id =>
 {
	try {
		let data = await Product.findById(id)
		return data
	} catch (error) {
		throw error
	}
	return false
}

const checkFullDataProduct = async id =>
 {
	try {
		let checkFullData = await Product.findById(id).select({
			fullData: 1
		})
		return checkFullData
	} catch (error) {
		throw error
	}
	return false
}

const getLinkFptById = async id =>
 {
	try {
		let linkFpt = await Product.findById(id).select({
			linkFpt: 1,
		})
		return linkFpt
	} catch (error) {
		throw error
	}
	return false
}

const updateFullProductFpt = async (id, product) => {
	let options = {
		new: true,
		upsert: true
	}
	try {
		let data = await Product.findByIdAndUpdate(id, product, options)
		return data
	} catch (error) {
		throw error
	}
	return false
}


module.exports = { addProductByFpt, getProductByCategoryLimit, checkFullDataProduct, getProductById, getLinkFptById, updateFullProductFpt, getProductByCategory }	
