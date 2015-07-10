var React = require('react');

module.exports = React.createClass({
	render: function() {
		console.log(this.props.user)
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
						<li><a href='#diary'>Diary<span></span></a></li>
						<li><a href='#gallery'>Gallery<span></span></a></li>
						<li><a href='#health'>Health Notes<span></span></a></li>
						<li><a href='#growth'>Growth<span></span></a></li>
						<li><a href='#profile'>Child Profile<span></span></a></li>
					</ul>
				</div>
				<div id="page-content-wrapper">
					<div className="page-content inset">
						<div className="row">
							<div className="col-md-12">
						
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});