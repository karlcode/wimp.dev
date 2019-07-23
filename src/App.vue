<template>
  <div id="app">
    <header-bar />
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view :key="$route.fullPath" />
      </keep-alive>
    </transition>
    <footer-prismic/>
  </div>
</template>

<script>
import FooterPrismic from "./components/FooterPrismic.vue";
import HeaderBar from "./components/HeaderBar.vue";

export default {
  name: "App",
  components: {
    FooterPrismic,
    HeaderBar
  },
  data() {
    return {
      prevHeight: 0
    };
  }
};
</script>

<style>
@import "./assets/css/resetr.css";
@import "./assets/css/common.css";

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.6s;
  transition-property: opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>