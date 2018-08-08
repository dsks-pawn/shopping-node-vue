import Company from "../models/Company"

const getAllBrandWithLimit = async () => {
    try {
        let brands = await Company.find()
            .limit(30)
            .sort({ name: 1 })
        return brands
    } catch (error) {
        throw error
    }
}
const addNewBrand = async data => {
	try {
		let newBrand = await Company.create(data)
		return newBrand
	} catch (error) {
		throw error
	}
}

module.exports = { getAllBrandWithLimit, addNewBrand }