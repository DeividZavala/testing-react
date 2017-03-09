"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render: function(){
		return (
			<div className="jumbotron">
				<h1><a href="#about">Fixter David</a></h1>
				<p>React, React router, and flux for ultra responsive web apps</p>
				<Link to="about" className="btn btn-primary">Aprende más de este pedo papud</Link>
			</div>
		);
	}
});

module.exports = Home;