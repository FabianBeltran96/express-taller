const express = require('express')
const productSchema = require('../models/products')
const router = express.Router()

//Rutas para realizar las operaciones CRUD

//Obtener todos los productos
router.get('/products', (req, res) => {
    productSchema.find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ msg: err }))
})

//Obtener un producto por id
router.get('/products/:id', (req, res) => {
    productSchema.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.json({ msg: err }))
})

//Obtener un producto por nombre
router.get('/products/name/:name', (req, res) => {
    productSchema.find({ name: req.params.name })
        .then((data) => res.json(data))
        .catch((err) => res.json({ msg: err }))
})


//Crear un producto
router.post('/products', (req, res) => {
    const product = new productSchema(req.body)
    product.save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ msg: err }))
})

//Actualizar un producto
router.patch('/products/:id', (req, res) => {
    productSchema.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json(data))
        .catch((err) => res.json({ msg: err }))
})

//Eliminar un producto
router.delete('/products/:id', (req, res) => {
    productSchema.findByIdAndDelete(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.json({ msg: err }))
})




module.exports = router