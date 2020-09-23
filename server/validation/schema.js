'use-strict';

/**
  * A Json Schema to validate
  */
const recordValidationSchema = {
    properties: {
        category: {
            type: "string"
        },
        https: {
            type: "string"
        }
    },
    required: []
};



module.exports = {
    recordValidationSchema: recordValidationSchema
}