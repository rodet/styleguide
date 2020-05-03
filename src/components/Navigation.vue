<template>
  <section>
    <h2>Navigation</h2>
    <p>
      Navigation should be clear and simple and focus on the main topics of the
      website. It is centered like the headlines. No need for a subnavigation at
      the moment, there is not enough content for this at the moment, and the
      overall goal is to avoid such a complexity anyway.
    </p>
    <div class="navigation bordered">
      <ul class="navigation__list">
        <li v-for="item in links" class="navigation__item" :key="item.name">
          <a class="navigation__link" :href="item.url">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      links: [
        { name: "Home", url: "#" },
        { name: "Entry", url: "#" },
        { name: "Entry", url: "#" },
        { name: "Entry", url: "#" }
      ]
    };
  }
};
</script>

<style scoped>
.navigation {
  font-family: Avenir, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-align: left;
  color: black;
}

.navigation__list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: solid 1px #2e3673;
  padding-bottom: 1rem;
}

.navigation__link {
  text-transform: uppercase;
  color: #2e3673;
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
