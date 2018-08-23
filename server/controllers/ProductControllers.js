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
// const addProductByFpt = products => {
// 	let promise = new Promise((resolve, reject) => {
// 		let data = Product.insertMany(products, (err, product) => {
// 			if (err) {
// 				reject(err)
// 			} else {
// 				resolve(product)
// 			}
// 		})
// 	})
// 	return promise
// }
module.exports = { addProductByFpt }
