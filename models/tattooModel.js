const mongoose = require('mongoose');

const TattooSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    details: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('Tattoo', TattooSchema);
