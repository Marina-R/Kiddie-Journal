var React = require('react');
var Modal = require('react-modal');
var TinymceMedicalComponent = require('./TinymceMedicalComponent');

module.exports = React.createClass({
	getInitialState: function() {
		return {showModal: false};
	},
	openModal: function() {
		this.setState({showModal: true});
	},
	closeModal: function() {
		this.setState({showModal: false});
	},
	render: function() {
		return(
			<div >
				<button style={{float:'right', marginRight:'15px'}} onClick={this.openModal} className='btn btn-default'>
					<i className="fa fa-file-text"></i>  Add Post
				</button>
				<Modal 
					isOpen={this.state.showModal}
					onRequestClose={this.closeModal}
				>
					<TinymceMedicalComponent user={this.props.user} close={this.closeModal} posts={this.props.posts} />	
					<button style={{margin: '5px'}} className="btn btn-default" type='button' onClick={this.closeModal}>Cancel</button>		
				</Modal>
			</div>
		)
	}
});