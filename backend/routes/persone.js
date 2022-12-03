const express = require('express')
const { createPersona,
} = require('../controllers/personeController')



const router = express.Router()

//GET ALL NOMI E COGNOMI

router.get('/', (req, res) => {
    res.json({mssg:'GET all nomi e cognomi'})
})

// GET single persona

router.get('/:id', (req, res) => {
    res.json({mssg:'GET un nome e cognome'})
})


// POST  new persona

router.post('/', createPersona)

//DELETE one persona

router.delete('/:id', (req, res) => {
    res.json({mssg:'DELETE one'})
})

// UPDATE 

router.patch('/:id', (req, res) => {
    res.json({mssg:'UPDATE one'})
})


module.exports = router



