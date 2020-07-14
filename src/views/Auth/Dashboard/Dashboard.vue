<template>
  <div class="container mt-50">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h3 class="title is-3">Busqueda</h3>
        <hr />
        <form action="#" @submit.prevent="buscar()">
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
          <button @click="buscar()" class="button is-primary">Buscar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      product: ""
    }
  },
  methods: {
    buscar() {
      if(this.product) {
        const data = {
          product: this.product
        };
        fetch("endpoint", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
          console.log("Data", data)
        })
        .catch(error => {
          console.error("Error: ", error)
        })
      }
    }
  },
};
</script>