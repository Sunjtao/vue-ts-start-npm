import Vue from 'vue';
import Router from 'vue-router';
import { Moor, MoorRouter } from '../index';
// import Moor from '../switch/Moor.vue';

Vue.use(Router);


const router: Router = new Router({
  routes: [
    ...MoorRouter
  ],
});

export default router;
