<template>
  <div class="dark-footer">
    <div class='dark-footer__content'>
      <p>
        {{ copyright }}
      </p>
      <p>
        {{ madeWith }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dark-footer',
  data() {
    return {
      copyright: 'Copyright 2017, Stephane Rodet',
      madeWith: 'Built with Vue.js with care',
    };
  },
};
</script>

<style>
.dark-footer {
  position: absolute;
  left: 0;
  right: 0;
  background-color: #383838;
  height: 250px;
}

.dark-footer p {
  //color: #6b3ee0;
  color: #ccc;
  color: #D73BB8;
}

.dark-footer__content {
  max-width: 800px;
  margin: auto;
}
</style>
