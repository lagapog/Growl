<template>
  <div class="content">
    <h2>Áreas</h2>
    <p>Al momento de ir agregando elementos dentro de nuestro <b>Grid container</b>, este se pocisionará en la siguiente <b>Grid cell</b> disponible. Podemos cambiar este comportamiento para darle un área específica a cada elemento, para esto sirve los <b>Grid areas</b>.</p>
    <p>Vamos a crear un contenedor especificando las áreas que queremos usar de la siguiente manera:</p>
    <gr-code-box>
      <span class="red">.</span>grid <span class="red">{</span><br>
        <span class="ml-2">display: grid;</span><br>
        <span class="ml-2">height: 500px;</span><br>
        <span class="ml-2">grid-template-rows: 50px 1fr 30px;</span><br>
        <span class="ml-2">grid-template-columns: 150px 1fr;</span><br>
        <span class="ml-2">grid-template-areas:</span><br>
        <span class="tab">"head head"</span><br>
        <span class="tab">"nav  main"</span><br>
        <span class="tab">"foot  foot";</span><br>
      <span class="red">}</span>
    </gr-code-box>
    <p>Como se observa, nuestro contenedor tiene tres filas (un header de 50px, un footer de 30px y otra fila con el espacio restante) y dos coumnas(un espacio de 150px para el navegador y el resto para el contenido principal). Ahora con la propiedad <span class="code">grid-template-areas</span> hemos definido cuáles serán estas áreas, cada palabra representa un <b>Grid cell</b>. Para poder usarlas tan solo basta con indicarle al <b>Grid item</b> en qué area tendrá que posicionarse</p>
    <gr-code-box>
      <span class="red">.</span>header <span class="red">{</span>
        grid-area: head;
      <span class="red">}</span><br>
      <span class="red">.</span>nav <span class="red">{</span>
        grid-area: nav;
      <span class="red">}</span><br>
      <span class="red">.</span>content <span class="red">{</span>
        grid-area: main;
      <span class="red">}</span><br>
      <span class="red">.</span>footer <span class="red">{</span>
        grid-area: foot;
      <span class="red">}</span>
    </gr-code-box>
    <p><b>Nota:</b> Lás áreas pueden ser definidas con cualquier nombre, pero es una buena práctica que indiquen qué parte de nuestra maqueta está representando.</p>
  </div>
</template>
<script>
import grCodeBox from '@/components/CodeBox.vue'

export default {
  name: 'leccion5',
  components: { grCodeBox }
}
</script>
<style>
.tab{margin-left: 5rem;}
</style>