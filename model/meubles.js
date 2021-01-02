const mongoose = require('mongoose');
const { Schema } = mongoose;

const meublesSchema = new Schema({
    titre: String,
    category: String,
    hauteur: Number,
    longeur: Number,
    largeur: Number,
    diametre: Number,
    date: String,
    bois: String,
    pied: String,
    description: String,
    image: String
});

module.exports = mongoose.model('Meubles', meublesSchema);


// All in one
// module.exports = mongoose.model('Meuble', new Schema({
//     titre: String,
//     description: String
// },
// { versionKey: false }));
