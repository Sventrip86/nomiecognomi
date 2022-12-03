const express = require('express')
const nomieCognomiModel = require('../models/nomieCognomiModel')


const router = express.Router()

//GET ALL NOMI E COGNOMI

router.get('/', (req, res) => {
    res.json({mssg:'GET all nomi e cognomi'})
})

// GET single nome e cognome

router.get('/:id', (req, res) => {
    res.json({mssg:'GET un nome e cognome'})
})


// POST  un nuovo nome e cognome

router.post('/', (req, res) => {
    const {name, surname, category, rating, comment } = req.body
    res.json({mssg:'POST un nuovo nome e cognome'})
})

//DELETE

router.delete('/:id', (req, res) => {
    res.json({mssg:'DELETE un nome e cognome'})
})

// UPDATE 

router.patch('/:id', (req, res) => {
    res.json({mssg:'UPDATE un nome e cognome'})
})


module.exports = router