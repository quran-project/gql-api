const mongoose = require('mongoose')

let suraScheema = mongoose.Schema({
    ayah: String,
    bn: String,
    en: String,
    in: String,
    sura: String,
    word: String,
})

module.exports = mongoose.model('Word', suraScheema)
