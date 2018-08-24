import AdditionalPhone from "../models/schemas/AdditionalPhone"
import AdditionalLaptop from "../models/schemas/AdditionalLaptop"

const insertDataPhoneByFpt = async (result) => {
    try {		
		let removeConllection = await AdditionalPhone.remove({});
		if (removeConllection.ok){
			let data = await AdditionalPhone.insertMany(result)
			return data
		}
		
	} catch (error) {
		throw error
	}
	return false
}

const getDataPhoneByDb = async () => {
	try {
		let data = await AdditionalPhone.find()
		if(data.length > 0){
			return data
		}
		return false
	} catch (error) {
		throw error
	}
}

const insertDataLaptopByFpt = async (result) => {
    try {		
		let removeConllection = await AdditionalLaptop.remove({});
		if (removeConllection.ok){
			let data = await AdditionalLaptop.insertMany(result)
			return data
		}
		
	} catch (error) {
		throw error
	}
	return false
}

const getDataLaptopByDb = async () => {
	try {
		let data = await AdditionalLaptop.find()
		if(data.length > 0){
			return data
		}
		return false
	} catch (error) {
		throw error
	}
}
module.exports = { insertDataPhoneByFpt ,insertDataLaptopByFpt, getDataPhoneByDb, getDataLaptopByDb}