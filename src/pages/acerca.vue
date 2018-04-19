<template>
  <div class="container">
    <gr-parrafo>
      <h2 slot="titulo">¿Qué es Growl?</h2>
      <p slot="contenido">
        <b>Growl</b> es un pequeño proyecto personal / tutorial, en el cuál muestro los conceptos básicos de <b>CSS Grid Layout</b>. Puedes ver más de mi trabajo en mi portafolio personal <a class="text-muted" href="https://luisagapito.com" target="_blank"><b>dando click aquí</b></a>.
      </p>
    </gr-parrafo>
    <gr-parrafo>
      <h2 slot="titulo">¿Qué es CSS Grid Layout?</h2>
      <p slot="contenido">
        <b>CSS Grid Layout</b> es un módulo que css nos ofrece para poder maquetar nuestro
        contenido de una manera muy sencilla. 
      </p>
    </gr-parrafo>
    <gr-parrafo>
      <h2 slot="titulo">¿Cómo funciona CSS Grid Layout?</h2>
      <p slot="contenido">
        <b>CSS Grid Layout</b> nos ofrece un modelo de grillas que contiene
        filas y columnas. Este sistema de dos dimensiones (vertical y horizontal) 
        nos ayuda a poder distribuir cada elemento dentro de nuestra página.
      </p>
    </gr-parrafo>
    <div>
      <h2>¡Pruébalo tu mismo!</h2>
      <p>
        La siguiente es una grilla de muestra donde podrás darte una idea de
        como trabaja <b>CSS Grid Layout</b>. Puedes jugar con el número de columnas, 
        filas y elementos. Si te interesa y quieres aprender a usar <b>CSS Grid Layout</b>
        puedes entrar a 
        <router-link to="/tutorial" class="text-muted">
          <b>este sencillo Tutorial</b>
        </router-link>.
      </p>
    </div>
    <gr-muestra class="mb-3"/>
  </div>  
</template>
<script>
import grParrafo from '@/components/Parrafo.vue'
import grMuestra from '@/components/Muestra.vue'

export default {
  components: { grParrafo, grMuestra }
}
</script>
<style scoped>
  .mb-3{margin-bottom: 3rem;}
  .container {
    display: grid;
    grid-row-gap: 1.5rem;
  }
  .text-muted {
    color: #2980B9;
    text-decoration: none;
  }
</style>
