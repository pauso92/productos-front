<template>
  <section>
    <h3>{{item.title}}</h3>
    <img :src="item.image" />
    <p v-for="(item, key) in item.prices" v-bind:key="key">{{item.value}}</p>
  </section>
</template>
<script>
export default {
  name: "ResultItem",
  props: [
    "item",
    "message"
  ]
}
</script>
