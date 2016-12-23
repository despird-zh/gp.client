// this file define all the routing information
import Error404 from './pages/Error';
import Home from './pages/Home';
import Demo from './pages/Demo';
import Demo1 from './pages/Demo1';
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
  }
];

export default [].concat(Personal, WGroup, Square, Extra);
