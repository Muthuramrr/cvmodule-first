const mongoose = require('mongoose');
const {REGISTER_FIELDS_MAP} = require("../Register");
const {PAYMENT_STATUS,STEPS} = require("../Constant");
const {USER_FIELDS_KEY} = require("../UserFields");
const uuid = require('uuid/v4');
const Schema = mongoose.Schema;

const MasterSchema = mongoose.Schema({
    _id: {type: String,default: uuid},
    [REGISTER_FIELDS_MAP.NAME]: {
        type: String,
        required: true
    },
    [REGISTER_FIELDS_MAP.MOBILE]: {
        type: String,
        required: true
    },
    [REGISTER_FIELDS_MAP.EMAIL]: {
        type: String,
        required: true
    },
    [REGISTER_FIELDS_MAP.DOB]: {
        type: String,
        required: true
    },
    [REGISTER_FIELDS_MAP.PLUS_ONE_PASSED]: {
        type: String,
        required: true
    },
    [REGISTER_FIELDS_MAP.QUALIFY_EXAM]: {
        type: String,
        required: true
    },
    [REGISTER_FIELDS_MAP.PASSWORD]: {
        type: String,
        required: true
    },
    [USER_FIELDS_KEY.STEPS] : {
        type: String,
        default: STEPS.REGISTER
    },
    [USER_FIELDS_KEY.PAYMENT]: {
        type: Schema.Types.Number,
        default: PAYMENT_STATUS.DEFAULT
    },
    [USER_FIELDS_KEY.PERSONAL]:{
        type: Schema.Types.Mixed
    },
    [USER_FIELDS_KEY.SCHOLARSHIP]:{
        type: Schema.Types.Mixed
    },
    [USER_FIELDS_KEY.SPL_RESERVATION]:{
        type: Schema.Types.Mixed
    },
    [USER_FIELDS_KEY.SCHOOL]:{
        type: Schema.Types.Mixed
    },
    [USER_FIELDS_KEY.ACADEMIC]:{
        type: Schema.Types.Mixed
    },
    [USER_FIELDS_KEY.APPLICATION_ID]:{
        type: Schema.Types.Number
    }

});

module.exports = Master = mongoose.model('users', MasterSchema);
