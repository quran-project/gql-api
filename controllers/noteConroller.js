const Note = require('./../models/Note')

module.exports.addNote = (req, res) => {
    res.json(req.body)
}