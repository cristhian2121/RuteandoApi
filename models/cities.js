const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//================================
// city Schema
//================================
const citySchema = new Schema({
    city: {
        name: String,
        department: String
    }
});


module.exports = mongoose.model('Cities', citySchema);