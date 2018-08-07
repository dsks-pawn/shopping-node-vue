import Items from "../models/Items"

const getAllItemWithLimit = async () => {
	try {
		let manyItems = await Items.find()
			.limit(30)
			.sort({ name: 1 })
		return manyItems
	} catch (error) {
		throw error
	}
}

const addNewItem = async data => {
	try {
		let newItem = await Items.create(data)
		return newItem
	} catch (error) {
		throw error
	}
}

module.exports = { getAllItemWithLimit, addNewItem }
