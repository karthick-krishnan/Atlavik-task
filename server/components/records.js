'use-strict';
const axios = require('axios');
const { urlConstants } = require('../utils/constants');
const component = "record.getRecords.components";
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;


/**
 * Method for get Entry Records 
 * @param {*} params 
 * @param {*} callback 
 */
let getRecords = (params, callback) => {
    try {
        let url = urlConstants.PUBLIC_KEY_API;
        let keys = Object.keys(params);
        //Filtering based on Query Params
        if (keys && keys.length) {
            url += `?`;
            for (let i = 0; i < keys.length; i++) {
                url += `${keys[i]}=${params[keys[i]]}&`;
            }
            url = url.slice(0, -1);
        }

        axios({ method: 'GET', url: url }).then((response) => {
            if (!response.data.count) {
                console.log(component, null, 'NODATA');
                callback(
                    null,
                    []
                );
            } else {
                callback(
                    null,
                    response.data
                );
            }
        }).catch((error) => {
            console.log(component, null, JSON.stringify(error));
            callback(
                error
            );
        });
    } catch (error) {
        console.log(component, null, JSON.stringify(error));
        callback(
            error
        );
    }
}


module.exports = {
    getRecords: getRecords
}