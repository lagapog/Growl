<template>
  <div :class="['sidebar', { 'show': isShown }]">
    <div class="shadow-desktop" :style="{top: place + 'px'}"></div>
    <div class="shadow-tablet" :style="{top: `calc(${placeMobil} * 100vh / 7)`}"></div>
    <router-link 
      class="sidebar-link"
      v-for="n in 7"
      :key="n"
      :to="`/tutorial/leccion${n}`">
      Lección {{ n }}: {{lessons[n-1]}}
    </router-link>
    <div class="close" @click="close">&times;</div>
  </div>
</template>
<script>
export default {
  name: 'grSidebar',
  props: ['isShown'],
  data() {
    return {
      lessons: [
        'Introducción',
        'Filas y Columnas',
        'Márgenes',
        'Nuevas Herramientas',
        'Áreas',
        'Lineas',
        'Grid implícito'
      ],
      place: 0,
      placeMobil: 0
    }
  },
  created() {
    const num = Number(this.$route.params.leccion.substr(-1))
    this.placeMobil = num - 1
    this.place = (num - 1)*80
  },
  methods: {
    close() {
      this.$emit('closeIndex')
    }
  },
  watch: {
    $route(to, from) {
      let num = Number(to.params.leccion.substr(-1))
      this.placeMobil = num - 1
      this.place = (num - 1)*80
      this.$emit('closeIndex')
    }
  }
}
</script>
<style scoped>
  .sidebar {
    height: 560px;
    border: 2px solid #2c3e50;
    grid-column: nav-start / nav-end;
    display: grid;
    grid-template-columns: 10px [inicio] 1fr;
    grid-template-rows: repeat(7, 1fr);
    align-items: center;
    position: relative;
  }
  .sidebar .shadow-tablet {
    display: none;
  }
  .sidebar .shadow-desktop {
    content: '';
    z-index: -1;
    height: 80px;
    width: 100%;
    position: absolute;
    transition: top .3s;
    left: 0;
    background-color: #2c3e50;
  }
  .close {
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid red;
    color: red;
    display: none;
    position: absolute;
    bottom: 2rem;
    right: 1rem;
    z-index: 10;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    .sidebar .shadow-desktop {
      display: none;
    }
    .sidebar {
      height: 100vh;
      background-color: #2c3e50;
      text-align: center;
      border-radius: 0;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      transition: transform .3s;
      transform: translateY(-1000px)
    }
    .sidebar.show {
      transform: translateY(0)
    }
    .sidebar.show .close{
      display: block;
    }
    .sidebar-link{
      padding-bottom: 1rem;
      padding-top: 1rem;
      color: #fff !important;
    } 
    .router-link-active {
      color: #2c3e50 !important;
    }
    .sidebar .shadow-tablet {
      display: block;
      z-index: -1;
      height: calc(100vh / 7);
      width: calc(100% + 2px);
      position: absolute;
      transition: top .3s;
      left: 0;
      background-color: #fff;
      top: calc(200vh / 7);
    }
  }
  .sidebar-link{
    grid-column-start: inicio;
    text-decoration: none;
    color: #2c3e50;
    font-weight: bold;
    transition: color .3s;
  }
  .router-link-active{
    color: #fff;
  }
</style>
