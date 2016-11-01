// load mongoose since we need it to define a model
var mongoose = require('mongoose');

var heroSchema = mongoose.Schema(
    {
        image: { type: String, required: true },
        text: { type: String, required: true }
    },
    {
    	collection: 'heroSection'
    }
);

var portfolio = mongoose.model('heroSection', heroSchema);

module.exports = mongoose.model('heroSection');