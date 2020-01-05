const express = require('express')
const app = express()

const Model = require('./models')
const Contact = Model.Contact
const apiRoute = require('./routes/apiRoute')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
// app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello')
})

app.use('/api', apiRoute)

app.listen(3000, function() {
    console.log('App running on port 3000')
})