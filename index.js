module.exports = function(fn){
	return function(a, b, c){
		// it passes additional arguments because of event handlers and stuff like this
		var result = fn.call(this, this.props, this.state, a, b, c);

		return result && result._isReactElement ? result : typeof result === "object" && this.setState(result);
	};
};
