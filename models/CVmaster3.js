const mongoose = require('mongoose');
const {REGISTER_FIELDS_MAP} = require("../Register");
const {PAYMENT_STATUS,STEPS} = require("../Constant");
const {USER_FIELDS_KEY} = require("../UserFields");
const uuid = require('uuid/v4');
const Schema = mongoose.Schema;

const CVMasterSchema = mongoose.Schema({
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
    [USER_FIELDS_KEY.SPL_RESERVATION]:{
        type: Schema.Types.Mixed
    },
    [USER_FIELDS_KEY.APPLICATION_ID]:{
        type: Schema.Types.Number,
        unique: true
    },
    status: {
        type: String,
        required: true
    },
    vremarks: {
        type: String,
        default: ''
    },
    uremarks: {
        type: String,
        default: ''
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
    [USER_FIELDS_KEY.ACADEMIC]:{
        type: Schema.Types.Mixed
    },
});

module.exports = CVMaster3 = mongoose.model('cvmasterschange', CVMasterSchema);
