const Corpus = require('../models/Corpus')

const Word = {
    async corpus({ ayah, sura, word }) {
        const words = Corpus.find({ ayah, surah: sura, word }).sort({
            word: 1,
        })

        return words
    },
}
module.exports = Word
