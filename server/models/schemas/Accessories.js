import mongoose from "mongoose"
const Schema = mongoose.Schema

const AccessoriesSchema = Schema({
	name: {
		type: String,
		required: true,
		default: " "
	},
	slug: {
		type: String,
		required: true,
		default: " "
	},
	category: {
		type: String,
		required: true,
		default: " "
	},
	linkFpt: {
		type: String,
		required: true,
		default: " "
	},
	avatar: {
		type: String,
		required: true,
		default: " "
	},
	currPrice: {
		type: String,
		required: true,
		default: " "
	},
    sale: {
		type: Array,
		required: false,
		default: []
	},
	specifications: {
		type: Object,
		required: false,
		default: {}
	},
	fullData: {
		type: Boolean,
		default: false,
		required: true
	},
	code: {
		type: String,
		required: true,
		default: " "
	},
	images: {
		type: Array,
		required: true,
		default: []
	},
	imagesCarousel: {
		type: Array,
		required: true,
		default: []
	},
	rate: {
		type: Object,
		required: true,
		default: {}
	},
	comments: {
		type: Object,
		required: false,
		default: {}
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

// setter de lam gi do truoc khi insert vao db
// UsersSechema.path('user').set(inputString=>{
// 	return inputString[0].toUpperCase() + inputString.slice(1)
// })

module.exports = mongoose.model("Accessories", AccessoriesSchema)
