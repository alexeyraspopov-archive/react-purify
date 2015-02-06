var fnArgs = require('fn-args');

exports.render = function(fn){
	var args = fnArgs(fn).map(function(name){ return 'this.' + name; });

	return new Function('fn', 'return function(a, b, c){ fn(' + args + ', a, b, c); }')(fn)
};