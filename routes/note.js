const Router = require('express').Router()
const noteConroller = require('./../controllers/noteConroller')

//Router.get('/:surah/:ayah', noteConroller.getNote)
Router.post('/add', noteConroller.addNote)

module.exports = Router 