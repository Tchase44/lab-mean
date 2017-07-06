let express = require("express")
let mongoose = require("./db/connection.js")
let parser = require("body-parser")

let app = express()

let Tag = mongoose.model("Tag")
let Img = mongoose.model("Img")

app.set("port", process.env.PORT || 4444)
app.use(parser.json({extended:true}))
app.use("/assets",express.static("public"))

app.get("/api/",function(req,res){
	Img
})
app.get("/api/",function(req,res){
	Img
})
app.post("/api/",function(req,res){
	Img
})
app.delete("/api/",function(req,res){
	Img
})
app.put("/api/",function(req,res){
	Img
})

app.get("/*", function(req, res){
  res.sendFile(__dirname + "/public/app-root.html");
});


app.listen(app.get("port"),function(){
	console.log("Is your refrigerator running??")
})