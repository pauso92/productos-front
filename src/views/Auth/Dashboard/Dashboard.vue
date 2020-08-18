<template>
  <div class="container mt-50">
    <div class="columns">
      <h1>Dashboard</h1>
      <Search />
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {
    Search: () => import('@/components/layaout/Search.vue')
  }
};
</script>