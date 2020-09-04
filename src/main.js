import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './plugins'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
Vue.use(VueRouter)
const routes = [
  { 
    path: '/',
    component: HomePage,
    children: [{
      path: '',
      component: Home
      
    },{
      path: 'about-us',
      component: AboutUs
      
    }]
  
  },
  { path: '/login', component: Login },

]
const router = new VueRouter({
  routes 
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
