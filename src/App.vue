<template>
  <div id="app">
    <gr-header/>
    <transition name="page-appear" mode="out-in">
      <router-view></router-view>
    </transition>
    <gr-footer/>
  </div>
</template>

<script>
import grHeader from '@/components/Header.vue'
import grFooter from '@/components/Footer.vue'

export default {
  name: 'app',
  components: { grHeader, grFooter }
}
</script>

<style>
body {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}
#app {
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr 50px;
  grid-template-columns: [inicio] 5% [contenido-start] 1fr [contenido-end] 5% [fin];
  align-items: center;
}
#app>* {
  grid-column: contenido-start / contenido-end;  
}
html {
  font-size: 16px;
  line-height: 22px;
}
@media (max-width: 992px) {
  html {
    font-size: 16.5px;
    line-height: 24px;
  }
}
@media (max-width: 768px) {
  html {
    font-size: 17px;
    line-height: 27px;
  }
}
p {
  text-align: justify;
  line-height: 1.2rem;
}
span.code {
  font-family: Monaco;
  background-color: #D7DADB;
  font-size: .96rem;
}
.page-appear-enter-active, .page-appear-leave-active {
  transition: all .3s;
}
.page-appear-enter, .page-appear-leave-to {
  opacity: 0;
}
.page-appear-enter-to, .page-appear-leave {
  opacity: 1;
}
.mb-0{margin-bottom: 0;}
.mb-2{margin-bottom: 2rem;}
.mt-0{margin-top: 0;}
.mt-2{margin-top: 2rem;}
.ml-2{margin-left: 2rem;}
.ml-4{margin-left: 4rem;}
.red {color: red;}
.enlace{cursor: pointer}
</style>
