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
	oldPrice: {
		type: String,
		required: false
	},
	provisional: {
		type: Object,
		required: true
	},



	code: {
		type: String,
		required: true
	},
	post: {
		type: String,
		required: true
	},
	color: {
		type: Array,
		required: false
	},
	images: {
		type: Array,
		required: true
	},
	imagesCarousel: {
		type: Array,
		required: true
	},
	gallery: {
		type: Array,
		required: true
	},
	sale: {
		type: Object,
		required: false
	},
	rate: {
		type: Object,
		required: true
	},
	evaluates: {
		type: Object,
		required: false
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

module.exports = mongoose.model("Product", ProductSchema)
