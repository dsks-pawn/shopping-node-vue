import Home from "../models/schemas/Home"

const insertDataByFpt = async (result) => {
    try {		
		let removeConllection = await Home.remove({});
		if (removeConllection.ok){
			let data = await Home.insertMany(result)
			return data
		}
		
	} catch (error) {
		throw error
	}
	return false
}

const getDataByDb = async () => {
	try {
		let data = await Home.find()
		if(data.length > 0){
			return data
		}
		return false
	} catch (error) {
		throw error
	}
}
module.exports = { insertDataByFpt, getDataByDb }