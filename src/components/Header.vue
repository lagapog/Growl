<template>
  <div class="header">
    <router-link class="header-link" to="/acerca">ACERCA</router-link>
    <router-link class="header-link" to="/" exact>INICIO</router-link>
    <router-link class="header-link" to="/tutorial">TUTORIAL</router-link>
  </div>
</template>
<script>
export default {
  name: 'grHeader'
}
</script>
<style>
  .header{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
  .header-link {
    font-size: 1.3rem;
    color: #2c3e50;
    cursor: pointer;
    text-decoration: none;
    position: relative;
  }
  .header-link:after {
    content: '';
    width: 100%;
    height: .15rem;
    background-color: #2c3e50;
    position: absolute;
    bottom: -5px;
    left: 0;
    transform: scale(0);
    transition: transform .3s;
  }
  .header-link:hover:after {
    transform: scale(1);
  }
  .router-link-active:after{
    transform: scale(1);
  }
</style>
