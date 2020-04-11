<template>
  <div class="dark-footer">
    <div class="dark-footer__content">
      <p>
        {{ copyright }}
      </p>
      <p>
        {{ madeWith }}
      </p>
      <!-- <p>
        <a :href='github.url'>{{ github.name }}</a>
      </p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "dark-footer",
  data() {
    return {
      copyright: "Copyright 2017, Stephane Rodet",
      madeWith: "Built with Vue.js with care",
      github: {
        name: "GitHub",
        url: "https://github.com/rodet/styleguide"
      }
    };
  }
};
</script>

<style>
.dark-footer {
  position: absolute;
  left: 0;
  right: 0;
  background-color: #383838;
  height: 250px;
  margin-top: 100px;
}

.dark-footer p {
  color: #d73bb8;
}

.dark-footer__content {
  max-width: 70ch;
  margin: auto;
}
</style>
