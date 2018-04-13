<template>
  <div class="content">
    <h2>Introducción</h2>
    <p>Para empezar vamos a establecer algunos <b>conceptos básicos</b> que servirán de soporte. Es recomendable no pasar a futuras lecciones si no has entendido cada uno de los siguientes conceptos.</p>
    <p><b>NOTA:</b> se requiere conocimientos básicos en CSS 3 y HTML 5</p>
    <h3 class="mt-3 mb-0">Grid container</h3>
    <p class="mt-0">Es el elemento que servirá como contenedor. Podemos establecer un elemento como <b>Grid Container</b> declarando <span class="code">display: grid</span>. Una vez hecho esto, todos los <b>hijos directos</b> del elemento se convertirán en Grid items.</p>
    <h3 class="mt-3 mb-0">Grid item</h3>
    <p class="mt-0">Los Grid items son cada uno de los <b>hijos directos</b> de nuestro Grid container. Estos elementos son los que se irán acomodando dentro de nuestra grilla</p>
    <p>Ahora veamos el siguiente ejemplo, un div con clase "padre" nos servirá como nuestro Grid container</p>
    <gr-code-box>
      <gr-etiqueta type="apertura">div class="padre"</gr-etiqueta><br/>
      <gr-etiqueta type="apertura" class="ml-2">div</gr-etiqueta>
        <span>Uno</span>
      <gr-etiqueta type="clausura">div</gr-etiqueta><br/>
      <gr-etiqueta type="apertura" class="ml-2">div</gr-etiqueta>
        <span>Dos</span>
      <gr-etiqueta type="clausura">div</gr-etiqueta><br/>
      <gr-etiqueta type="apertura" class="ml-2">div</gr-etiqueta>
        <span>Tres</span>
      <gr-etiqueta type="clausura">div</gr-etiqueta><br/>
      <gr-etiqueta type="apertura" class="ml-2">div</gr-etiqueta>
        <span>Cuatro</span>
      <gr-etiqueta type="clausura">div</gr-etiqueta><br/>
      <gr-etiqueta type="apertura" class="ml-2">div</gr-etiqueta>
        <span>Cinco</span>
      <gr-etiqueta type="clausura">div</gr-etiqueta><br/>
      <gr-etiqueta type="clausura">div</gr-etiqueta>
    </gr-code-box>
    <p>Declaramos el display de la clase "padre".</p>
    <gr-code-box>
      <span class="red">.</span>padre <span class="red">{</span> display: grid; <span class="red">}</span>
    </gr-code-box>
    <p>Asi, nuestro Grid container será el elemento de clase "padre", y cada uno de sus hijos directos(Uno, Dos, Tres, etc.) serán los Grid Items</p>
    <h3 class="mt-3 mb-0">Grid lines</h3>
    <p class="mt-0">Son las líneas que separan a cada columna y a cada fila</p>
    <h3 class="mt-3 mb-0">Grid track</h3>
    <p class="mt-0">Son los espacios entre dos Grid lines adyacentes. Las Grid lines verticales limitan los espacios llamadas columnas, mientras que las horizontales, las filas.</p>
    <h3 class="mt-3 mb-0">Grid cell</h3>
    <p class="mt-0">Es el espacio donde se intercepta una columna con una fila</p>
    <h3 class="mt-3 mb-0">Grid area</h3>
    <p class="mt-0">Un Grid Area es el espacio limitado por cuatro Grid lines (dos verticales y dos horizontales). Este puede ocupar desde un Grid cell hasta el Grid container completo.</p>
    <p>En el siguiente <b>Grid container</b> de muestra se puede identificar cada componente que se ha mencionado. Escoge una opción y a ver si aciertas. ¡Éxitos!</p>
    <select v-model="selected" class="select">
      <option disabled value="">Escoja un opción</option>
      <option>Fila</option>
      <option>Columna</option>
      <option>Grid cell</option>
      <option>Grid line</option>
      <option>Grid area</option>
    </select>
    <div :class="classGrid">
      <div :class="classSelected" v-for="n in 20" :key="n">{{n}}</div>
    </div>
  </div>
</template>
<script>
import grCodeBox from '@/components/CodeBox.vue'
import grEtiqueta from '@/components/Etiqueta.vue'

export default {
  name: 'leccion1',
  components: { grCodeBox, grEtiqueta },
  data() {
    return {
      selected: '',
    }
  },
  computed: {
    classSelected() {
      switch (this.selected) {
        case 'Fila':
          return 'row'
        case 'Columna':
          return 'col'
        case 'Grid cell':
          return 'cell'
        case 'Grid line':
          return 'line'
        case 'Grid area':
          return 'area'
        default:
          return ''
      }
    },
    classGrid() {
      if (this.selected == 'Grid line') {
        return 'grilla1 with-lines'
      }else {
        return 'grilla1'
      }
    }
  }
}
</script>
<style scoped>
  .mb-0{margin-bottom: 0;}
  .mt-0{margin-top: 0;}
  .mt-3{margin-top: 3rem;}
  .ml-2{margin-left: 2rem;}
  .red {color: red;}
  .enlace{cursor: pointer}
  .select{
    font-size: 1rem;
  }
  .grilla1{
    margin: 2rem auto;
    display: grid;
    grid-template: repeat(5, 1fr) / repeat(4, 1fr);
    height: 50vh;
    border: 2px solid #999;
  }
  .grilla1.with-lines{
    border-color: #2c3e50;
  }
  .grilla1>*{
    border: 2px solid #999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .line {
    border-color: #2c3e50;
  }
  .row:nth-of-type(5),
  .row:nth-of-type(6),
  .row:nth-of-type(7),
  .row:nth-of-type(8) {
    background-color: #2c3e50;
    color: #fff;
  }
  .col:nth-of-type(3),
  .col:nth-of-type(7),
  .col:nth-of-type(11),
  .col:nth-of-type(15),
  .col:nth-of-type(19) {
    background-color: #2c3e50;
    color: #fff;
  }
  .cell:nth-of-type(7) {
    background-color: #2c3e50;
    color: #fff;
  }
  .area:nth-of-type(13),
  .area:nth-of-type(14),
  .area:nth-of-type(17),
  .area:nth-of-type(18) {
    background-color: #2c3e50;
    color: #fff;
  }
</style>