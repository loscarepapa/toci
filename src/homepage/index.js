var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
            title('Toci | Inicio');
    var main = document.getElementById('all');
    empty(main).appendChild(template);
});