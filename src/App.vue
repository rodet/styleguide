<template>
  <div id="app" class="app">
    <banner></banner>
    <div class="content">
      <intro></intro>
      <navigation></navigation>
      <typography></typography>
      <colors></colors>
      <!-- <layout></layout> -->
    </div>
    <dark-footer></dark-footer>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Colors from "./components/Colors.vue";
import DarkFooter from "./components/DarkFooter.vue";
import Intro from "./components/Intro.vue";
// import Layout from "./components/Layout.vue";
import Navigation from "./components/Navigation.vue";
import Typography from "./components/Typography.vue";

export default {
  name: "app",
  components: {
    Banner,
    Colors,
    DarkFooter,
    Intro,
    // Layout,
    Navigation,
    Typography
  }
};
</script>

<style>
@import "assets/styles/utils.css";
</style>
