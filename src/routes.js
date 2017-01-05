// this file define all the routing information
import Error404 from './pages/Error';
import Home from './pages/Home';
import Demo from './pages/Demo';
import Demo1 from './pages/Demo1';
import Demo2 from './pages/Demo2';
import Demo3 from './pages/Demo3';
const Personal = [];

const WGroup = [];

const Square = [];

const Extra = [
  {
    path: '/',
    name: 'Welcome',
    component: Home
  },
  {
    path: '/home',
    name: 'Welcome',
    redirect: '/'
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
  }
];

export default [].concat(Personal, WGroup, Square, Extra);
