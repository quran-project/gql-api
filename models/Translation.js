const mongoose = require('mongoose')

let suraScheema = mongoose.Schema({
    ayah: String,
    primary: String,
    sura: String,
    text: String,
})

module.exports = mongoose.model('Translation', suraScheema, 'tr_en_sahih')
