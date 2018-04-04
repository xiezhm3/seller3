import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [{
  path: '/',
  name: '',
  component: null
}];

export default new Router({
  linkActiveClass: 'active',
  routes
});
