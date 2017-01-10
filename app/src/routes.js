// this file define all the routing information
import Error404 from './pages/Error';
import Home from './pages/Home';
import Demo from './pages/Demo';
import Demo1 from './pages/Demo1';
import Demo2 from './pages/Demo2';
import Demo3 from './pages/Demo3';
import Demo4 from './pages/demo4/Demo4';
const Personal = [];

const WGroup = [];

const Square = [];

const Extra = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Welcome',
    redirect: '/home'
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/demo1',
    name: 'Demo1',
    component: Demo1
  },
  {
    path: '/demo2',
    name: 'Demo2',
    component: Demo2
  },
  {
    path: '/demo3',
    name: 'Demo3',
    component: Demo3
  },
  {
    path: '/demo4',
    name: 'Demo4',
    component: Demo4
  },
  {
    path: '/error',
    name: 'Error404',
    component: Error404
  }
];

export default [].concat(Personal, WGroup, Square, Extra);
