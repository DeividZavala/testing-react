"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorapi');
var Router = require('react-router');
var toastr = require('toastr');

var manageAuthorPage = React.createClass({

    mixins: [
            Router.Navigation
        ],

    getInitialState: function () {
        return {
            author: {id: "", firstName: "", lastName: ""},
            errors: {}
        };
    },

    setAuthorState: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },

    authorFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {};

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = "Fist name must be al least 3 characters";
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = "Last name must be al least 3 characters";
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveAuthor: function (event) {
        event.preventDefault();

        if(!this.authorFormIsValid()){
            toastr.error("Error en el formulario papud");
            return;
        }
        AuthorApi.saveAuthor(this.state.author);
        toastr.success("Agregado papud");
        this.transitionTo('authors');
    },

    render: function(){
        return (

            <AuthorForm 
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
                errors={this.state.errors}
            />

        );
    }

});

module.exports = manageAuthorPage;