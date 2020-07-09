<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
        <h2 class="title is-3">My app</h2>
        </router-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          :class="{'is-active': isOpen}"
          @click.prevent="toggleMenu()"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isOpen}">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link >
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link class="button is-primary" to="/registre">
                <strong>Registrarme</strong>
              </router-link>
              <router-link class="button is-light" to="/login">Iniciar Sesión</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu () {
      const status = !this.isOpen
      this.isOpen = status
    }
  },
};
</script>