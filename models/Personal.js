const mongoose = require('mongoose');

const PersonalSchema = new mongoose.Schema({
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
    parentname: {
        type: String
    },
    commnaddress: {
        type: [String]
    },
    nativedistrict: {
        type: String
    },
    civicnative: {
        type: String
    },
    permanentaddress: {
        type: [String],
        required: true
    },    
    permanentpincode: {
        type: Number
    },
    dob: {
        type: Date        
    },
    gender: {
        type: String
    },
    commnpincode: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Personal = mongoose.model('personal', PersonalSchema);