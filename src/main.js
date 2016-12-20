import Vue from 'vue';
import VueRouter from 'vue-router';

import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';

import 'vue-material/dist/vue-material.css';

Vue.use(VueMaterial);
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'grey'
});

Vue.use(VueRouter);
Vue.use(VueResource);

import './components/index.js';

import App from './App';
import Home from './pages/Home';
const routes = [{
  path: '/',
  component: Home
}, {
  path: '/home',
  component: Home
}];

const router = new VueRouter({
  routes
});

let GPressMain = Vue.component('gpress-main', App);

GPressMain = new GPressMain({
  el: '#gpress-main',
  router
});

