const Router = require('express').Router()
const surahController = require('./../controllers/surahController')

Router.get('/', surahController.getAllSurah)

Router.get('/:sura', surahController.getSurah)
Router.get('/:sura/:ayah', surahController.getAyah)

module.exports = Router