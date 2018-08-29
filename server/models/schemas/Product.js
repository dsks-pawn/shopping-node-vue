import mongoose from "mongoose"
const Schema = mongoose.Schema

const ProductSchema = Schema({
	name: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		required: true
	},
	brand: {
		type: String,
		required: true
	},
	fullData: {
		type: Boolean,
		default: false,
		required: true
	},
	category: {
		type: String,
		required: true
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
		type: Number,
		required: true,
		default : 0
	},
	oldPrice: {
		type: Number,
		required: false,
		default : 0
	},
	provisional: {
		type: Object,
		required: true
	},
	code: {
		type: String,
		required: true,
		default: " "
	},
	post: {
		type: String,
		required: true,
		default: " "
	},
	color: {
		type: Array,
		required: false,
		default: []
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
	gallery: {
		type: Array,
		required: true,
		default: []
	},
	sale: {
		type: String,
		required: false,
		default: " "
	},
	rate: {
		type: Object,
		required: true,
		default: {}
	},
	evaluates: {
		type: Array,
		required: false,
		default: []
	},
	comments: {
		type: Array,
		required: false,
		default: []
	},
	attached: {
		type: String,
		required: false,
	},
	specifications: {
		type: Array,
		required: false,
		default: []
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

module.exports = mongoose.model("Product", ProductSchema)
