<template>
  <div class="content">
    <h2>Líneas</h2>
    <p>Al momento de definir el espacio de cada <b>Grid item</b> también puedes usar las <b>Grid lines</b>. Para poder hacerlo, debes de indicar en qué linea empezará y en qué linea terminará cada elemento.</p>
    <p>Las <b>Gride lines</b> horizontales se cuentan de arriba hacia abajo y los verticales, de izquierda a derecha.</p>
    <p>En este caso vamos a posicinar un elemento con clase "hijo" dentro de nuestro <b>Grid container</b> de clase "grilla".</p>
    <gr-code-box>
      <gr-etiqueta type="apertura">div class="grilla"</gr-etiqueta><br/>
      <gr-etiqueta type="apertura" class="ml-2">div class="hijo"</gr-etiqueta>
        <span>Elemento</span>
      <gr-etiqueta type="clausura">div</gr-etiqueta><br/>
      <gr-etiqueta type="clausura">div</gr-etiqueta>
    </gr-code-box>
    <p>Vamos a declarar nuestro <b>Grid container</b> con 4 filas y 5 columnas del mismo tamaño, y le daremos algunos estilos a nuestro elemeto de clase "hijo".</p>
    <gr-code-box>
      <span class="red">.</span>grilla <span class="red">{</span><br>
      <span class="ml-2">display: grid;</span><br>
      <span class="ml-2">width: 100%;</span><br>
      <span class="ml-2">height: 400px;</span><br>
      <span class="ml-2">border: 2px solid #2c3e50;</span><br>
      <span class="ml-2">grid-template-rows: repeat(4, 1fr);</span><br>
      <span class="ml-2">grid-template-columns: repeat(5, 1fr);</span><br>
      <span class="red">}</span><br>
      <span class="red">.</span>hijo <span class="red">{</span><br>
      <span class="ml-2">color: #fff;</span><br>
      <span class="ml-2">background-color: #2c3e50;</span><br>
      <span class="red">}</span>
    </gr-code-box>
    <div class="contar-col mt-2">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div class="cinco-seis">
        <span>5</span>
        <span>6</span>
      </div>
    </div>
    <div class="comodin">
      <div class="contar-row">
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div class="grilla3">
        <div class="hijo">Elemento</div>
        <div class="element" v-for="n in 19" :key="n"></div>
      </div>
    </div>
    <p>Como podemos observar, nuestro elemento se posiciona en el primer <b>Grid cell</b> disponible. Para poder cambiar su ubicación, podemos usar las <b>Grid lines</b> referenciando el inicio y fin. En este caso queremos mover el <b>Grid item</b> en medio de nuestro <b>Grid container</b>.</p>
    <p>Nuestro <b>Grid container</b> cuenta con cinco <b>Grid lines</b> horizontales, para que el <b>Grid item</b> ocupe la segunda y tercera fila tiene que empezar en la linea número 2 y terminar en la línea número 4. De manera similar, si vamos a ubicar el elemento en las tres columnas centrales, este tiene que empezar en la línea vertical número 2 y terminar en la 5. Ahora traducimos esto a código CSS</p>
    <gr-code-box>
      <span class="red">.</span>hijo <span class="red">{</span><br>
      <span class="ml-2">grid-row-start: 2;</span><br>
      <span class="ml-2">grid-row-end: 4;</span><br>
      <span class="ml-2">grid-column-start: 2;</span><br>
      <span class="ml-2">grid-column-end: 5;</span><br>
      <span class="red">}</span><br>
      <span class="coment">/* o también de una manera resumida */</span><br>
      <span class="red">.</span>hijo <span class="red">{</span><br>
      <span class="ml-2">grid-row: 2 / 4;</span><br>
      <span class="ml-2">grid-column: 2 / 5;</span><br>
      <span class="red">}</span><br>
      <span class="coment">/* o una manera mucho más resumida */</span><br>
      <span class="red">.</span>hijo <span class="red">{</span><br>
      <span class="ml-2">grid-area: 2 / 2 / 4 / 5;</span><br>
      <span class="red">}</span>
    </gr-code-box>
    <div class="grilla3 mt-2">
      <div class="hijo reubicado">Elemento</div>
      <div class="element" v-for="n in 14" :key="n"></div>
    </div>
    <p><b>Nota:</b> No olvidar: un <b>Grid item</b> puede ocupar más de un <b>Grid cell</b>.</p>
  </div>
</template>
<script>
import grCodeBox from '@/components/CodeBox.vue'
import grEtiqueta from '@/components/Etiqueta.vue'

export default {
  name: 'leccion6',
  components: { grCodeBox, grEtiqueta },
}
</script>
<style>
.ml-2{margin-left: 2rem;}
.mt-2{margin-top: 2rem;}
.coment{color:#777}
.grilla3 {
  display: grid;
  height: 50vh;
  width: 100%;
  border: 1px solid #2c3e50;
  grid-template: repeat(4, 1fr) / repeat(5, 1fr);
}
.hijo {
  color: #fff;
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
}
.comodin {
  display: flex;
  width: 100%;
}
.contar-col {
  display: grid;
  grid-template: 20px / repeat(5, 1fr);
}
.contar-row {
  display: grid;
  grid-template: repeat(4, 1fr) / 13px;
  align-items: flex-end;
}
.cinco-seis {
  display: flex;
  justify-content: space-between;
}
.reubicado {
  grid-row: 2 / 4;
  grid-column: 2/ 5;
}
.element {
  border: 1px solid #2c3e50;
}
</style>