<template>
  <nav class="header">
    <router-link to="/">
      <div class="title">wimp.dev</div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "HeaderBar"
};
</script>

<style scoped>
@media (max-width: 767px) {
  .header {
    padding: 0 20px;
  }
}
.header {
  z-index: 999;
  background: rgba(255, 255, 255, 1);
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  text-align: left;
  transition: 1s all;
  color: black;
}

.title {
  max-width: 700px;
  margin: auto;

  font-size: 30px;
  font-family: "Lato", sans-serif;
  font-weight: 900;
}

.header:hover {
  color: mediumpurple;
}
</style>
