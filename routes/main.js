var express = require('express');
var router = express.Router();

require('node-jsx').install({ extension: ".js" });
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var App = require('../public/build/es5/ServerApp');


/* GET home page. */
router.get('/', function(req, res, next) {
    var html = ReactDOMServer.renderToString(React.createElement(App, {page:'home'}));
    res.render('index', {react: html});
});


router.get('/:page', function(req, res, next) {
	var page = req.params.page;

	if (page == 'admin'){
		next();
		return;
	}


    var html = ReactDOMServer.renderToString(React.createElement(App, {page:page}));
    res.render('index', {react: html});
});


router.get('/:page/:slug', function(req, res, next) {

	var page = req.params.page;
	if (page == 'api'){ // this is an api request
		next();
		return;
	}

	if (page == 'admin'){
		next();
		return;
	}

	var slug = req.params.slug;
    var html = ReactDOMServer.renderToString(React.createElement(App, {page:page, slug:slug}));
    res.render('index', {react: html});
});

module.exports = router;
