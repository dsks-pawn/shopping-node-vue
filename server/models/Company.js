import mongoose from "mongoose"
const Schema = mongoose.Schema

const CompanySchema = Schema({
	name: {
		type: String,
		required: true
	},
	logo: {
		type: String,
		required: true
	},
	description: {
		type: Object,
		required: true
	},
	created_date: {
		type: Date,
		default: Date.now
	},
	updated_date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model("Company", CompanySchema)
