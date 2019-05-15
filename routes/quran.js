const Router = require('express').Router()
const surahController = require('./../controllers/surahController')

Router.get('/', surahController.getAllSurah)

Router.get('/:surah_no', surahController.getSurah)

module.exports = Router