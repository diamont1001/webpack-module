!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";o(2),e.exports=o(1)},function(e,t){/**!
	 * 主模块例子
	 *
	 * Created by diamont1001 on 2016/11/1.
	 */
"use strict";var o=function(){var e={};return e.test=function(){return"hello demo"},e}();e.exports=o},function(e,t,o){/**!
	 * 子模块1
	 *
	 * Created by diamont1001 on 2016/11/1.
	 */
"use strict";var r=o(1);r.test1=function(){return"hello demo_1"},e.exports=r}])});