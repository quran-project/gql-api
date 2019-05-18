const Word = require('../models/Word')
const Translation = require('../models/Translation')

const Ayah = {
    async translate(parent) {
        const { text } = await Translation.findOne({
            ayah: parent.ayah,
            sura: parent.sura,
        })

        return text
    },
    async words(parent) {
        return await Word.find({ ayah: parent.ayah, sura: parent.sura })
    },
}
module.exports = Ayah
