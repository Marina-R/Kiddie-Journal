var React = require('react');
var NavigationComponent = require('./NavigationComponent');

var LineChart = require('react-d3/linechart').LineChart;

var HeightDataComponent = require('./HeightDataComponent');
var WeightDataComponent = require('./WeightDataComponent');
var HeightDataCollection = require('../collections/HeightDataCollection');
var Modal = require('react-modal');
Modal.setAppElement(container);
Modal.injectCSS();

var $ = require('jquery');

module.exports = React.createClass({
	getInitialState: function() {
		var self = this;
		var child = self.props.children1.forEach(function(child) {
			return child;
		});
		var allHeightInfo = new HeightDataCollection();
		var heightLine = [
			{
			    name: "Average height (inch)",
			    values: [ { x: 0, y: 19.4 },  { x: 1, y: 21.2 }, { x: 2, y: 22.1 }, { x: 3, y: 23.6 }, { x: 4, y: 24.5 }, { x: 5, y: 25.3 },
			    			{ x: 6, y: 25.9 }, { x: 7, y: 26.5 }, { x: 8, y: 27.1 }, { x: 9, y: 27.6 }, { x: 10, y: 28.2 }, { x: 11, y: 28.7 }, { x: 12, y: 29.2},
			    			{ x: 15, y: 30.6 }, { x: 18, y: 31.8 }, { x: 21, y: 32.9 }, { x: 24, y: 33.5 } 
			    		]
			}
		];
		allHeightInfo.fetch({
			query: {
				userId: this.props.user.id
			},
			success: function(heightData) {
				if(heightData) {

					heightLine.push({
						name: child[0].attributes.name+" height",
						// values: heightData.models.forEach(function(height) {
						// 	return { x: height.attributes.age, y: height.attributes.height} 
						// })
						values: [ { x: heightData.models[0].attributes.age , y: heightData.models[0].attributes.height },
									{ x: heightData.models[1].attributes.age , y: heightData.models[1].attributes.height } ]
					})
				}
			}
		});
		console.log(heightLine);
		allHeightInfo.on('change', function() {
			self.forceUpdate();
		});

		var weightData = [
		  {
		    name: "Average weight (lbs)",
		    values: [ 
		    			{ x: 0, y: 7.3 },  { x: 1, y: 9.6 }, { x: 2, y: 11.7 }, { x: 3, y: 13.3 }, { x: 4, y: 14.6 }, { x: 5, y: 15.8 },
		    			{ x: 6, y: 16.6 }, { x: 7, y: 17.4 }, { x: 8, y: 18.1 }, { x: 9, y: 18.8 }, { x: 10, y: 19.4 }, { x: 11, y: 19.9 }, { x: 12, y: 20.4 }, 
		    			{ x: 15, y: 22 }, { x: 18, y: 23.4 }, { x: 21, y: 24.9 }, { x: 24, y: 26.5 }
		    		]
		  }
		  // {
		  //   name: child[0].attributes.name+" weight"
		  //   // values: [ 
		  //   // 			// { x: 0, y: 7. },  { x: 1, y: 9 }, { x: 2, y: 12 }, { x: 3, y: 13.3 }, { x: 4, y: 14.6 }, { x: 5, y: 15.8 },
		  //   // 			// { x: 6, y: 16.6 }, { x: 7, y: 17.4 }, { x: 8, y: 18.1 }, { x: 9, y: 18.8 }, { x: 10, y: 19.4 }, { x: 11, y: 19.9 }
		  //   // 		]
		  // },
		];
		
		return {
			child: child,
			weight: weightData,
			height: heightLine,
			showModal: false
		};
	},	
	render: function() {

		console.log(this.state.height);

		var self = this;
		var nav = {
			position: 'absolute',
			background: 'grey',
			minHeigth: '100%'
		};
		var main = {
			heigth: '100%'
		};
		var line = {
			top: 0,
			backgroundImage: 'url(../../images/bg-header2.png)',
			height: '3px',
			width: '100%'
		};
		var logo = {
			background: 'url(../../images/logo.png)',
			backgroundSize: 'cover',
			marginTop: '20px',
			marginLeft: '5px',
			height: '250px',
			listStyle: 'none'
		};
		var userId = this.props.user.id;
		return(
			<div id="wrapper" >
				<div style={line}></div>
				<div id="sidebar-wrapper" >
					<ul className="row sidebar-nav" id="sidebar"> 
						<li style={logo}></li>    
						<li><a onClick={this.gotoDiary}>Diary<span></span></a></li>
						<li><a onClick={this.gotoGallery}>Gallery<span></span></a></li>
						<li><a onClick={this.gotoHealth}>Health Notes<span></span></a></li>
						<li><a onClick={this.gotoGrowth}>Growth<span></span></a></li>
						<li><a onClick={this.gotoProfile}>Child Profile<span></span></a></li>
					</ul>
				</div>
				<div id="page-content-wrapper" >
					<NavigationComponent app={this.props.app} user={this.props.user} child={this.state.child} />	
					<div ref='chart'>
            			<LineChart legend={true} data={this.state.weight} width={480} height={280} title="Weight Line Chart"/>
            			<WeightDataComponent user={this.props.user} />
					</div>
					<div>
            			<LineChart legend={true} data={this.state.height} width={480} height={280} title="Height Line Chart" />
            			<HeightDataComponent user={this.props.user} />
            		</div>

				</div>
			</div>
		);
	},
	gotoDiary: function() {
		this.props.app.navigate('diary/'+this.props.user.id, {trigger: true});
	},
	gotoGallery: function() {
		this.props.app.navigate('gallery/'+this.props.user.id, {trigger: true});
	},
	gotoHealth: function() {
		this.props.app.navigate('health/'+this.props.user.id, {trigger: true});
	},
	gotoGrowth: function() {
		this.props.app.navigate('growth/'+this.props.user.id, {trigger: true});
	},
	gotoProfile: function() {
		this.props.app.navigate('profile/'+this.props.user.id, {trigger: true});
	}
});