const express = require('express')
const { createPersona,
    getPersona,
    getPersone
} = require('../controllers/personeController')



const router = express.Router()

//GET ALL NOMI E COGNOMI

router.get('/', getPersone)

// GET single persona

router.get('/:id', getPersona)


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



