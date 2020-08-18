<template>
  <div class="home">
    <h1>Home</h1>
    <Search />
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    Search: () => import('@/components/layaout/Search.vue')
  }
}
</script>
