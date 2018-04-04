import Vue from 'vue';
import Router from 'vue-router';
import Goods from '../components/goods/goods';
import Ratings from '../components/ratings/ratings';
import Seller from '../components/seller/seller';

Vue.use(Router);

const routes = [{
  path: '/',
  name: 'root',
  redirect: '/goods',
  component: null
}, {
  path: '/goods',
  name: 'goods',
  component: Goods
}, {
  path: '/ratings',
  name: 'ratings',
  component: Ratings
}, {
  path: '/seller',
  name: 'seller',
  component: Seller
}];

export default new Router({
  linkActiveClass: 'active',
  routes
});
