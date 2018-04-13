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
  align-items: center;
}
html {
  font-size: 16px;
}
@media (max-width: 992px) {
  html {
    font-size: 15px;
  }
}
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
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
</style>
