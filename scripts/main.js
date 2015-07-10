var React = require('react');
var parseSettings = require('./config/parse.js');
var Backbone = require('backparse')(parseSettings);
var container = document.getElementById('container');
filepicker.setKey('AeK0dNOzoQx2TdjfEqKrOz');

var WelcomePageComponent = require('./components/WelcomePageComponent');
var LoginPageComponent = require('./components/LoginPageComponent');
var ChildInfoPageComponent = require('./components/ChildInfoPageComponent');
var DiaryPageComponent = require('./components/DiaryPageComponent');
var BasicComponent = require('./components/BasicComponent');
var NavigationComponent = require('./components/NavigationComponent');

var UserModel = require('./models/UserModel');
var ChildModel = require('./models/ChildModel');

var user = new UserModel();
var child = new ChildModel();

var App = Backbone.Router.extend({
	routes: {
		'': 'welcome',
		'login': 'login',
		'childInfo': 'childInfo',
		'diary': 'diary',
		'gallery': 'gallery',
		'health': 'health',
		'growth': 'growth',
		'profile': 'profile'
	},
	welcome: function () {
		React.render(
			<WelcomePageComponent user={user} app={app} />,
			container
		)
	},
	login: function () {
		React.render(
			<LoginPageComponent user={user} app={app} />,
			container
		)
	},
	childInfo: function () {
		React.render(
			<ChildInfoPageComponent child={child} user={user} app={app} />,
			container
		)
	},
	diary: function () {
		React.render(
			<DiaryPageComponent user={user} app={app} />,
			container
			// <BasicComponent user={user} app={app} />,
			// container
		)
	},
	gallery: function () {
		React.render(
			// <DiaryPageComponent app={app} />,
			// container
			<BasicComponent user={user} app={app} />,
			container
		)
	},
	health: function () {
		React.render(
			// <DiaryPageComponent app={app} />,
			// container
			<BasicComponent user={user} app={app} />,
			container
		)
	},
	growth: function () {
		React.render(
			// <DiaryPageComponent app={app} />,
			// container
			<BasicComponent user={user} app={app} />,
			container
		)
	},
	profile: function () {
		React.render(
			// <DiaryPageComponent app={app} />,
			// container
			<BasicComponent user={user} app={app} />,
			container
		)
	}
});

var app = new App();
Backbone.history.start();
