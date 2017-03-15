"use strict";

var Dispatcher = require('../dispatcher/appDispacher');
var ActionTypes = require('../constants/actiontypes');
var AuthorApi = require('../api/authorapi');

var InitilizeActions = {

    initApp: function () {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }
        });
    }

};

module.exports = InitilizeActions;