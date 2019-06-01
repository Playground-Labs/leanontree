<template>
  <header class="header-wrapper">
    <div id="navigation-container" class="navigation-container">
      <div class="brand-area">
        <span id="brand-name">lean on tree</span>
      </div>
      <menu-items />
    </div>
  </header>
</template>
<script>
import menuItems from '~/components/navigation/menuItems.vue'
export default {
  components: {
    menuItems
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
