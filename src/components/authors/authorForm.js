"use strict";

var React = require('react');
var Input = require('../common/textinput');

var authorForm = React.createClass({

    propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function () {
        return (
            <form>
                <h1>Agrega un autor papud</h1>

                <Input 
                    name="firstName"
                    label="Nombre:"
                    value={this.props.author.firstName}
                    placeholder="Tu nombre papud"
                    onChange={this.props.onChange}
                    error={this.props.errors.firstName}
                />

                <Input 
                    name="lastName"
                    label="Apellido:"
                    value={this.props.author.lastName}
                    placeholder="Tu Apellido papud"
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName}
                />
                
                <button type="submit" className="btn btn-success" onClick={this.props.onSave}>Picale papud</button>
            </form>
        );
    }
});

module.exports = authorForm;