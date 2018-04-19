<template>
  <div class="muestra-container">
    <div class="controls">
      <div class="controls-elements">
        <span>Número de elementos: {{elementsNumber}}</span>
        <gr-boton @click="addElement" color-class="add-btn">Agregar</gr-boton>
        <gr-boton @click="removeElement" color-class="remove-btn">Quitar</gr-boton>
      </div>
      <div class="controls-rows">
        <span>Número de filas: {{rowsNumber}}</span>
        <gr-boton @click="addRow" color-class="add-btn">Agregar</gr-boton>
        <gr-boton @click="removeRow" color-class="remove-btn">Quitar</gr-boton>
      </div>
      <div class="controls-cols">
        <span>Número de columnas: {{colsNumber}}</span>
        <gr-boton @click="addCol" color-class="add-btn">Agregar</gr-boton>
        <gr-boton @click="removeCol" color-class="remove-btn">Quitar</gr-boton>
      </div>
    </div>
    <div :style="gridTemplateStyle" class="grillaEjemplo">
      <div class="element" v-for="n in maxElements" :key="n">
        <transition name="element-appear">
          <div class="element-filled" v-show="n <= elementsNumber">
            {{ n }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import grBoton from '@/components/Boton.vue'

export default {
  name: 'grMuestra',
  components: { grBoton },
  data() {
    return {
      rowsNumber: 4,
      colsNumber: 4,
      elementsNumber: 5,
      maxNumber: 9,
    }
  },
  computed : {
    maxElements(){
      return this.rowsNumber * this.colsNumber
    },
    gridTemplateStyle() {
      return {
        gridTemplateRows: `repeat(${this.rowsNumber}, 1fr)`,
        gridTemplateColumns: `repeat(${this.colsNumber}, 1fr)`
      }
    }
  },
  methods: {
    addElement() {
      this.elementsNumber++
      this.adjustElementNumbers()
    },
    removeElement() {
      if(this.elementsNumber == 0) return
      this.elementsNumber--
    },
    addRow() {
      if(this.rowsNumber == this.maxNumber) return
      this.rowsNumber++
    },
    removeRow() {
      if(this.rowsNumber == 1) return
      this.rowsNumber--
      this.adjustElementNumbers()
    },
    addCol() {
      if(this.colsNumber == this.maxNumber) return
      this.colsNumber++
    },
    removeCol() {
      if(this.colsNumber == 1) return
      this.colsNumber--
      this.adjustElementNumbers()
    },
    adjustElementNumbers() {
      this.elementsNumber = this.elementsNumber > this.maxElements ? this.maxElements : this.elementsNumber
    }
  }
}
</script>
<style>
  .muestra-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 10px;
  }
  @media (max-width: 992px) {
    .muestra-container {
      grid-template: 200px 1fr / 1fr;
      grid-row-gap: 10px;
    }
    .controls {
      grid-template: 1fr / repeat(3, 1fr);
   }
  }
  @media (max-width: 768px) {
    .muestra-container {
      grid-template: 400px 1fr / 1fr;
    }
   .controls {
     grid-template: repeat(3, 1fr) / 1fr;
   }
  }
  .controls {
    display: grid;
    align-items: center;
    justify-items: center;
  }
  .controls>* {
    border: 2px solid #2c3e50;
    padding: 1rem;
    border-radius: .8rem;
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    align-items: center;
    justify-items: center;
  }
  .controls span {
    grid-column: 1 / -1;
  }
  .grillaEjemplo {
    width: 100%;
    height: 50vh;
    margin: 0 auto;
    border: 1px solid #2c3e50;
    display: grid;
  }
  .element {
    border: 1px solid #2c3e50;
  }
  .element-filled {
    width: cacl(100% - 2px);
    height: calc(100% - 2px);
    font-size: 1.4rem;
    background-color: #2c3e50;
    border: 1px solid #fff;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .element-appear-enter, .element-appear-leave-to{
    transform: scale(0);
  }
  .element-appear-enter-to, .element-appear-leave{
    transform: scale(1);
  }
  .element-appear-enter-active, .element-appear-leave-active {
    transition: transform .2s;
  }
</style>
