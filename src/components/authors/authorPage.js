"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorApi = require('../../api/authorapi');
var AuthorList = require('./authorList');

var Authors = React.createClass({
	getInitialState: function() {
		return {
			authors: []
		};
	},

	componentDidMount: function(){
		this.setState({
			authors: AuthorApi.getAllAuthors()
		});
	},

	render: function () {
		return (
			<div>
				<h1>Authors</h1>
				<Link className="btn btn-default" to="addAuthor">Add Author</Link>
				<AuthorList authors={this.state.authors}/>
			</div>
		);
	}

	

});

module.exports = Authors;