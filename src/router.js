import Vue from 'vue'; 
import Router from 'vue-router'; 
import Home from './views/fst-home.vue'; 
import Activation from './views/my-activation.vue'; 
import Intro from './views/intro-test.vue';
import StudyEntranceExam from './views/study-entrance-exam.vue';

Vue.use(Router); 

export default new Router({ 
  routes: [ 
    { 
      path: '/', 
      name: 'home', 
      component: Home,
    },
    { 
      path: '/my-activation', 
      name: 'activarion', 
      component: Activation, 
    },
    { 
        path: '/intro-test', 
        name: 'intro', 
        component: Intro, 
    },
    { 
        path: '/study-entrance-exam', 
        name: 'study-entrance-exam', 
        component: StudyEntranceExam, 
    },
  ] 
});
