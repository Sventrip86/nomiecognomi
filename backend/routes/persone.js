const express = require('express')
const { createPersona,
    getPersona,
    getPersone,
    deletePersona,
    updatePersona
} = require('../controllers/personeController')



const router = express.Router()

//GET ALL NOMI E COGNOMI

router.get('/', getPersone)

// GET single persona

router.get('/:id', getPersona)


// POST  new persona

router.post('/', createPersona)

//DELETE one persona

router.delete('/:id', deletePersona)

// UPDATE 

router.patch('/:id', updatePersona)


module.exports = router



