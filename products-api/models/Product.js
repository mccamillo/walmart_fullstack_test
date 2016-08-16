var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
        IMAGE_URL: String, 
        NAME: { type: String, required: true }, 
        LINK: String, 
        BRAND: String,
        SELLER: String,
        OLD_VALUE: Number,
        VALUE: { type: Number, required: true },
        QUANTITY: Number,
  		updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);
