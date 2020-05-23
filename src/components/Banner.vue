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
  max-width: 110ch !important;
  background-image: url("../assets/img/fuzzy-banner.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 200px;
}

@media (min-width: 500px) {
  .banner {
    margin: initial -20ch !important;
  }
}

@media print {
  .banner {
    display: none;
  }
}
</style>
