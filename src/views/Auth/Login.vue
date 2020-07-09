<template>
  <div class="container mt-50">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h3 class="title is-3">Iniciar sesión</h3>
        <hr />
        <form action="#" @submit.prevent="login()">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="text"
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
          <button @click="login()" class="button is-primary">Iniciar sesión</button>
        </form>
        <div class="notification is-danger mt-10" v-if="error">{{error}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        const data = {
          name: this.email,
          password: this.password
        };
        fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(data => {
            console.log("Success: ", data);
            localStorage.setItem("token", data.token);
            if (localStorage.getItem("token") !== null) {
                console.log('Entrando en el if1 ***')
              if (this.$route.params.nextUrl !== null) {
                console.log('Entrando en el if2 ##', this.$route.params.nextUrl)
                this.$router.push("/dashboard");
              } else {
                console.log('Entrando en el else @@')
                this.$router.push("/");
              }
            }
          })
          .catch(error => {
            console.error("Error: ", error);
          });
      }
    }
  }
};
</script>