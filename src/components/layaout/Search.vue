<template lang="">
    <div class="container mt-50">
        <div class="columns">
      <div class="column is-6 is-offset-3">
        <h3 class="title is-3">Busqueda</h3>
        <hr />
        <form action="#" @submit.prevent="search()">
          <div class="field">
            <label class="label">Buscar</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Buscar"
                v-model="product"
              />
            </div>
          </div>
          <div v-for="(item, key) in data.search_results" v-bind:key="key">
            <ResultItem :item="item"/>
<!--             <section>
              <h3>{{item.title}}</h3>
              <img :src="item.image" />
              <p v-for="(item, key) in item.prices" v-bind:key="key">{{item.value}}</p>
            </section> -->
          </div>
          <button @click="search()" class="button is-primary">Buscar</button>
        </form>
      </div>
    </div>
    </div>
</template>

<script>
import response from './rainforest_response.json'
import ResultItem from '../ResultItem.vue'
export default {
  name: "Search",
  components: {
    ResultItem
  },
    data() {
    return {
      product: "bulova",
      // eslint-disable-next-line no-unused-vars
      data: response
    }
  },
  methods: {
    search() {
      if(this.product) {
        // eslint-disable-next-line no-unused-vars
        const data = {
          product: this.product
        };
        //console.log("Data", JSON.stringify(this.data.search_results))
/*         fetch("endpoint", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
          if (data) {
          console.log("Data", data)
          } else {
            console.log("No data found")
          }
        })
        .catch(error => {
          console.error("Error: ", error)
        })
      } */
      }
    }
  },
}
</script>