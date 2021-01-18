const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    // Create
    app.post('/api/author', AuthorController.createAuthor)
    // Read
    // get all
    app.get('/api/author', AuthorController.getAllAuthor)
    // get one
    app.get('/api/author/:idd', AuthorController.getSingleAuthor)
    // Update
    app.put('/api/author/:iidz', AuthorController.updateAuthor)
    // Delete
    app.delete('/api/author/:iii', AuthorController.removAuthor)
}