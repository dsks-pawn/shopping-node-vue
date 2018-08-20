import mongoose from "mongoose"
const Schema = mongoose.Schema

const ProductSchema = Schema({
	name: {
		type: String
	},
	code: {
		type: String
	},
	color: {
		type: Array
	},
	category: {
		type: String
	},
	link: {
		type: String
	},
	avatar: {
		type: String
	},
	images: {
		type: Array
	},
	imagesCarousel: {
		type: Array
	},
	gallery: {
		type: Array
	},
	currPrice: {
		type: String
	},
	oldPrice: {
		type: String
	},
	sale: {
		type: Object
	},
	rate: {
		type: Number
	},
	evaluates: {
		type: Object
	},
	comments: {
		type: Object
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

// setter de lam gi do truoc khi insert vao db
// UsersSechema.path('user').set(inputString=>{
// 	return inputString[0].toUpperCase() + inputString.slice(1)
// })

module.exports = mongoose.model("Product", ProductSchema)
