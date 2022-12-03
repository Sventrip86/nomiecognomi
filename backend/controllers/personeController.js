const Persone = require('../models/personaModel')

// get all 



// get one


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


//update one


module.exports =   {
    createPersona
}