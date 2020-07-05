"use strict";
var App;
(function (App) {
    function isString(value) {
        return typeof value === 'string';
    }
    App.isString = isString;
})(App || (App = {}));
/// <reference path="a.ts" />
var App;
(function (App) {
    const a = App.isString('foo');
})(App || (App = {}));
