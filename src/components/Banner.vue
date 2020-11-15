<template>
  <div class="banner"></div>
</template>

<script>
export default {
  name: "banner"
};
</script>

<style>
.banner {
  margin: -1em;
  max-width: 40rem;
  background-image: url("../assets/img/fuzzy-banner.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 200px;
  max-height: 400px;
}

@media (min-width: 40rem) {
  .banner {
    max-width: 60rem;
    margin: 0 calc(20rem - 50vw);
  }
}

@media (min-width: 60rem) {
  .banner {
    margin: 0 -10rem;
    height: 20vw;
  }
}

@media print {
  .banner {
    display: none;
  }
}
</style>
