const mongoose = require('mongoose')

let suraScheema = mongoose.Schema(
    {
        user: String,
        sura: String,
        ayah: String,
        text: String
    }
)

module.exports = mongoose.model('Notes', suraScheema)