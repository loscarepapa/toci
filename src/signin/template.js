var yo = require('yo-yo');
var landing = require('../landing');

var signinForm = yo `<div class="columna">
      <div class="gradiente_borde">
        <div class="seccion">
          <div class="centrado">
            <br>
            <p class="titulo">Toci</p>
            <p class="iniciar">Ingresa</p>

            <div class="inputs">
              <div class="centrado_inputs2">
                <form>
                <p class="entrar">Correo</p>
                  <input type="text" required>
                <p class="entrar">Contraseña</p>
                  <input type="password" name="" id="" required>
                  <br>
                  <br>
                  <input class="none" type="submit" id="entrar" value="" name="entrar">
                  <label for="entrar" class="enviar2">Ingresar</label>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="gradiente_borde_2">
        <div class="opcion_alterna">
          <p class="inline">¿No tienes cuenta?</p><a href="/signup" class="inline color_1">Registrate gratis</a>
        </div>
      </div>
    </div>`;

module.exports = landing(signinForm);
