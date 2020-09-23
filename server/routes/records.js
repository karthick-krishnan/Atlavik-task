'use-strict';
let recordsComponent = require('../components/records');
let { jsonResponse } = require('../utils/response');
let component = 'records.routes';


/**
 * Routes Method to send the Input request
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
let getRecords = (req, res) => {
    let params = {
        ...req.query
    };
    recordsComponent.getRecords(params, (err, response) => {
        if (err) {
            console.log(component, null, err, 'FAILED');
            jsonResponse(res, response, 500, err, "FAILED");
        } else if (!response.entries.length) {
            console.log(component, null, [], 'NO_CONTENT');
            jsonResponse(res, response, 204, err, "NO_CONTENT");
        } else {
            console.log(component, null, [], 'SUCCESS');
            jsonResponse(res, response, 200, err, "SUCCESS");
        }
    })
}



module.exports = {
    getRecords: getRecords
};