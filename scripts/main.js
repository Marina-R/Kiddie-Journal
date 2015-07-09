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

var UserModel = require('./models/UserModel');

var user = new UserModel();

var App = Backbone.Router.extend({
	routes: {
		'': 'welcome',
		'login': 'login',
		'childInfo': 'childInfo',
		'diary': 'diary'
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
			<ChildInfoPageComponent user={user} app={app} />,
			container
		)
	},
	diary: function () {
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
