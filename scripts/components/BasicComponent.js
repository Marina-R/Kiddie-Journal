var React = require('react');

module.exports = React.createClass({
	render: function() {
		var nav = {
			position: 'absolute',
			background: 'grey',
			minHeigth: '100%'
		};
		var main = {
			heigth: '100%'
		};
		var line = {
			position: 'fixed',
			top: 0,
			backgroundImage: 'url(../../images/bg-header2.png)',
			height: '4px',
			width: '100%'
		};
		var logo = {
			background: 'url(../../images/logo.png)',
			backgroundSize: 'cover',
			marginTop: '20px',
			marginLeft: '5px'
		};
		var logoutBtn = {
			position: 'fixed',
			top: 0,
			right: '25px'
		};
		return(
			<div id="wrapper" className="row active">
				<div className='row col-12' style={line}></div>
				<div id="sidebar-wrapper">
	  				<ul id="sidebar_menu" className="sidebar-nav">
		   				<li className="sidebar-brand" style={logo}>
		   					
		   				</li>
	 				</ul>
					<ul className="sidebar-nav" id="sidebar">     
						<li><a>Diary<span></span></a></li>
						<li><a>Gallery<span></span></a></li>
						<li><a>Health Notes<span></span></a></li>
						<li><a>Growth<span></span></a></li>
						<li><a>Child Profile<span></span></a></li>
					</ul>
	  			</div>
			  	<div id="page-content-wrapper">
				  	<nav className="navbar navbar-default" style={{opacity: '0.5'}}>
						<div className="container-fluid">
							<div className="navbar-header">
								<div className='row col-12' style={line}></div>
							</div>
						</div>
					</nav>
					<button type="button" style={logoutBtn} className="btn btn-default navbar-btn" onClick={this.logOut}>Log out</button>
					<div className="page-content inset">
					  	<div className="row">
							<div className="col-md-12">
							
							</div>
				  		</div>
					</div>
				</div>
			</div>
		);
	},
	logOut: function() {
		this.props.user.logout();
		this.props.app.navigate('', {trigger: true});
	}
});