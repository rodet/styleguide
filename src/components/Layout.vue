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
    <section class='layout--full-width layout--light-blue'>
      <div class='layout--2col'>
        <h2 class='layout--light-blue'>Lorem Ipsum 1</h2>
        <p>
          It's fine to be bold and use the whole window width when needed.
          Here also is an example of a multiple columns page. This allows
          much more interesting layouts, with pictures, text and much more.
          Such layouts should be preferably exactly one window high, so no
          scrolling is involved while reading through it.
        </p>
        <p>
          The multiple columns should be used for graphical elements,
          animations and longer texts.
          Broad layout can also be used together with high color contrast to
          draw the reader's attention.
        </p>
      </div>
    </section>

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

.layout--full-width {
  margin-left: calc(50% - 50vw);
  width: 100vw;
  min-height: 200px;
}

.layout--light-blue {
  background-color: #428bca;
  color: white;
}

.layout--2col,
.layout--3col {
  padding: 40px;
  margin: 50px 0;
}

.layout--2col {
  column-count: 2;
}

.layout--3col {
  column-count: 3;
}

</style>
