const mongoose = require("mongoose")

const PrdouctsSchema = new mongoose.Schema({
	name: {type: String, required: true},
	price:{type: String, required: true},
})

module.exports = mongoose.model('products', PrdouctsSchema)