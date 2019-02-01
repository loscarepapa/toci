var yo = require('yo-yo');
var user = require('../user');
var tema = localStorage.tema || 'all';
var tema_texto_negativo = localStorage.tema_texto_negativo || 'normal';

var cuenta = yo `
<div class=${tema} id='content'>
    <div class='contenido_overflow_hidden'>
    <p class=${tema_texto_negativo}>Dolor</p>

    <div title='Reintentar' class='reintentar' onclick=${reintentar.bind(null)}><i class="fas fa-sync-alt"></i></div>

        <div class='progreso' id='barra'></div>
        
        <div class='preguntas_todo' id='preguntas_todo'>

            <div class='none' id='preguntas_opcionales_1'>
                <div class='opciones_centradas_1' id='opciones_centradas_1'>
                    <div class='opciones_scroll'>
                        <div class='disablecheck' onclick=${registro_opciones.bind(null, 'o_1', 1)} id='o_1'></div>
                        <div class='disablecheck' onclick=${registro_opciones.bind(null, 'o_2', 2)} id='o_2'></div>
                        <div class='disablecheck' onclick=${registro_opciones.bind(null, 'o_3', 3)} id='o_3'></div>
                        <div class='disablecheck' onclick=${registro_opciones.bind(null, 'o_4', 4)} id='o_4'></div>
                        <div class='disablecheck' onclick=${registro_opciones.bind(null, 'o_5', 5)} id='o_5'></div>
                        <div class='disablecheck' onclick=${registro_opciones.bind(null, 'o_6', 6)} id='o_6'></div>
                        <div class='disablecheck' onclick=${registro_opciones.bind(null, 'o_7', 7)} id='o_7'></div>
                        <div class='disablecheck' onclick=${registro_opciones.bind(null, 'o_8', 8)} id='o_8'></div>
                        <div class='disablecheck' onclick=${registro_opciones.bind(null, 'o_9', 9)} id='o_9'></div>
                        <div class='disablecheck' onclick=${registro_opciones.bind(null, 'o_10', 10)} id='o_10'></div>
                        <div class='disablecheck' onclick=${registro_opciones.bind(null, 'o_11', 11)} id='o_11'></div>
                        <div class='disablecheck' onclick=${registro_opciones.bind(null, 'o_12', 12)} id='o_12'></di>
                    </div>
                </div>
                <div class='listo' onclick=${salir_pregunta_opciones.bind(null, 'preguntas_opcionales_1', 'opciones_centradas_1')}>
                    <img src='check2.svg'>
                </div>
            </div>

            <div class='none' id='preguntas_opcionales_2'>
                <div class='opciones_centradas_1' id='opciones_centradas_2'>
                    <div class='opciones_scroll'>
                        <div class='disablecheck_img' onclick=${registro_opciones.bind(null, 'o_13', 1)} id='o_13'></div>
                        <div class='disablecheck_img' onclick=${registro_opciones.bind(null, 'o_14', 2)} id='o_14'></div>
                        <div class='disablecheck_img' onclick=${registro_opciones.bind(null, 'o_15', 3)} id='o_15'></div>
                        <div class='disablecheck_img' onclick=${registro_opciones.bind(null, 'o_16', 4)} id='o_16'></div>
                    </div>
                </div>
                <div class='listo' onclick=${salir_pregunta_opciones.bind(null, 'preguntas_opcionales_2', 'opciones_centradas_2')}>
                    <img src='check2.svg'>
                </div>
            </div>

        
            <div class='pregunta_actual' id='preguntas_actual'>
                
                <p class='texto_pregunta' id='texto_pregunta'>
                    ¿Tiene fiebre?
                </p>
            
            <div class="contenedor_tarjeta">
                <figure id='tarjeta' class='targeta'>
                    <figcaption class='frontal'>
						
                    </figcaption>
                    
                    <figcaption class='trasera'>
                        <div class='cont_cent_rela'>
                            <p class='texto_pregunta_sig' id='pregunta_sig'>
                                ¿Tienes molestias respiratorias?
                            </p>
                        </div>
					</figcaption>
                </figure>
            </div>

                
                <div class='opciones' id='opciones'>
                    <div class='si' id='si' onclick=${preguntas.bind(null, 'si')}>
                        <p class='opciones_resp'>
                            Si
                        </p>
                    </div>
            
                    <div class='no' id='no' onclick=${preguntas.bind(null, 'no')}>
                        <p class='opciones_resp'>
                            No
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

var conteo_preguntas = 0,
    texto_pregunta,
    si_no_efecto,

    // Texto de la preguntas apartir de la segunda
    preguntas_texto = [
        '¿Tienes molestias respiratorias?',
        // 3 pregunta opcioonal
        '¿Tiene molestias intestinales?',
        '¿Tiene lesiones en piel o mucosas?',
        '¿Tiene alguna alteración de la conciencia, sentidos o dificultad para mover alguna parte del cuerpo?',
        '¿Tiene sangrado por alguna parte del cuerpo?',
        '¿Tiene alteraciones de las articulaciones?',
        '¿Tiene malestar general?',
        '¿Ha perdido peso involuntariamente?',
        '¿Tiene sensación de desmayo?',
        '¿El latido del corazón es muy rapido (Más de 90 x minuto)?',
        '¿Presenta nodulos o bolitas en alguna parte del cuerpo?',
        '¿Tiene molestias para orinar?',
        '¿En 24 horas cuanto orina?',
        '¿En que estado de la república vive actualmente?',
        '¿Ha viajado en los últimos quince días?',
        '¿A donde?',
        '¿Consume alimentos en la calle?',
        '¿Ha comido carne, leche o queso de rancho?',
        '¿Ha estado en contacto contacto con insectos o  con otros animales?',
        '¿Ha visto pajaros o mamiferos muertos  cerca de su domicilio?',
        '¿Trabaja en granja, establo o en rastro?',
        '¿Tiene alguna enfermedad crónica?',
        '¿Tiene hipertensión arterial?',
        '¿Tiene diabetes mellitus?',
        '¿Tiene familiares con inflamación de rodillas?'
        //24 dd 0
    ],

    opcinal_1 = [
        "<div class='opcion_derivada'>Tos</div>",
        "<div class='opcion_derivada'>Nariz congestionada</div>",
        "<div class='opcion_derivada'>Estornudo y moco</div>",
        "<div class='opcion_derivada'>Garganta irritada</div>",
        "<div class='opcion_derivada'>Dolor de garganta</div>",
        "<div class='opcion_derivada'>Flemas</div>",
        "<div class='opcion_derivada'>Moco por la garganta</div>",
        "<div class='opcion_derivada'>Secrecion por oido</div>",
        "<div class='opcion_derivada'>Dificultad para respirar</div>",
        "<div class='opcion_derivada'>Dolor de pecho</div>",
        "<div class='opcion_derivada'>Silvo al respirar</div>",
        "<div class='opcion_derivada'>Ronca</div>",
        // 11 dd 0
    ],

    opcinal_2 = [
        "<div class='opcion_derivada'>Diarea</div>",
        "<div class='opcion_derivada'>Nauseas</div>",
        "<div class='opcion_derivada'>Vomito</div>",
        "<div class='opcion_derivada'>Ardor retroesternal</div>",
        "<div class='opcion_derivada'>Crecimiento en la costilla</div>",
        "<div class='opcion_derivada'>Ojos o piel amarilla</div>",
        "<div class='opcion_derivada'>Orina oscura</div>",
        "<div class='opcion_derivada'>Extreñiminto</div>",
        "<div class='opcion_derivada'>Sin apetito</div>",
        "<div class='opcion_derivada'>Indigestion</div>",
        "<div class='opcion_derivada'>Eructos</div>"
        // 10 dd 0
    ],

    opcinal_3 = [
        "<img class='img_piel' src='maculo.jpg'>",
        "<img class='img_piel' src='petequias.jpg'>",
        "<img class='img_piel' src='vesiculas.jpg'>",
        "<img class='img_piel' src='pustulas.jpg'>",
        // 3 dd 0
    ],

    // Resultado de las preguntas
    respuesta_preguntas = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        // 24 dd 0
    ],
    //& Resulado de las preguntas opcionales
    respuetas_opcionales_1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 11 dd 0
    respuetas_opcionales_2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 10 dd 0
    respuetas_opcionales_3 = [0, 0, 0, 0], // 10 dd 0
    //

    opciones_vacias = ['o_1', 'o_2', 'o_3', 'o_4', 'o_5', 'o_6', 'o_7', 'o_8', 'o_9',
                       'o_10', 'o_11', 'o_12', 'o_13', 'o_14', 'o_15', 'o_16'],

    barra_progreso = 0,
    total_de_preguntas = 25,
    porcentage_alto_barra = 0,

    conteo_preguntas_opcionales = 0,

    pregunta_opcional_actual,
    pregunta_opcional_central_actual;

document.addEventListener("keyup", siNoKey);
 
function siNoKey(key) {

    if (key.code == "ArrowLeft") {
        preguntas("si");
    } else if (key.code == "ArrowRight") {
        preguntas("no");
    } else if (key.code == "KeyR") {
        reintentar();
    }

}

function preguntas(si_no) {

    // Vuelve 1 o 0 la respueta-
    var cambio_respuesta;

    if (si_no == 'si') {
        cambio_respuesta = 1;
    } else {
        cambio_respuesta = 0;
    }


    if (conteo_preguntas == 1 && cambio_respuesta == 1) {
        pregunta_opcional_actual = document.getElementById('preguntas_opcionales_1');

        pregunta_opcional_central_actual = document.getElementById('opciones_centradas_1');
        pregunta_opcional_central_actual.className = 'opciones_centradas_1';

        conteo_preguntas_opcionales = 0;

        // Agrega el si o 1 a la pregunta detonadora
        respuesta_preguntas[conteo_preguntas] = 1;

        console.log(respuesta_preguntas);
        console.log(` ${conteo_preguntas} Pregunta`);

        document.getElementById('preguntas_opcionales_1').className = 'opciones_derivadas_de_preguntas';
        document.getElementById('preguntas_actual').className = 'salir_pregunta';

        // Inserta las opciones en la plantilla
        for (i = 0; i <= 11; i++) {
            document.getElementById(opciones_vacias[i]).innerHTML = opcinal_1[i];
        }

    } else if (conteo_preguntas == 2 && cambio_respuesta == 1) {
        pregunta_opcional_actual = document.getElementById('preguntas_opcionales_1');

        pregunta_opcional_central_actual = document.getElementById('opciones_centradas_1');
        pregunta_opcional_central_actual.className = 'opciones_centradas_2';

        conteo_preguntas_opcionales = 1;

        // Agrega el si o 1 a la pregunta detonadora
        respuesta_preguntas[conteo_preguntas] = 1;

        console.log(respuesta_preguntas);
        console.log(` ${conteo_preguntas} Pregunta`);

        document.getElementById('preguntas_opcionales_1').className = 'opciones_derivadas_de_preguntas';
        document.getElementById('preguntas_actual').className = 'salir_pregunta';

        // Inserta las opciones en la plantilla
        for (i = 0; i <= 10; i++) {
            document.getElementById(opciones_vacias[i]).innerHTML = opcinal_2[i];
        }
    } else if (conteo_preguntas == 3 && cambio_respuesta == 1) {
        pregunta_opcional_actual = document.getElementById('preguntas_opcionales_2');

        pregunta_opcional_central_actual = document.getElementById('opciones_centradas_1');
        pregunta_opcional_central_actual.className = 'opciones_centradas_2';

        conteo_preguntas_opcionales = 2;

        // Agrega el si o 1 a la pregunta detonadora
        respuesta_preguntas[conteo_preguntas] = 1;

        console.log(respuesta_preguntas);
        console.log(` ${conteo_preguntas} Pregunta`);

        document.getElementById('preguntas_opcionales_2').className = 'opciones_derivadas_de_preguntas';
        document.getElementById('preguntas_actual').className = 'salir_pregunta';

        // Inserta las opciones en la plantilla
        for (i = 0; i <= 3; i++) {
            document.getElementById(opciones_vacias[i + 12]).innerHTML = opcinal_3[i];
        }
    } else {
        pregunta_opcional_central_actual = document.getElementById('opciones_centradas_1');

        console.log(respuesta_preguntas[1]);

        //     Guardado de respuestas

        respuesta_preguntas[conteo_preguntas] = cambio_respuesta;

        //     Cambio de preguntas

        console.log(respuesta_preguntas);
        texto_pregunta = document.getElementById('texto_pregunta');

        //     Animacion de cambio de pregunta
        texto_pregunta.className = 'texto_pregunta_cambio', setTimeout(() => {
                texto_pregunta.innerHTML = preguntas_texto[conteo_preguntas];
                conteo_preguntas++;
            }, 150),
            setTimeout(() => {
                texto_pregunta.className = 'texto_pregunta'
            }, 300);

        console.log(` ${conteo_preguntas} Pregunta`);



        //-     Efecto onclick
        si_no_efecto = document.getElementById(si_no);
        si_no_efecto.className = si_no, setTimeout(() => si_no_efecto.className = 'cambio_si_no', 0);

        //-
    }

    barra_progreso++;
    porcentage_alto_barra = barra_progreso * 100 / total_de_preguntas;
    document.getElementById('barra').style.height = `${porcentage_alto_barra - 1}%`;

}

var none;

function salir_pregunta_opciones(id, id_2) {

    none = document.getElementById(id);

    none.className = 'opciones_derivadas_de_preguntas_salida', setTimeout(() => none.className = 'none', 950);
    document.getElementById(id_2).className = `opciones_centradas_${conteo_preguntas_opcionales + 1}_salida`, setTimeout(() => {
        document.getElementById(id_2).className = 'opciones_centradas_1';
    }, 1400);

    setTimeout(() => {
        document.getElementById('preguntas_actual').className = 'pregunta_actual';
    }, 900);

    document.getElementById('texto_pregunta').innerHTML = preguntas_texto[conteo_preguntas];
    conteo_preguntas++;
    setTimeout(() => {
        for (i = 0; i <= 15; i++) {
            document.getElementById(`o_${i + 1}`).className = 'disablecheck';
            document.getElementById(`o_${i + 1}`).innerHTML = '';

        }

    }, 950);

    console.log(`${conteo_preguntas} Pregunta`);

}

function registro_opciones(num_opcion, num) {
    //-     Efecto toggle en preguntas opcionales
    if (document.getElementById(num_opcion).className == 'check') {
        document.getElementById(num_opcion).className = 'disablecheck';
        if (conteo_preguntas_opcionales == 0) {
            respuetas_opcionales_1[num - 1] = 0;
            console.log(respuetas_opcionales_1);
        } else if (conteo_preguntas_opcionales == 1) {
            respuetas_opcionales_2[num - 1] = 0;
            console.log(respuetas_opcionales_2);
        } else if (conteo_preguntas_opcionales == 2) {
            respuetas_opcionales_3[num - 1] = 0;
            console.log(respuetas_opcionales_3);
        }
    } else {
        document.getElementById(num_opcion).className = 'check';
        if (conteo_preguntas_opcionales == 0) {
          respuetas_opcionales_1[num - 1] = 1;
          console.log(respuetas_opcionales_1);
        } else if (conteo_preguntas_opcionales == 1) {
          respuetas_opcionales_2[num - 1] = 1;
          console.log(respuetas_opcionales_2);
        } else if (conteo_preguntas_opcionales == 2) {
          respuetas_opcionales_3[num - 1] = 1;
          console.log(respuetas_opcionales_3);
        }
    }

}

var remake_pre, remake_pre_1;

function reintentar() {

    remake_pre = document.getElementById(pregunta_opcional_actual);
    remake_pre_1 = document.getElementById('preguntas_actual');
    conteo_preguntas_opcionales = 0;
    barra_progreso = 0;
    //  Borra las respuestas de las preguntas combirtiendolas en 0 o en no's
    for (i = 0; i <= 25; i++) {
        respuesta_preguntas[i] = 0;
    }
    document.getElementById('barra').style.height = `${barra_progreso}%`;

    //  Regresa a la primera pregunta pregutando si hay una pregunta de opcion multiple y saliendo de ella con transicion
    if (remake_pre.className == 'none') {

        texto_pregunta = document.getElementById('texto_pregunta');

        conteo_preguntas = 0;
        texto_pregunta = document.getElementById('texto_pregunta');
        texto_pregunta.className = 'texto_pregunta_cambio', setTimeout(() => {
                texto_pregunta.innerHTML = '¿Tiene fiebre?';
            }, 150),
            setTimeout(() => {
                texto_pregunta.className = 'texto_pregunta'
            }, 300);

    } else {
        remake_pre_1.className = 'pregunta_actual';
        texto_pregunta = document.getElementById('texto_pregunta');

        conteo_preguntas = 0;
        texto_pregunta = document.getElementById('texto_pregunta');
        texto_pregunta.className = 'texto_pregunta_cambio', setTimeout(() => {
                texto_pregunta.innerHTML = '¿Tiene fiebre?';
            }, 150),
            setTimeout(() => {
                texto_pregunta.className = 'texto_pregunta';
            }, 300);

        pregunta_opcional_actual.className = 'opciones_derivadas_de_preguntas_salida', setTimeout(() => {
            pregunta_opcional_actual.className = 'none';
            for (i = 0; i <= 11; i++) {
                document.getElementById(opciones_vacias[i]).innerHTML = '';
            }
        }, 1400);


    }

    for (i = 0; i <= 11; i++) {
        respuetas_opcionales_1[i] = 0;
        respuetas_opcionales_2[i] = 0;
        document.getElementById(opciones_vacias[i]).className = 'disablecheck';

    }


}

module.exports = user(cuenta);
//-     Bugs o opciones echas  corregidas
// !falta atrasar o quitar el settimeout de las prguntas opcioneles •