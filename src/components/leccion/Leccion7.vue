<template>
  <div class="content">
    <h2>Grid Implícito</h2>
    <p>Para acabar con este pequeño tutorial, veremos un poco sobre el grid implícito y el grid explícito.</p>
    <p>El grid explícito es aquel que nosotros definimos con las propiedades que ya hemos visto (grid-template-rows, grid-template-columns y grid-template-areas). Aunque las filas y columnas estén definidas, no hay un límite para los elementos que pueda contener un <b>Grid container</b>. En otras palabras, si creamos un contenedor para seis <b>Grid items</b> y llegamos a tener nueve, habrá tres <b>Grid items</b> fuera de nuestro contenedor que declaramos.</p>
    <p>Es aquí donde entra a tallar el grid implícito. Este grid se genera automáticamente simpre que halla elementos que salgan de nuestro grid explícito. A pesar de que este grid no lo generamos nosotros, aún tenemos control sobre este: podemos especificar cómo queremos que se comporte si en algún momento nuestro grid explícito se quedara sin espacio.</p>
    <h3 class="mt-3 mb-0">grid-auto-rows & grid-auto-columns</h3>
    <p class="mt-0">Estas dos propiedades sirven para declarar el tamaño de las nues filas o las nuevas columnas. Ejemplo, si quiero que las nuevas filas de mi grid implícito midan 150px, lo haría así:</p>
    <gr-code-box>
      <span class="red">.</span>grilla <span class="red">{</span>
      grid-auto-rows: 150px;
      <span class="red">}</span>
    </gr-code-box>
    <h3 class="mt-3 mb-0">grid-auto-flows</h3>
    <p class="mt-0">Esta propiedad permite definir si ubicamos los <b>Grid items</b> extras en nuevas columnas o en nuevas filas. Por defecto tienes el valor de "row". Si en algún caso quieres usar las columnas, puedes declarar: </p>
    <gr-code-box>
      <span class="red">.</span>grilla <span class="red">{</span>
      grid-auto-flows: column;
      <span class="red">}</span>
    </gr-code-box>
    <p>Estas leeciones pueden servirte como introducción al gran mundo de <b>CSS Grid Layout</b>. Espero que te haya servido y no olvides nunca dejar de practicar.</p>
  </div>
</template>
<script>
import grCodeBox from '@/components/CodeBox.vue'

export default {
  name: 'leccion7',
  components: { grCodeBox }
}
</script>
<style>
.mb-0{margin-bottom: 0;}
.mt-0{margin-top: 0;}
.mt-3{margin-top: 3rem;}
.ml-2{margin-left: 2rem;}
</style>