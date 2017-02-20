<template>
  <div id="app">
    <div class='banner'></div>
    <intro></intro>
    <typography></typography>
    <dark-footer></dark-footer>
    <!-- TODO Colours -->
  </div>
</template>

<script>
import DarkFooter from './components/DarkFooter.vue';
import Intro from './components/Intro.vue';
import Navigation from './components/Navigation.vue';
import Typography from './components/Typography.vue';

export default {
  name: 'app',
  components: {
    DarkFooter,
    Intro,
    Navigation,
    Typography,
  },
};
</script>

<style>
#app {
  font-family: -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              Roboto,
              Helvetica,
              Arial,
              sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  line-height: 1.5em;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  margin-top: 60px;
  max-width: 800px;
}

.banner {
  background-image: url('./assets/fuzzy-banner.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 200px;
}

p {
  text-align: left;
}

h1,
h2,
h3,
h4 {
  /* Try using Muli from Google for Windows after Avenir */
  font-family: Avenir, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: #2e3673;
  margin-top: 1.5em;
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
  font-size: 3.157em;
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
