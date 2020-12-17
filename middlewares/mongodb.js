const mongoose = require('mongoose');
const Meubles = require('../model/meubles.js');

mongoose.connect('mongodb://127.0.0.1:27017/VBProject', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connection réussie !');
});

const mongoDbMiddleware = (req, res, next) => {
    req.db = mongoose;
    req.model = {};
    req.model.Meubles = Meubles;
    
    next();
};

module.exports = mongoDbMiddleware;