<template>
  <div class="typography">
    <h2>Typography</h2>
    <p>
      This page contains both an example of the typography and the explanation
      for the choices made.
    </p>
    <section class="bordered">
      <h1>h1: Heading 1 example</h1>
      <h2>h2: Heading 2 example</h2>
      <h3>h3: Heading 3 example</h3>
      <h4>h4: Heading 4 example</h4>
    </section>
    <p>
      The scale used for the title font sizes is the Perfect Fourth. Starting
      with a base font size of <code>16px</code>, a <code>h4</code> tag has a
      size of <code>1.333em</code>, <code>h3</code> <code>1.777em</code>,
      <code>h2</code> <code>2.369em</code> and <code>h1</code>
      <code>4.208em</code>, jumping one step in the scale in order to really
      stand apart. All headers have a margin of <code>1.5em</code>
      above them to guarantee them enough space, so they can be detached from
      the former content in a consistent way.
    </p>
    <p>
      The font stack prioritizes performance and platform support. This is why
      we use the font Avenir for the headings on Mac/iOS, while the standard
      text fonts (sans serif and monospace) uses the system font stack.
    </p>
    <p>Highlight / Code colour: <code>#D73BB8</code></p>
  </div>
</template>

<script>
export default {
  name: "typography"
};
</script>
