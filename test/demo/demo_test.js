var Demo = require('../../src/demo.js');

describe('test demo', function () {
    it('function test', function () {
    	var str = Demo.test();
        assert.strictEqual(str, 'hello demo');
    });
});