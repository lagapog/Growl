<template>
  <div class="container">
    <gr-boton @click="showIndex" class="indice" color-class="indice-btn">
      Indice
    </gr-boton>
    <gr-sidebar :isShown="viewIndex" @closeIndex="closeIndex"/>
    <transition name="leccion-appear" mode="out-in">
      <component :is="view"></component>
    </transition>
  </div>  
</template>
<script>
import grSidebar from '@/components/Sidebar.vue'
import grBoton from '@/components/Boton.vue'
import leccion1 from '@/components/leccion/Leccion1.vue'
import leccion2 from '@/components/leccion/Leccion2.vue'
import leccion3 from '@/components/leccion/Leccion3.vue'
import leccion4 from '@/components/leccion/Leccion4.vue'
import leccion5 from '@/components/leccion/Leccion5.vue'
import leccion6 from '@/components/leccion/Leccion6.vue'
import leccion7 from '@/components/leccion/Leccion7.vue'

export default {
  components: { 
    grSidebar,
    grBoton,
    leccion1,
    leccion2,
    leccion3,
    leccion4,
    leccion5,
    leccion6,
    leccion7
  },
  data() {
    return {
      view: 'leccion1',
      viewIndex: false,
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.setView(to.params.leccion)
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.setView(to.params.leccion)
    next()
  },
  methods: {
    setView (view) {
      this.view = view
    },
    showIndex() {
      this.viewIndex = !this.viewIndex
    },
    closeIndex() {
      this.viewIndex = false
    }
  }
}
</script>
<style scoped>
  button.indice {
    display: none
  }
  .container {
    height: 100%;
    display: grid;
    grid-template-columns: [nav-start] 250px [nav-end] 40px [contenido-start] 1fr [contenido-end];
  }
  @media (max-width: 992px) {
    .container {
      grid-template-rows: 50px 1fr;
      grid-template-columns: [contenido-start] 1fr [contenido-end];
    }
    button.indice {
      display: block;
      grid-column: contenido-start / contenido-end;
      align-self: center;
      justify-self: center;
    }
  }
  .content {
    grid-column: contenido-start / contenido-end;
  }
  .leccion-appear-enter-active, .leccion-appear-leave-active {
    transition: all .3s;
  }
  .leccion-appear-enter, .leccion-appear-leave-to {
    opacity: 0;
  }
  .leccion-appear-enter-to, .leccion-appear-leave {
    opacity: 1;
  }
</style>
