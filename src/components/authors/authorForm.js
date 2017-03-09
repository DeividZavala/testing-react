"use strict";

var React = require('react');
var Input = require('../common/textinput');

var authorForm = React.createClass({
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
                />

                <Input 
                    name="lastName"
                    label="Apellido:"
                    value={this.props.author.lastName}
                    placeholder="Tu Apellido papud"
                    onChange={this.props.onChange}
                />
                
                <button type="submit" className="btn btn-success" onClick={this.props.onSave}>Picale papud</button>
            </form>
        );
    }
});

module.exports = authorForm;