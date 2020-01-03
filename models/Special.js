const mongoose = require('mongoose');

const SpecialSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    },
    exserviceman: {
        type: Boolean,
        required: true
    },
    sports: {
        type: Boolean,
        required: true
    },
    phychallenged: {
        type: Boolean,
        required: true
    },
    cvcenter: {
        type: String,
        required: true
    },
    paymentstatus: {
        type: Boolean
    }
});

module.exports = Special = mongoose.model('special', SpecialSchema);