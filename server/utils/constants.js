

/**
 * constant variables
 */

module.exports = {
    urlConstants: {
        PUBLIC_KEY_API: "https://api.publicapis.org/entries"
    },
    status: {
        codes: {
            SUCCESS: 200,
            FAILED: 500,
            INVALID: 400,
            NO_RECORD_FOUND: 404,
            NO_CONTENT: 204
        },
        statusMsgs: {
            SUCCESS: {
                msg: "success",
                error_msg: ""
            },
            FAILED: {
                msg: "failed",
                error_msg: "something went wrong"
            },

            NO_CONTENT: {
                msg: "no content",
                error_msg: "NO_CONTENT_FOUND"
            }

        }
    }
}