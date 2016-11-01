/**!
 * 主模块例子
 *
 * Created by diamont1001 on 2016/11/1.
 */

'use strict';

var Demo = (function() {
	var _e = {};

	_e.test = function() {
		return 'hello demo';
	};

	return _e;
})();

// window.Demo === undefined && (window.Demo = Demo); // 根据实际需要，选择挂载到window对象，但需要注意命名冲突

module.exports = Demo;
