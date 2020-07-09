<template>
  <div id="app">
    <div id="nav">
      <Navigation />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/layaout/Navigation.vue'

export default {
    components: {
    Navigation
  }
}
</script>

<style lang="scss">
  @import './scss/App.scss';
</style>