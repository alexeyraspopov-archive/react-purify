var fnArgs = require('fn-args');

function argsInContext(fn){
	return fnArgs(fn).map(function(name){ return 'this.' + name; });
}

exports.render = function(fn){
	return new Function('fn', 'return function(a, b, c){ fn(' + argsInContext(fn) + ', a, b, c); }')(fn);
};

exports.state = function(fn){
	return new Function('fn', 'return function(a, b, c){ var state = fn(' + argsInContext(fn) + ', a, b, c); state && this.setState(state) }')(fn);
};