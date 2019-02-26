const mongoose = require('mongoose');

const sampleSchema = mongoose.Schema({
    source: {
        type: String,
        index: true,
        unique: true
    },
    shortened: {
        type: String,
        index: true,
        unique: true
    },
    when: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('urlShortener', sampleSchema, 'urlShortener');