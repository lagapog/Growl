<template>
  <button :class="['btn', colorClass]" @click="onClick">
    <slot/>
  </button>
</template>
<script>
export default {
  name: 'grBoton',
  props: [ 'colorClass' ],
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>
<style scoped>
  .btn {
    background-color: #fff;
    font-size: 1.2rem;
    border-radius: 1rem;
    padding: .4rem 1.2rem;
    cursor: pointer;
    transition: all .15s;
  }
  .btn:active {
    animation: clickear .3s;
  }
  .btn.add-btn{
    border-color: #8ACC18;
    color: #8ACC18;
  }
  .btn.add-btn:hover {
    background-color: #8ACC18;
    color: #fff;
  }
  .btn.remove-btn{
    border-color: #E74C3C;
    color: #E74C3C;
  }
  .btn.remove-btn:hover {
    background-color: #E74C3C;
    color: #fff;
  }
  .btn.indice-btn{
    border-color: #2c3e50;
    color: #2c3e50;
  }
  .btn.indice-btn:hover {
    background-color: #2c3e50;
    color: #fff;
  }

  @keyframes clickear {
    0%{transform: scale(.9)}
    50%{transform: scale(1.05)}
    80%{transform: scale(.95)}
    100%{transform: scale(1)}
  }
</style>
