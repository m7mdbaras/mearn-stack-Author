const { Author } = require("../models/author.models")

module.exports = {
    getAllAuthor: (req, res) => {
        Author.find({})
            .then((authors) => res.json(authors))
            .catch((err) => res.status(400).json(err))
    },
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then((author) => res.json(author))
            .catch((err) => res.status(400).json(err))
    },
    getSingleAuthor: (req, res) => {
        Author.findOne({ _id: req.params.idd })
            .then((author) => res.json(author))
            .catch((err) => res.status(400).json(err))
    },
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.iidz }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((author) => res.json(author))
            .catch((err) => res.status(400).json(err))
    },
    removAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.iii })
            .then((author) => res.json(author))
            .catch((err) => res.status(400).json(err))
    },
}