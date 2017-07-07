let express = require("express")
let mongoose = require("./db/connection.js")
let parser = require("body-parser")

let app = express()

let Tag = mongoose.model("Tag")
let Img = mongoose.model("Img")

app.set("port", process.env.PORT || 4444)
app.use(parser.json({extended:true}))
app.use("/assets",express.static("public"))

app.get("/api/images",function(req,res){
	Img.find({}).then(function(images){
		res.json(images)
	})
})
app.get("/api/images/:id",function(req,res){
	Img.findOne({_id: req.params.id}).then(function(image){
		res.json(image)
	})
})

// TAG CREATE
// app.post("/api/images/:id",function(req,res){
// 	Img.tags.create(req.body).then(function(tag){
// 		res.json(tag)
// 	})
// })

app.post("/api/images",function(req,res){
	Img.create(req.body).then(function(image){
		res.json(image)
	})
})
// app.post("/api/images/:id",function(req,res){
// 	Img.findOne({_id: req.params.id}).then((image)=>{

// 	})
// })
app.delete("/api/images/:id",function(req,res){
	Img.findOneAndRemove({_id: req.params.id}).then(function(){
		res.json({succes: true})
	})
})
app.put("/api/images/:id",function(req,res){
	Img.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(function(image) {
			res.json(image)
		})
})

app.get("/*", function(req, res){
  res.sendFile(__dirname + "/public/app-root.html");
});


app.listen(app.get("port"),function(){
	console.log("Is your refrigerator running??")
})
