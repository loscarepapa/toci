var yo = require('yo-yo');
var user = require('../user');
var name_user = localStorage.name_user;
var tema = localStorage.tema || 'all';

var cuenta = yo `<div class=${tema} id='content'>
    <div class='como_te_sientes'>
        <div class='contenedor_como_te_sientes'>
            <p class='hola_user' id='hola_user'>¡Hola ${name_user}!</p>
            <p class='como'>¿Como te sientes?</p>
        
            <div  class='opciones_como_te_sientes'>
                <a href='/mal_tengo'><div class='mal'>Mal, tengo ...</div></a>
                <a href='#'><div class='bien_pero'>Bien pero ...</div></a>
            </div>

        </div>
    </div>
</div>
`;

module.exports = user(cuenta);