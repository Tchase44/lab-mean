let mongoose = require("mongoose")

let TagSchema = new mongoose.Schema({
	hashtag: Array
})

let ImgSchema = new mongoose.Schema({
	url: String,
	tags: [TagSchema]
})

mongoose.model("Tag",TagSchema)
mongoose.model("Img",ImgSchema)

mongoose.connect("mongodb://localhost/imagedb")

module.exports = mongoose