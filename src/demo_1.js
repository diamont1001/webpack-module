/**!
 * 子模块1
 *
 * Created by diamont1001 on 2016/11/1.
 */

'use strict';

var Demo = require('./demo.js');

Demo.test1 = function() {
	return 'hello demo_1';
};

module.exports = Demo;
