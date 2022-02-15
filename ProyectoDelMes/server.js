const express = require('express')
const path = require("path")
const userRoutes = require("./routes/users")

function views(document){
    return path.join(__dirname,"views",document)
}

const app = express()

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("static"))
app.use(express.static("views"))

app.use(userRoutes)

app.get('/',function(peticion,respuesta){
    return respuesta.sendFile(views("index.html"))
})


app.listen(4000,function(){
    console.log("Funcionando... http://localhost:4000")
})