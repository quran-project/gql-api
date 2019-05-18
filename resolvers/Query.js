const Surah = require('../models/Surah')
const Query = {
    async ayah(parent, { suraId, verseNo, limit = 10, pageNo = 1 }) {
        let filter = {}

        filter.sura = suraId

        if (verseNo) filter.ayah = verseNo

        const ayah = await Surah.find(filter)

        const filtered = ayah.slice(pageNo * limit - 1, limit)

        console.log(JSON.stringify(ayah, undefined, 4))
    },
}

module.exports = Query
