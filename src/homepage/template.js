var yo = require('yo-yo');
var user = require('../user');
var tema = localStorage.tema || 'all';

var cuenta = yo`<div class=${tema} id='content'>
    <div class='contenido_overflow_hidden'>
        <div class='container_flor_1'>
            <div class='flor_1'>
            
                <a href='/como_te_sientes' title='¿Como te sientes?'>
                    <div class='estado_user'>
                            <i class="fas fa-male ico-per"></i>
                    </div>
                </a>
            
                <a href='/como_te_sientes'>
                    <div class='medico'>
                        <i class="fas fa-user-md ico_md"></i>
                    </div>
                </a>
            
                <a href='/como_te_sientes'>
                    <div class='unidad_medica'>
                        <i class="fas fa-hospital ico-hop"></i>
                </div>
                </a>
            
                <a href='/como_te_sientes'>
                    <div class='mas_servisios'>
                        <i class="fas fa-user-plus ico-mas"></i>
                    </div>
                </a>
            
                <a href='/como_te_sientes'>
                    <div class='laboratorio'>
                        <i class="fas fa-flask ico-lab"></i>
                    </div>
                </a>
            
                <a href='/como_te_sientes'>
                    <div class='farmacia'>
                        <i class="fas fa-pills ico-pill"></i>
                    </div>
                </a>
            
                <div class='circulo_central'>
                    <img  class='img_toci_central'src='toci_circulo_central.svg'>
                </div>
                
            </div>
        </div>
    </div>
</div>
`;

		// function cordenadas(event) {
        //     console.log(event.pageX);
            
		//     // var x = event.pageX / 20;
		//     // var y = event.pageY / 20;
		//     // document.getElementById("capa1").style.marginTop = y + "px";
		//     // document.getElementById("capa1").style.marginLeft = x + "px";
		//     // var a = event.pageX / 10;
		//     // var b = event.pageY / 10;
		//     // document.getElementById("capa2").style.marginTop = b + "px";
		//     // document.getElementById("capa2").style.marginLeft = a + "px";
		//     // watever++;
		// }

module.exports = user(cuenta);
