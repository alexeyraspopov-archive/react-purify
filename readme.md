# react-purify

Make your React methods pure.

## Install

	npm install react-purify --save

## Example

	var rp = require('react-purify');

	var Component = React.createClass({
		render: rp(function(props){
			return <p>{ props.greeting }</p>;
		});
	});

You can pass everything you want to get from `this`

	var Counter = React.createClass({

		getInitialState: function(){
			return { counter: 0 };
		},

		tick: rp(function(state){
			this.setState({ counter: state.counter + 1; })
		}),

		render: rp(function(props, state){
			return <p>{ props.label }: { state.counter }</p>;
		})
	});

## TODO

 * Use methods result as a new state.