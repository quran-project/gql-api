const Surah = require('../models/Surah')
const Query = {
    async ayah(parent, { suraId, verseNo, limit = 10, pageNo = 1 }) {
        let filter = {}

        filter.sura = suraId

        //TODO: Pagination to graphql api
        if (verseNo) filter.ayah = verseNo

        const ayah = await Surah.find(filter)

        const filtered = ayah.slice(pageNo * limit - 1, limit)

        return ayah
    },
}

module.exports = Query
