<template>
  <div class="parrafo">
    <slot name="titulo" />
    <slot name="contenido" />
  </div>
</template>
<script>
export default {
  name: 'grParrafo'  
}
</script>
<style scoped>
  .parrafo{
    border: .15rem solid #2c3e50;
    border-radius: .8rem;
    padding: .5rem 1rem;
  }
</style>
