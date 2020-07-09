import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Auth/Login.vue'
import Registre from '../views/Auth/Registre.vue'
import Dashboard from '../views/Auth/Dashboard/Dashboard.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registre',
    name: 'registre',
    component: Registre
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta : {
      requiresAuth: true,
    }
  }
  
]

const router = new VueRouter({
  mode: "history",
  routes
})

router.beforeEach((to, from, next) => {
  // ruta requiere authentication
  if(to.matched.some(record => record.meta.requiresAuth)){
    // aún no hay jwt, lo enviamos a /login
    if(localStorage.getItem('token') === null){
      next({
        path: '/login',
        params: { nextUrl: to.fullPath}
      })
    } else {
      // recuperamos user de localStorage
      let user = JSON.parse(localStorage.getItem('user'))
      // ¿es vista excluisiva de administradores?
      if(to.matched.some(record => record.meta.is_admin)){
        if(user.is_admin === true){
          next()
        } else {
          next({ name: 'dashboard'})
        }
      } else {
        next()
      }
    }
  }
  // ruta visible para invitados
  else if(to.matched.some(record => record.meta.guest)){
    // invitado que no tiene jwt almacenado
    if(localStorage.getItem('token') === null){
      next()
    } else {
      next({ name: 'dashboard'})
    }
  }
  // en general
  else {
    next()
  }
})

/* router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if (localStorage.getItem('token') === null){
      next({ path: '/login', params: {nextUrl:to.fullPath} })
    } else{

      next({ path: '/dashboard' })
    }
  } else { // Ruta no requiere auenticación
    
    next()
  }
}) */

export default router
