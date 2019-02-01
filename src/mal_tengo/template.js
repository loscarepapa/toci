var yo = require('yo-yo');
var user = require('../user');
var tema = localStorage.tema || 'all';

var cuenta = yo`<div class=${tema} id='content'>
    <div class='mal_siento contenido_overflow_hidden'>
        <div class='scroll'>
            <div class='siento_container' id='siento'>
                <div class='siento_container'>
                    <p class='siento_titulo'>Tengo ...</p>
                    <a  href='/dolor'>
                        <div class='boton_2'>
                        Dolor
                        </div>
                    </a>
                    
                    <a  href='#'>
                        <div class='boton_2'>
                        Fiebre
                        </div>
                    </a>
                    
                    <a  href='#'>
                        <div class='boton_2'>
                        Tos
                        </div>
                    </a>
                    
                    <a  href='#'>
                        <div class='boton_2'>
                        Diarrea
                        </div>
                    </a>
                    <div class='otro_gradiente' onclick=${creo}>
                        Creo que tengo ...
                    </div>
                    
                </div>
            </div>


            <div class='none' id='creo'>
                <p class='creo_que_tengo'>
                    Creo que tengo ...
                </p>
                <div class='enfermedades'>
                    <a href='#'>
                        <div class='enfer_creo'>
                            Amibiasis
                        </div>
                    </a>

                    <a href='#'>
                        <div class='enfer_creo'>
                            Angina de esfuerzo
                        </div>
                    </a>

                    <a href='#'>
                        <div class='enfer_creo'>
                            Apendicitis
                        </div>
                    </a>

                    <a href='#'>
                        <div class='enfer_creo'>
                            Artritis reumatoide
                        </div>
                    </a>

                    <a href='#'>
                        <div class='enfer_creo'>
                            Asma
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Bronquiolitis aguda
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Bronquitis aguda
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Brucelosis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Campylobacteriosis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Chickungunya
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Colecistitis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Colera
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Colon irritable
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Costocondritis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Crisis hipertensiva
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Cryptosporiodosis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Diabetes mellitus II
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Diseccion aortica
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Endocarditis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Enfermedad pulmonar obstructiva
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Enteritis por norovirus
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Enterocolitis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Escarlatina
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Exantema subito
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Faringoamigdalitis bacteriana
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Fiebre amarilla
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Fiebre manchada - Rickettsiosis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Fiebre por dengue
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Fiebre tifoidea
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Giardasis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Hepatitis A
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Infeccion por virus de Zika
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Influenza
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Meningitis meningococica
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Mononuclesosis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Neumonia
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Neuropatia diabetica
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Osteoartrosis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Otitis media aguda
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Pericarditis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Pielonefritis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Rinofaringitis viral
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Rinosinusitis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Rubeola
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Salmonelosis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Sarampion
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Shigelosis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Tifo endémico - Rickettsiosis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Tifo epidémico - Rickettsiosis
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Tosferina
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Tuberculosis pulmonar
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Ulcera peptica
                        </div>
                    </a>

                    <a href='#' id=''>
                        <div class='enfer_creo'>
                            Virus del oeste del nilo
                        </div>
                    </a>
                </div>
                <div class='otro_gradiente_2' onclick=${tengo}>
                        Tengo ...
                </div>
            </div>
        </div>
    </div>
</div>
`;
var a, e;

function creo() {
    a = document.getElementById('siento'),
    e = document.getElementById('creo');
    a.className = 'none';
    e.className = 'siento_container_2';
}

function tengo() {
    a.className = 'siento_container';
    e.className = 'none';
}

module.exports = user(cuenta);