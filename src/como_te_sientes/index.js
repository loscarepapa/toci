var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/como_te_sientes', function (ctx, next) {
            title('Toci | Como te sientes');
    var main = document.getElementById('all');
    empty(main).appendChild(template);
    
});