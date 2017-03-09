"use strict";

var React = require('react');
var Link = require('react-router').Link;

var notFoundPage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Lo siento papud, no lo encontre</h1>
                <p>No hay nada para ver aqui, jalate para otro lado</p>
                <p><Link to="app">Back to home</Link></p>
            </div> 
        );
    }
});

module.exports = notFoundPage;