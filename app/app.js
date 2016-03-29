require('angular');
//import modules here
var MainController = require('./controllers/MainController');
var WorkController = require('./controllers/WorkController');
var ContactController = require('./controllers/ContactController');

var app = angular.module('app', []);
app.controller('MainController', ['$scope', MainController]);
app.controller('WorkController', ['$scope', WorkController]);
app.controller('ContactController', ['$scope', ContactController]);