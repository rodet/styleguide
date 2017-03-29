<template>
  <div class="layout">
    <h2>Layout</h2>
    <p>
      Usually the content is limited to 800px, adapting to the device width.
      A padding or margin for the main content has not been defined yet.
    </p>
    <div class='layout__arrow'>
      &harr;
    </div>
    <p>
      It's fine to be bold and use the whole window width when needed:
    </p>
    <section class='layout__full-width'>
      <div class='layout__3col'>
        <h2>Lorem Ipsum 1</h2>
      </div>
      <div class='layout__3col'>
        <h2>Lorem Ipsum 2</h2>
      </div>
      <div class='layout__3col'>
        <h2>Lorem Ipsum 3</h2>
      </div>
    </section>
    <p>
      Broad layout can also be used together with high color contrast to
      draw the reader's attention.
    </p>
  </div>
</template>

<script>
export default {
  name: 'layout',
};
</script>

<style>
.layout__arrow {
  font-size: 2.369em;
}

.layout__full-width {
  margin-left: calc(50% - 50vw);
  width: 100vw;
  min-height: 200px;
  background-color: #428bca;
}

/* Make this more generic */
.layout__full-width h2 {
  color: white;
}

.layout__3col {
  width: 33%;
  display: inline-block;
  height: 100%;
}

.layout__3col + .layout__3col {
  /*border-left: 1px solid white;*/
}
</style>
