const express = require('express')
const mongoose = require('mongoose')
console.log('consola 1')
require('dotenv').config()
const productsRoutes = require('./routes/products')
const app = express()

console.log('consola 2')
//Middleware, para que el servidor pueda entender los datos que le enviamos en formato json 

app.use(express.json())
app.use('/api/', productsRoutes)

console.log('consola 3')
//Ruta para probar el servidor
app.get('/isAlive', (req, res) => {
    res.send('Esta vivo!')
})

console.log('consola 4')
//Conectamos a la base de datos

mongoose.connect(process.env.MONGODB_URI)
    .then(() => { console.log("Conectado a BD") })
    .catch((err) => { console.error(err) })

console.log('consola 5')

//Iniciamos el servidor, y le decimos que escuche en el puerto 3000
app.listen(3000, () => {
    console.log('El servidor esta funcionando!')
})