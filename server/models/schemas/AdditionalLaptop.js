import mongoose from "mongoose"
const Schema = mongoose.Schema

const AdditionalLaptopSchema = Schema({
    typeProduct: {
        type: String,
        required: true
    },
    typeSlug: {
        type: String,
        required: true
    },
	filter: {
        type: Array,
        required: true
    },
    carousel: {
        type: Array,
        required: true
    },
    brand: {
        type: Array,
        required: true
    },
	created_date: {
		type: Date,
		required: true,
		default: Date.now
	},
	updated_date: {
		type: Date,
		required: true,
		default: Date.now
	}
})

module.exports = mongoose.model("AdditionalLaptop", AdditionalLaptopSchema)
