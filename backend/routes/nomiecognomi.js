const express = require('express')
const NomieCognomi = require('../models/nomieCognomiModel')


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

router.post('/', async (req, res) => {
    const {name, surname, category, rating, comment } = req.body

    try {
        const nomiecognomi = await NomieCognomi.create({name, surname, category, rating, comment})
        res.status(200).json(nomiecognomi)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
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