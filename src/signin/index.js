var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/signin', function (ctx, next) {
        title('Toci | Signin');
    var main = document.getElementById('all');
    empty(main).appendChild(template);
});