<template>
  <nav class="header">
    <router-link to="./">
      <h2>wimp.dev</h2>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "HeaderBar"
};
</script>

<style scoped>
.header {
  z-index: 999;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);  
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
}
</style>
