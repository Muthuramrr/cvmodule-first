
const REGISTER_FIELDS_MAP = {
    NAME:'_n',
    MOBILE:'m',
    EMAIL:'e',
    DOB:'dob',
    PLUS_ONE_PASSED:'pp',
    QUALIFY_EXAM:'qe',
    REG_NO:'rn',
    QUALIFIED_YEAR:'qy',
    LOGIN_ID:'loginId',
    PASSWORD:'password',
    CONFIRM_PASSWORD:'confirmPwd'
};


const MAIL_REG_EXP = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const PASSWORD_REG_EXP = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
const MOBILE_REG_EXP = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
const NUMBER_REG_EXP = /^[0-9]+$/;

module.exports = {
    REGISTER_FIELDS_MAP,
    MAIL_REG_EXP,
    PASSWORD_REG_EXP,
    MOBILE_REG_EXP,
    NUMBER_REG_EXP
};
