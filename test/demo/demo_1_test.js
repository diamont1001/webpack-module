var Demo = require('../../src/demo_1.js');

describe('test demo_1', function () {
    it('function test', function () {
    	var str = Demo.test1();
        assert.strictEqual(str, 'hello demo_1');
    });
});