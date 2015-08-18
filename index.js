var express = require("express")
var app = express()
var dog = require("./dog")

app.set("view engine", "hbs")
app.use(express.static("public"))

app.get("/:id?", function(req,res){
  res.format({
    'application/json': function(){
      res.json({
	current: dog.current(req.params.id),
	prev: dog.prev(req.params.id),
	next: dog.next(req.params.id)
      })
    },
    'text/html': function(){
      res.render("index", {
	current: dog.current(req.params.id),
	prev: dog.prev(req.params.id),
	next: dog.next(req.params.id)
      })
    }
  })  
})


app.listen(2000, function(){
  console.log("listening on http://localhost:2000/")
})