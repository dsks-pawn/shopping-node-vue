import mongoose from "mongoose"
const Schema = mongoose.Schema

const ItemSchema = Schema({
	status: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	img_represent: {
		type: String,
		required: true
	},
	img_description: {
		type: Array,
		required: true
	},
	brand: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	seri: {
		type: String,
		required: true
	},
	description: {
		type: Object,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	price: {
		type: Number,
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

module.exports = mongoose.model("Items", ItemSchema)
