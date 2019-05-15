const mongoose = require('mongoose')

let suraScheema = mongoose.Schema(
    {
        sura: String,
        ayah: String,
        text: String
    }
)

module.exports = mongoose.model('Notes', suraScheema)