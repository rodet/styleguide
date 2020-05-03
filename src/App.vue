<template>
  <div id="app" class="app">
    <div class="banner"></div>
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
import Colors from "./components/Colors.vue";
import DarkFooter from "./components/DarkFooter.vue";
import Intro from "./components/Intro.vue";
// import Layout from "./components/Layout.vue";
import Navigation from "./components/Navigation.vue";
import Typography from "./components/Typography.vue";

export default {
  name: "app",
  components: {
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

.app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  line-height: 1.5em;
  text-align: center;
  margin: auto;
  margin-top: 60px;
  max-width: 70ch;
  min-height: 100%;
  margin-bottom: -250px;
}

.banner {
  margin: initial -20ch !important;
  max-width: 110ch !important;
  background-image: url("./assets/img/fuzzy-banner.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 200px;
}

.content {
  min-height: calc(100vh - 310px);
}

.section {
  padding: 2.369em;
  margin: 2.369em 0;
}
</style>
