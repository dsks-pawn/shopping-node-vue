import Product from "../models/schemas/Product"

const getLinkFptBySlug = async  (item) => {
	try {
		let linkFpt = await Product.findOne({slug : item}).select({
            linkFpt : 1,
            })
		return linkFpt
	} catch (error) {
		throw error
	}
	return false
}

module.exports = { getLinkFptBySlug }	
