const mongoose = require('mongoose');
const { Schema } = mongoose;

const luminairesSchema = new Schema({
    titre: String,
    category: String,
    hauteur: Number,
    diametre: Number,
    date: String,
    bois: String,
    description: String,
    image: String
});

module.exports = mongoose.model('Luminaires', luminairesSchema);

