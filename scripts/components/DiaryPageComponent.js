var React = require('react');
var BasicComponent = require('./BasicComponent');
var NavigationComponent = require('./NavigationComponent');

module.exports = React.createClass({			
	render: function() {
		return(
			<div>
				<BasicComponent user={this.props.user} />
				<NavigationComponent user={this.props.user} app={this.props.app} />

			</div>
		);
	}
});