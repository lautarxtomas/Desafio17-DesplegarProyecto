const express = require('express');
const { Router } = express

const ContenedorProductos = require('../class/Products')
const controllerProductos = new ContenedorProductos() 

const routerProductos = Router()

routerProductos.get('/', async (req, res) => {
    const productos = await controllerProductos.getRandom() // ==> esta ruta genera 5 productos random que tengan la estructura del contenedor que declaramos arriba

    res.json(productos)
})

module.exports = routerProductos