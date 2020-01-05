const express = require('express')

const router = express.Router()
const Model = require('../models')
const Contact = Model.Contact

router.use((req, res, next) => {
    console.log('Accessing API.....');
    next();
})

router.get('/', (req, res) => {
    res.json({'GET status': 'Success'})
})

router.get('/contacts', (req, res) => {
    Contact.findAll()
    .then(contacts => {
        res.json(contacts)
    })
    .catch(err => {
        res.json({error: err.message});
    })
})

router.get('/contacts/:contactId', (req, res) => {
    Contact.findByPk(req.params.contactId)
    .then(contact => {
        res.json(contact)
    })
    .catch(err => {
        res.json({error: err.message});
    })
})

router.post('/contacts', (req, res) => {
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    })
    .then(() => {
        res.json({Create_status : 'Success'})
    })
    .catch((err) => {
        res.json({error : err.message})
    })
})

router.put('/contacts/:contactId', (req, res) => {
    Contact.update({
        name: req.body.name,
        phone: req.body.phone
    }, {
        where: {
            id: req.params.contactId
        }
    })
    .then(() => {
        res.json({Update_status : 'Success'})
    })
    .catch((err) => {
        res.json({error : err.message})
    })
})

router.delete('/contacts/:contactId', (req, res) => {
    Contact.destroy({
        where: {
            id: req.params.contactId
        }
    })
    .then(() => {
        res.json({Delete_status: 'Success'})
    })
    .catch((err) => {
        res.json({error: err.message})
    })
})


module.exports = router