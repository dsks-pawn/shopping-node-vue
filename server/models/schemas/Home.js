import mongoose from "mongoose"
const Schema = mongoose.Schema

const HomeSchema = Schema({
	menu: {
        type: Object,
        required: true
    },
    carousel: {
        type: Array,
        required: true
    },
    ads: {
        type: Object,
        required: true
    },
    news: {
        type: Array,
        required: true
    },
    products: {
        type: Object,
        required: true
    },
    accessories: {
        type: Object,
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

module.exports = mongoose.model("Home", HomeSchema)
