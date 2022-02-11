const express = require("express")
const path = require("path")
const userRoutes = require("./routes/users")
const app = express()


app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(userRoutes)

app.get('/',function(peticion,respuesta){
    return respuesta.sendFile(views("index.html"))
})


app.listen(4000,function(){
    console.log("Funcionando... http://localhost:4000")
})