const mongoose = require('mongoose')

let suraScheema = mongoose.Schema({
    ar1: String,
    ar2: String,
    ar3: String,
    ar4: String,
    ar5: String,
    ayah: String,
    count: String,
    lemma: String,
    pos1: String,
    pos2: String,
    pos3: String,
    pos4: String,
    pos5: String,
    root_ar: String,
    surah: String,
    verb_type: String,
    verf_form: String,
    word: String,
})

module.exports = mongoose.model('Corpus', suraScheema)
