const mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate-v2');

let suraScheema = mongoose.Schema(
    {
        sura: String,
        ayah: String,
        text: String,
        doc_id: String,
        primary: String
    }
)
suraScheema.plugin(mongoosePaginate);

module.exports = mongoose.model('Ayah', suraScheema, 'ayah')