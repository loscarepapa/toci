var yo = require('yo-yo');
var landing = require('../landing');

var signupForm = yo `<div class="columna">
      <div class="gradiente_borde">
        <div class="seccion">
          <div class="centrado">
            <br>
            <p class="titulo">Toci</p>
            <p class="iniciar">Registrate</p>

            <div class="inputs">
              <div class="centrado_inputs">
                <form>
                  <input type="text" placeholder="Nombre(s)" required>
                  <input type="text" name="" placeholder="Apellido Peterno" id="" required>
                  <input type="text" name="" id="" placeholder="Apellido Materno" required>
                  <input type="text" name="" id="" placeholder="Correo" required>
                  <input type="text" name="" id="" placeholder="Contraseña" required>
                  <br>
                  <br>
                  <input class="none" type="submit" id="entrar" value="" name="entrar">
                  <label for="entrar" class="enviar">Registrate</label>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="gradiente_borde_2">
        <div class="opcion_alterna">
          <p class="inline">¿Tienes cuenta?</p><a href="/signin" class="inline color_1">Ingresa</a>
        </div>
      </div>
    </div>`;

module.exports = landing(signupForm);
