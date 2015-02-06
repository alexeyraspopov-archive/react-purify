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

You allways get `props` and `state`.

	var Counter = React.createClass({

		getInitialState: function(){
			return { counter: 0 };
		},

		tick: rp(function(_, state, event){
			// if your method receives other arguments they will be received after `state`
			this.setState({ counter: state.counter + 1; });
		}),

		render: rp(function(props, state){
			return <p onClick={ this.tick }>{ props.label }: { state.counter }</p>;
		})
	});

Also you can update component state easily. Just return new state.

	tick: rp(function(_, state){
		return { counter: state.counter + 1; };
	})

## License

MIT License