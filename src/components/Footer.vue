<template>
  <div class="footer">
    <span>Growl by <a class="text-muted" href="https://luisagapito.com" target="_blank"><b>Luis Agapito</b></a>. {{year}}</span>
  </div>
</template>
<script>
export default {
  name: 'grFooter',
  computed: {
    year() {
      const now = new Date()
      return now.getFullYear();
    }
  }
}
</script>
<style>
  .footer {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-muted {
    color: #2c3e50;
    text-decoration: none;
  }
</style>
