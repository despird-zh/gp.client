// this file define all the routing information
import Error404 from './pages/Error';
import Home from './pages/Home';

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
  }
];

export default [].concat(Personal, WGroup, Square, Extra);
