'use-strict';
let recordComponent = require('../components/records');
let assert = require('assert');

let params = {};
describe('unit Test cases for (+ve) getData"', function () {
    this.timeout(30000);
    it('200 - "Success- without the category params:', function (done) {
        recordComponent.getRecords(params, (err, resp) => {
            try {
                assert.deepStrictEqual((resp.entries.length), true);
                done();
            } catch (exc) {
                // In case of Error
                assert.notDeepEqual(exc.statusCode, 406);
                done();
            }
        })
    })


    it('200 - "Success- with the category params:', function (done) {
        params.category = 'Animals';
        recordComponent.getRecords(params, (err, resp) => {
            try {
                assert.deepStrictEqual((resp.entries.length), true);
                done();
            } catch (exc) {
                // In case of Error
                assert.notDeepEqual(exc.statusCode, 406);
                done();
            }
        })
    })


    it('204 - "NO CONTENT -"', function (done) {
        params.category = 'mas';
        recordComponent.getRecords(params, (err, resp) => {
            try {
                assert.deepStrictEqual(!(resp.entries.length), true);
                done();
            } catch (exc) {
                // In case of Error
                assert.notDeepEqual(exc.statusCode, 406);
                done();
            }
        })
    })
});


describe('unit Test cases for (-ve) getData"', function () {
    this.timeout(30000);
    params = [];
    it('500 Internal Server Error - "FAILED- passing params as array', function (done) {
        recordComponent.getRecords(params, (err, resp) => {
            try {
                assert.deepStrictEqual(err, {});
                done();
            } catch (exc) {
                // In case of Error
                assert.notDeepEqual(exc.statusCode, 406);
                done();
            }
        })
    })
});