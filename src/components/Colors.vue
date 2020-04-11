<template>
  <div class="colors">
    <h2>Colors</h2>
    <p>
      Colors set the mood and the appearance of a page. We want something modern
      and dynamic, basing on blue for the calmness and clarity, and purple for
      the contrast and dynamism.
    </p>
    <div class="colors__palette">
      <div class="colors__color colors__color--darkblue"></div>
      <div class="colors__color colors__color--white"></div>
      <div class="colors__color colors__color--lightblue"></div>
      <div class="colors__color colors__color--purple"></div>
      <div class="colors__color colors__color--pink"></div>
      <div class="colors__color colors__color--turquese"></div>
    </div>
    <div class="colors__gradient"></div>
  </div>
</template>

<script>
export default {
  name: "colors"
};
</script>

<style>
.colors__palette,
.colors__gradient {
  width: 100%;
  margin: 40px 0;
}

.colors__palette {
  display: flex;
}

.colors__color {
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  width: 33%;
  height: 100px;
}

.colors__color + .colors__color {
  margin-left: 10px;
}

.colors__color--darkblue {
  background-color: #2e3673;
  box-shadow: 0 0 10px #2e3673;
}

.colors__color--white {
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px #ccc;
}

.colors__color--lightblue {
  background-color: #428bca;
  box-shadow: 0 0 10px #428bca;
}

.colors__color--purple {
  background-color: #6b3ee0;
  box-shadow: 0 0 10px #6b3ee0;
}

.colors__color--pink {
  background-color: #d73bb8;
  box-shadow: 0 0 10px #d73bb8;
}

.colors__color--turquese {
  background-color: #6bffe0;
  box-shadow: 0 0 10px #6bffe0;
}
</style>
