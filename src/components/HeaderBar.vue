<template>
  <nav class="header">
    <router-link to="./">
    <h2>wimp.dev</h2>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<style scoped>
.header {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  border-top: 1px solid #DADADA;
}
.logo {
  width: 100px;
}
</style>
