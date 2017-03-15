"use strict";

var Dispacher = require('../dispatcher/appDispacher');
var AuthorApi = require('../api/authorapi');
var ActionsTypes = require('../constants/actiontypes');

var AuthorAction = {
    createAuthor: function (author) {
        var newAuthor = AuthorApi.saveAuthor(author);

        Dispacher.dispatch({
            actionType: ActionsTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor: function (author) {
        var updatedAuthor = AuthorApi.saveAuthor(author);

        Dispacher.dispatch({
            actionType: ActionsTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },

    deleteAuthor: function (id) {
        AuthorApi.deleteAuthor(id);

        Dispacher.dispatch({
            actionType: ActionsTypes.DELETE_AUTHOR,
            id: id
        });
    }


};

module.exports = AuthorAction;