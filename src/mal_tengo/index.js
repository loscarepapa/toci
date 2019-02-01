var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/mal_tengo', function (ctx, next) {
            title('Toci | Mal tengo ...');
    var main = document.getElementById('all');
    empty(main).appendChild(template);
    
});