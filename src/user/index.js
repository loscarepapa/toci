var yo = require('yo-yo');
var name_user = localStorage.name_user;
var tema = localStorage.tema || 'all';
var tema_img = localStorage.tema_img || 'nocturno.svg';
var tema_texto = localStorage.tema_texto || 'Tema oscuro';
var fondo_menu = localStorage.fondo_menu || 'claro';
/* 
 *Sirve para poder cambiar el titulos de los sintomas y enfermadades
 */
var tema_texto_negativo = localStorage.tema_texto_negativo || 'normal';
//

module.exports = function user(box) {
// onclick=${name.bind(null, 'Martin Alejandro')}
    return yo `<div class='contenido'>

        <div class='menu' onclick=${menu}>
        <img class='img_user' src='usuario.svg'>
        </div>
        
        <div class="opacity_menu" onblur=${menu_des} id='menu' tabindex='0'>
        <div class='name_user' id='user_name'>${name_user}</div>
                <a href="/" class='${fondo_menu}'>
                    <img src='menu.svg'>
                    Inicio
                </a>

                <a href="#" class='${fondo_menu}'>
                    <img src='reg_ser.svg'>
                    Registrar servicio
                </a>

                 <a href=""  class='${fondo_menu}' onclick='${tema_function}'>
                    <img id='noc_luz' src=${tema_img}>
                    <p id='tema'>${tema_texto}</p>
                </a>

                <a href="#" class='${fondo_menu}'>
                    <img src='salir.svg'>
                    Salir
                </a>
        </div>

        ${box}
      </div>`;

}

var content, noc_luz;

function name(name) {
    localStorage.name_user = name;
    location.reload();
}

function menu() {
    var menu = document.getElementById('menu');

    menu.className = 'opciones_menu';
    menu.focus();


}

function menu_des() {
    var menu = document.getElementById('menu');
    menu.className = 'opacity_menu';
}

function tema_function() {


    if (localStorage.tema == 'nocturno') {
        localStorage.tema = 'all';
        tema = 'all'
    } else {
        localStorage.tema = 'nocturno';
        tema = 'nocturno'
    }


    if (localStorage.tema == 'nocturno') {
        localStorage.tema_img = 'tema_luz_ivory.svg';
        tema_img = 'tema_luz_ivory.svg'
    } else {
        localStorage.tema_img = 'nocturno.svg';
        tema_img = 'nocturno.svg'
    }


    if (localStorage.tema == 'nocturno') {
        localStorage.tema_texto = 'Tema claro';
        tema_texto = 'Tema claro'
    } else {
        localStorage.tema_texto = 'Tema oscuro';
        tema_texto = 'Tema oscuro'
    }

    /* 
    *Sirve paracambiar los titulos de los sintomas y enfermadades
     */
    if (localStorage.tema == 'nocturno') {
        localStorage.tema_texto_negativo = 'normal';
        tema_texto = 'normal'
    } else {
        localStorage.tema_texto_negativo = 'negativo';
        tema_texto = 'negativo'
    }
    /* 
     *Sirve paracambiar el fondo de las opciones del menu
     */
    if (localStorage.tema == 'nocturno') {
        localStorage.fondo_menu = 'oscuro';
        // fondo_menu = 'oscuro'
    } else {
        localStorage.fondo_menu = 'claro';
        // fondo_menu = 'claro'
    }


    location.reload();
    
}