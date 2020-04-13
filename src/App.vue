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
  color: #2c3e50;
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

p {
  text-align: left;
}

h1,
h2,
h3,
h4 {
  /* Try using Muli from Google for Windows after Avenir */
  font-family: Avenir, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #2e3673;
  margin-top: 1.5em;
  line-height: initial;
}

h4 {
  font-size: 1.333em;
}

h3 {
  font-size: 1.777em;
}

h2 {
  font-size: 2.369em;
}

h1 {
  font-size: 4.208em;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #428bca;
}
</style>
