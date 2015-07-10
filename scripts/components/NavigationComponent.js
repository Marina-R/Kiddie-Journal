var React = require('react');

module.exports = React.createClass({
	render: function() {
		var logoutBtn = {
			position: 'fixed',
			top: 0,
			right: '25px'
		};
		var navbar = {
			marginLeft: '230px',
			opacity: '0.5'
		};
		console.log(this.props.user);
		return(
			<nav className="navbar navbar-default" style={navbar}>
				<div className="container-fluid">
					<div className="navbar-header">
						
						<div className="collapse navbar-collapse">
      							<ul className="nav navbar-nav">
									<li className="dropdown">
									<ul className="nav nav-pills">
									 	<li className="dropdown">
											<a className="dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false" onClick={this.dropdown}>
										 	{this.props.user.attributes.name}<span className="caret"></span>
											</a>
											<ul className="dropdown-menu" ref='dropdownMenu'>
									            <li><a href="#profile">Child`s Profile</a></li>
									            <li role="separator" className="divider"></li>
									            <li><a onClick={this.logOut}>Log Out</a></li>
											</ul>
									  	</li>
									</ul>
								</li>
							</ul>
						</div>

						<button type="button" style={logoutBtn} className="btn btn-default navbar-btn" onClick={this.logOut}>Log out</button>
					</div>
				</div>
			</nav>
		);
	},
	logOut: function() {
		this.props.user.logout();
		this.props.app.navigate('', {trigger: true});
	}
});