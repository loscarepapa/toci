var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/dolor', function (ctx, next) {
            title('Toci | Dolor');
    var main = document.getElementById('all');
    empty(main).appendChild(template);
});