<template>
  <div class="codebox">
    <p>
      <slot/>
    </p>
  </div>
</template>
<script>
export default {
  name: 'CodeBox'
}
</script>
<style>
  .codebox {
    font-family: Monaco;
    color: #34495E;
    box-shadow: inset .3rem 0px #34495E;
    background-color: #D7DADB;
    /* min-height: 20px; */
    width: 100%;
    display: grid;
    grid-template: 1% [inicio] 1fr [fin] 1% / calc(2% + .3rem) [inicio] 1fr [fin] 2%;
  }
  .codebox>p {
    grid-row: inicio / fin;
    grid-column: inicio / fin;
  }
</style>
