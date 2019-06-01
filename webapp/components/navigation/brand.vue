<template>
  <div class="brand-area">
    <span id="brand-name">lean on tree</span>
  </div>
</template>
<style lang="scss" scoped>
    .brand-area {
      @include flexbox;
      @include flex-direction(row);
      @include justify-content(center);
      @include align-items(center);
      position: relative;
      #brand-name {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1.2em;
        text-transform: uppercase;
      }
    }
</style>
