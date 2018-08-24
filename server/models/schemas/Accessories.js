import mongoose from "mongoose"
const Schema = mongoose.Schema

const AccessoriesSchema = Schema({
	name: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	link : {
		type: String,
		default: ""
	},
	linkFpt: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
		required: true
	},
	currPrice: {
		type: String,
		required: true
	},
    sale: {
		type: Array,
		required: false
	},
	specifications: {
		type: Object,
		required: false
	},
	fullData: {
		type: Boolean,
		default: false,
		required: true
	},
	code: {
		type: String,
		required: true
	},
	images: {
		type: Array,
		required: true
	},
	imagesCarousel: {
		type: Array,
		required: true
	},
	rate: {
		type: Object,
		required: true
	},
	comments: {
		type: Object,
		required: false
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
