<template>
  <div class="typography">
    <h2>{{ msg }}</h2>
    <p>
      This page contains both an example of the typography and the explanation
      for the choices made.
    </p>
    <section class='inverted'>
      <h1>h1: Heading 1 example</h1>
      <h2>h2: Heading 2 example</h2>
      <h3>h3: Heading 3 example</h3>
      <h4>h4: Heading 4 example</h4>
    </section>
    <p>
      The scale used for the title font sizes is the Perfect Fourth.
      Starting with a base font size of 16px, a `h4` tag has a size of 1.333em,
      h3 1.777em, h2 2.369em and h1 3.157. All headers have a margin of 1.5em
      above them to guarantee them enough space, so they can be detached
      from the former content in a consistent way.
    </p>
    <p>
      The font stack prioritizes performance and platform support. This is
      why we use the font Avenir for the headings on Mac/iOS, while the standard
      text font is the system one.
    </p>
    <p>
      Highlight / Code colour: D73BB8
    </p>
  </div>
</template>

<script>
export default {
  name: 'typography',
  data() {
    return {
      msg: 'Typography for this site',
    };
  },
};
</script>

<style>
.inverted {
  overflow:auto;
  background-color: #2e3673;
  color: white;
}

.inverted h1,
.inverted h2,
.inverted h3,
.inverted h4 {
  color: white;
}
</style>
