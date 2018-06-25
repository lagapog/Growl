<template>
  <div class="content">
    <h2>Márgenes</h2>
    <p>Si alguna vez has trabajado en la parte visual de un proyecto, es probable que hayas tenido más de un dolor de cabeza con esta parte. Los márgenes, con <b>CSS Grid Layout</b> ya no serán más un problema.</p>
    <p>En el siguiente caso vamos a darle márgenes a nuestro <b>Grid container</b>. Este tendrá tres columnas y tres filas.</p>
    <div class="grilla2">
      <div v-for="n in 9" :key="n">{{n}}</div>
    </div>
    <p>Como se puede observar, tanto las columnas como las filas se encuentran juntas (sin ningún margen entre ellos). Primero, agregaremos margen de 20px a sus filas.</p>
    <gr-code-box>
      <span class="red">.</span>grid <span class="red">{</span><br>
        <span class="ml-2">grid-row-gap: 20px;</span><br>
      <span class="red">}</span>
    </gr-code-box>
    <p><b>Nota:</b> Los márgenes declarados son internos al <b>Grid container</b>.</p>
    <div class="grilla2 margin-row">
      <div v-for="n in 9" :key="n">{{n}}</div>
    </div>
    <p>Análogamente, se puede declarar los márgenes para las columnas. Ahora le daremos un espacido de 2<span class="red">rem</span>.</p>
    <gr-code-box>
      <span class="red">.</span>grid <span class="red">{</span><br>
        <span class="ml-2">grid-col-gap: 2rem;</span><br>
      <span class="red">}</span>
    </gr-code-box>
    <br>
    <div class="grilla2 margin-row margin-col">
      <div v-for="n in 9" :key="n">{{n}}</div>
    </div>
    <p>Para terminar, al igual que con las filas y columnas, los márgenes se pueden declarar en un sola línea y obtendríamos el mismo resultado. La única diferencia es que no requiere de una diagonal para separar los valores</p>
    <gr-code-box>
      <span class="red">.</span>grid <span class="red">{</span><br>
        <span class="ml-2">grid-gap: 20px 2rem;</span><br>
      <span class="red">}</span>
    </gr-code-box>
  </div>
</template>
<script>
import grCodeBox from '@/components/CodeBox.vue'

export default {
  name: 'leccion3',
  components: { grCodeBox }
}
</script>
<style>
  .grilla2{
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    height: 50vh;
    border: 2px solid #999;
  }
  .grilla2>*{
    border: 2px solid #999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .grilla2.margin-row {
    grid-row-gap: 20px;
  }
  .grilla2.margin-row.margin-col {
    grid-gap: 20px 2rem;
  }
</style>