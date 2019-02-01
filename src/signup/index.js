var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
page('/signup', function (ctx, next) {
    title('Toci | Signup');
    var main = document.getElementById('all');
    empty(main).appendChild(template);
});