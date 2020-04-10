<template>
  <div class="navigation">
    <ul class="navigation__list">
      <li v-for="item in links" class="navigation__item" :key="item">
        <a class="navigation__link" :href="item.url">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      links: [
        { name: "Home", url: "/" },
        { name: "Style Guide", url: "/styleguide" },
        { name: "Blog", url: "https://blog.rodet.org" },
        { name: "Projects", url: "/projects" }
      ]
    };
  }
};
</script>

<style scoped>
.navigation {
  text-align: left;
  color: black;
}

.navigation__list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.navigation__item {
}

.navigation__link,
.navigation__link:hover,
.navigation__link:focus,
.navigation__link:active {
  text-decoration: none;
  color: #6b3ee0;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
