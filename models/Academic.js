const mongoose = require('mongoose');

const AcademicSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    },
    school: {
        type: String
    },
    district: {
        type: String
    },
    state: {
        type: String
    },
    registerno: {
        type: Number
    },
    maths: {
        type: Number
    },
    physics: {
        type: Number
    },
    chemistry: {
        type: Number
    },
    optional: {
        type: Number
    }
});

module.exports = Academic = mongoose.model('academic', AcademicSchema);