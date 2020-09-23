"use strict";
const { jsonResponse } = require('../utils/response');
const { status } = require('../utils/constants');
const { codes, statusMsgs } = status;
const { recordValidationSchema } = require('./schema');
const Validator = require("jsonschema").Validator;
const v = new Validator();
const component = "record.searchRecord.validation";
const msgLog = {};


const validate = {
    /**
     * Method to validate the records
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getRecords: (req, res, next) => {
        try {
            let params = {
                ...req.query,
                ...req.params
            };
            var validRes = v.validate(params, recordValidationSchema).errors;
            if (validRes.length) {
                msgLog.msg = "#getRecords Validation error";
                msgLog.error = "Please enter valid input";
                console.log(
                    `${component}.getRecordsValidation`,
                    params.reqId,
                    msgLog
                );
                jsonResponse(res, null, codes.INVALID, msgLog, statusMsgs.FAILED.msg);
            } else {
                console.log(
                    `${component}.getRecordsValidation`,
                    params.reqId,
                    'No error'
                );
                return next();
            }
        } catch (error) {
            console.log(
                component + ".getRecords Validation",
                params.reqId,
                error
            );
            jsonResponse(res, null, codes.FAILED, error, statusMsgs.FAILED.msg);
        }
    }
}




module.exports = validate;