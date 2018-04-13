<template>
  <div class="content">
    <h2>Filas y columnas</h2>
    <p>Ya hemos visto como declarar nuestro <b>Grid container</b>. Ahora aprenderemos como declarar las filas y columnas que tendrá este contenedor. Siguiendo con el ejemplo anterior, podemos realizarlo de la siguiente manera</p>
    <gr-code-box>
      <span class="red">.</span>padre <span class="red">{</span> grid-template-rows: 30px 30px 30px; <span class="red">}</span>
    </gr-code-box>
    <p>Ahora nuestro <b>Grid Container</b> cuenta con tres filas de 30 píxeles de alto cada una. Para el caso de las columnas es similar, serán dos columnas de 25 píxeles de ancho cada uno.</p>
    <gr-code-box>
      <span class="red">.</span>padre <span class="red">{</span> grid-template-columns: 25px 25px; <span class="red">}</span>
    </gr-code-box>
    <p>Ya tenemos un <b>Grid Container</b> de 3x2 (tres filas y dos columnas). También podemos declarar ambos en una sola línea usando la propiedad <span class="code">grid-template</span>, que recibe las filas y columnas separadas con una barra <span class="code"><em>filas</em> / <em>columnas</em></span>.</p>
    <gr-code-box>
      <span class="red">.</span>padre <span class="red">{</span> grid-template: 30px 30px 30px / 25px 25px; <span class="red">}</span>
    </gr-code-box>
    <p>Al momento de declarar las filas y columnas no solo podemos usar los píxeles como unidad de medida, sino las demás medidas que ya hemos usado en CSS: <b>vh, vw, %, em, rem</b>, etcétera.</p>
    <gr-code-box>
      <span class="red">.</span>padre <span class="red">{</span> grid-template: 4rem 6pc 15vh / 50% 50%; <span class="red">}</span>
    </gr-code-box>
    <p>En futuras lecciones veremos la unidad de medida <b>fr</b> que nos va a ser de mucha utilidad.</p>
  </div>
</template>
<script>
import grCodeBox from '@/components/CodeBox.vue'

export default {
  name: 'leccion2',
  components: { grCodeBox }
}
</script>
<style>
  .red {color: red;}
</style>