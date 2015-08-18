var fs = require("fs")
var dogs = fs.readdirSync("./public/img")

module.exports = {
  current: function(id){
    var i = 0
    var len = dogs.length
    if(!id){
      id = 0
    }
    id = ("" + id + "").replace(/\.json/,"")
    var name = dogs[id][0].toUpperCase() + dogs[id].substr(1)
    name = name.slice(0, -4)
    return {
      id: id,
      src: dogs[id],
      name: name
    }
  },
  prev: function(id){
    if(id == 0 || !id){
      id = dogs.length
    }
    return (id - 1)
  },
  next: function(id){
    if(!id){
      id = 0
    }
    if(id == dogs.length - 1){
      id = -1
    }
    return (parseInt(id) + 1)
  }
}
