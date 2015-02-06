module.exports = function(fn){
	return function(){
		fn(this.props, this.state);
	};
};