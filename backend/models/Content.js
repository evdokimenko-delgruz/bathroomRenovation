const mongoose = require('mongoose');

const ContentSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
        unique: true // Например: 'about', 'services', 'reviews', 'advantages', 'contacts'
    },
    data: { // Здесь будет храниться структурированный JSON-контент
        type: mongoose.Schema.Types.Mixed, // Позволяет хранить данные любого типа (объекты, массивы, строки)
        required: true
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Content', ContentSchema);