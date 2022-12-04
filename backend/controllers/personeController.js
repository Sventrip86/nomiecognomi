const  mongoose  = require('mongoose')
const Persone = require('../models/personaModel')

// get all 

const getPersone = async (req, res) => {
    const persone = await Persone.find().limit(20)

    res.status(200).json(persone)
}



// get one

const getPersona = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId().isValid(id)) {
        return res.status(404).json({error: 'no persona found, invalid id'})
    }

    const persona = await Persone.findById(id )

    if(!persona){
        res.status(400).json({error : 'no persona found'})
    }
    res.status(200).json(persona)
}
// create one


const createPersona = async (req, res) => {
    const {name, surname, category, rating, comment } = req.body

    try {
        const persone = await Persone.create({name, surname, category, rating, comment})
        res.status(200).json(persone)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    res.json({mssg:'POST new persona'})
}

// delete one

const deletePersona = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId().isValid(id)) {
        return res.status(404).json({error: 'no persona found, invalid id'})
    }
    

    const persona = await Persone.findOneAndDelete({_id: id})

    if(!persona){
        res.status(400).json({error : 'no persona found'})
    }
    res.status(200).json(persona)
}

//update one

const updatePersona = async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId().isValid(id)) {
        return res.status(404).json({error: 'no persona found, invalid id'})
    }

    const persona =  await Persone.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    
    if(!persona){
        res.status(400).json({error : 'no persona found'})
    }
    res.status(200).json(persona)

} 


module.exports =   {
    getPersone,
    getPersona,
    createPersona,
    deletePersona,
    updatePersona
}