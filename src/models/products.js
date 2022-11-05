const mongoose = require('mongoose')

//Definimos el esquema , que es la estructura de los datos que vamos a guardar en la base de datos
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true
        },

        stock: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    }
)

module.exports = mongoose.model('Products', productSchema)