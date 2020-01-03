const mongoose = require('mongoose');

const TFCUserSchema = new mongoose.Schema({
    
    tfcname: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },
    
    password: {
        type:String,
        required: true
    },

    ltype: {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model('tfcuser2', TFCUserSchema);