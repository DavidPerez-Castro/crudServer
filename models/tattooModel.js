const mongoose = require('mongoose');

const TattooSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    details: { type: String, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    style: { type: String, required: true },
    bodyPart: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('Tattoo', TattooSchema);
