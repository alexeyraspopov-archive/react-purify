var fnArgs = require('fn-args');

function argsInContext(fn){
	return fnArgs(fn).map(function(name){ return 'this.' + name; });
}

module.exports = function(fn){
	return new Function('fn', 'return function(a, b, c){ fn(' + argsInContext(fn) + ', a, b, c); }')(fn);
};
