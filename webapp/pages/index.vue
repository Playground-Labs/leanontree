<template>
  <section class="container">
    <navigation-root />
    <overview />
  </section>
</template>

<script>
import navigationRoot from '~/components/navigation/root.vue'
import overview from '~/components/home/overview.vue'

export default {
  components: {
    navigationRoot,
    overview
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
