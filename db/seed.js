let mongoose = require("./connection.js")
let seedData = require("./seeds.json")

let Tag = mongoose.model("Tag")
let Img = mongoose.model("Img")

Img.remove({}).then(()=>{
	Img.collection.insert(seedData).then(()=>{
		console.log("seeds function fired")
		process.exit();
	})
})