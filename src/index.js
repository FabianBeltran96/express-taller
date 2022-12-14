const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const productsRoutes = require('./routes/products')
const app = express()

//Middleware, para que el servidor pueda entender los datos que le enviamos en formato json 
app.use(express.json())
app.use(cors())
app.use('/api/', productsRoutes)

//Ruta para probar el servidor
app.get('/isAlive', (req, res) => {
    res.send('Esta vivo!')
})

//Conectamos a la base de datos
mongoose.connect(process.env.MONGODB_URI)
    .then(() => { console.log("Conectado a BD") })
    .catch((err) => { console.error(err) })

//Iniciamos el servidor, y le decimos que escuche en el puerto 3000
let port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('El servidor esta funcionando!', port)
})