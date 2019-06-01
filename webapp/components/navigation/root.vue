<template>
  <header class="header-wrapper">
    <div id="navigation-container" class="navigation-container">
      <brand />
      <nav-items />
    </div>
  </header>
</template>
<script>
import brand from '~/components/navigation/brand.vue'
import navItems from '~/components/navigation/navItems.vue'
export default {
  components: {
    brand,
    navItems
  }
}
</script>
<style lang="scss" scoped>
.header-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  .navigation-container {
    height: 10vh;
    padding: 0 1em;
    width: 100%;
    position: relative;
    z-index: 1000;
    background-color: rgba(255, 255, 255, .3);
    transition: all 50ms cubic-bezier(.24, .76, .62, .2);
    @include flexbox;
    @include flex-direction(row);
    @include justify-content(space-between);
    @include align-items(center);

    @media(min-width: $screen-md-min) {
      .menu-toggle {
        display: none;
      }

    }
  }
  .sticky-navigation {
    position: fixed;
    top: 0;
    background-color: rgba(255, 255, 255, .7);
  }
}
</style>
