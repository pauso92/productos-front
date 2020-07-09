<template>
  <div class="container mt-50">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h3 class="title is-3">Crear una Cuenta</h3>
        <hr />
        <form action="#" @submit.prevent="register()">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g Alex Smith" v-model="name" />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
                v-model="email"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Contraseña</label>
            <div class="control">
              <input class="input" type="password" placeholder="Contraseña" v-model="password" />
            </div>
          </div>
          <button type="submit" class="button is-primary">Guardar</button>
        </form>
        <div class="notification is-danger mt-10" v-if="error">
          {{error}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registre',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    register() {
      if (name && this.email && this.password) {
        const data = {
          name: this.name,
          user: this.email,
          password: this.password
        }
        fetch( 'http://localhost:3000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success: ', data)
      })
      .catch((error) => {
        console.error('Error: ', error)
      })
    }
    }
  },
}
</script>