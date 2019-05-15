const Surah = require('./../models/Surah')

module.exports.getAllSurah = async (req, res) => {
    var fs = require('fs');

    // fs.readFile('./../surah.json', function (err, data) {
    //     if (err) throw err;

    //     console.log(data);
    // })

    const surah = require('./../surah.json')

    res.json(surah)
}

module.exports.getSurah = async (req, res) => {
    const options = {
        page: req.query.p || 1,
        limit: 10,
        customLabels: 'hlaksdjf'
    };
    let surah = await Surah.paginate({ sura: req.params.surah_no }, options, 5, (error, pageCount, paginatedResults) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Pages:', pageCount);
            console.log(paginatedResults);
        }
    })

    if (surah.prevPage) {
        surah.prevLink = req.protocol + '://' + req.get('host') + req.path + `?p=${surah.prevPage}`
    }
    if (surah.nextPage) {
        surah.nextLink = req.protocol + '://' + req.get('host') + req.path + `?p=${surah.nextPage}`
    }

    res.json(surah)
}