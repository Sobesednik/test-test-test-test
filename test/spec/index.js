const assert = require('assert')
const context = require('../context/')
const testTestTestTest = require('../../src/')

const testTestTestTestTestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testTestTestTest, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testTestTestTest()
        })
    },
}

module.exports = testTestTestTestTestSuite
