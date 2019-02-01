var yo = require('yo-yo');

module.exports = function landing(box) {
    
    return yo`<div class="container">
        <div class="img"><img src="iphone.png" class="iphone" alt="" />
          <div class="screen">
            <div class="slide_show">
              <div class="pag1">
                <div class="toci">
                  <div class="logotipo">
                    <div class="toci_parte_1"></div>
                    <div class="toci_parte_2"></div>
                    <div class="toci_parte_3"></div>
                  </div>
                  <p class="titulo_iphone">Toci</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        ${box}
      </div>`
}
