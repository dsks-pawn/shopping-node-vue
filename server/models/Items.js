import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ItemSchema = mongoose.Schema({
    status: {
        type: String,
        required: true
    },
	name: {
		type: String,
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
	password: {
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

module.exports = mongoose.model('Items', ItemSchema)