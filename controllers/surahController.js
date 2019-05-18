const Surah = require('./../models/Surah')

module.exports.getAllSurah = async (req, res) => {
    var fs = require('fs');

    // fs.readFile('./../surah.json', function (err, data) {
    //     if (err) throw err;

    //     console.log(data);
    // })

    const sura = require('./../surah.json')

    res.json(sura)
}

module.exports.getSurah = async (req, res) => {
    const options = {
        page: req.query.p || 1,
        limit: 10
    };
    let sura = await Surah.paginate({ sura: req.params.sura }, options, 5, (error, pageCount, paginatedResults) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Pages:', pageCount);
            console.log(paginatedResults);
        }
    })

    if (sura.prevPage) {
        sura.prevLink = req.protocol + '://' + req.get('host') + req.path + `?p=${sura.prevPage}`
    }
    if (sura.nextPage) {
        sura.nextLink = req.protocol + '://' + req.get('host') + req.path + `?p=${sura.nextPage}`
    }

    res.json(sura)
}

module.exports.getAyah = async (req, res) => {

    let ayah = await Surah.findOne({ sura: req.params.sura, ayah: req.params.ayah })
    res.json(ayah)
}