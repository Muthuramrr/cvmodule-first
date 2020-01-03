const mongoose = require('mongoose');

const CVmasterSchema = new mongoose.Schema({
    appid: {
        type: Number,
        required: true,
        unique: true
    },    
    name: {
        type: String,
        required: true
    },
    mobnum: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: Date,
        required: true,
        unique: true        
    },
    gender: {
        type: String
    },
    
    status: {
        type: String,
        required: true
    },
    updatedon: {
        type: Date,
        default: Date.now
    },
});

module.exports = CVmaster = mongoose.model('cvmaster', CVmasterSchema);