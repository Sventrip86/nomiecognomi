require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const personeRoutes = require('./routes/persone')

// express app

const app = express()


//middleware
app.use(express.json())

    app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})



// routes

app.use('/api/persone', personeRoutes)

// connect to db

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for req

    app.listen(process.env.PORT, () => {
        console.log('connected to db and app listening on port', process.env.PORT)
    })
    

})
.catch((error) => {
    console.log(error)
})






