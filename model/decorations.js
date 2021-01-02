const mongoose = require('mongoose');
const { Schema } = mongoose;

// A compléter
const decorationsSchema = new Schema({
    titre: String,
    category: String,
    // hauteur: Number,
    // diametre: Number,
    date: String,
    // bois: String,
    description: String,
    image: String
});

module.exports = mongoose.model('Decorations', decorationsSchema);

