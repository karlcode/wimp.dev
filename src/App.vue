<template>
  <div id="app">
    <header-bar/>
         <transition
        name="fade"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
    <router-view/>
        </transition>
    <footer-prismic/>
  </div>
</template>

<script>
import FooterPrismic from './components/FooterPrismic.vue'
import HeaderBar from './components/HeaderBar.vue'

export default {
  name: 'App',
  components: {
    FooterPrismic,
    HeaderBar
  },
  data() {
    return {
      prevHeight: 0,
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
}
</script>

<style>
@import "./assets/css/resetr.css";
@import "./assets/css/common.css";

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>