<template>
  <p class="inline">
    <span class="red">{{abrir}}</span><slot/><span class="red">{{cerrar}}</span>
  </p>
</template>
<script>
export default {
  name: 'grEtiqueta',
  props: ['type'],
  data(){
    return {
      abrir: this.type=='apertura'?'<':'</',
      cerrar: '>'
    }
  }
}
</script>
<style>
.red{
  color: red;
}
.inline {
  display: inline;
}
</style>
