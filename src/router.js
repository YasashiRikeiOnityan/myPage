import Vue from 'vue'; 
import Router from 'vue-router'; 
import Home from './views/fst-home.vue'; 
import About from './views/fst-about.vue'; 

Vue.use(Router); 

export default new Router({ 
  routes: [ 
    { 
      path: '/', 
      name: 'home', 
      component: Home,
    }, 
    { 
      path: '/fst-sabout', 
      name: 'about', 
      component: About, 
    }, 
  ] 
});
