const Note = require('./../models/Note')

module.exports.addNote = async (req, res) => {
    //res.json(req.body)
    const note = new Note({
        user: 1,
        sura: req.body.sura,
        ayah: req.body.ayah,
        text: req.body.text
    })

    const response = await note.save()
    res.json(response)
}