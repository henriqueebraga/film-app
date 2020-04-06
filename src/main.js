import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Movies from './components/Movies'
import SingleMovie from './components/SingleMovie'
import { store } from './store/store'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/movie/:movie_slug',
    name: 'SingleMovie',
    component: SingleMovie
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

//filters
Vue.filter('to-uppercase', (value) => {
  return value.toUpperCase()
});


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
