// this file define all the routing information
import Error404 from './Error';
import Home from './home/Home';
import SquareRoutes from './square';
import DemoRoutes from './demo';

const WGroup = [];
// extra setting
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
    path: '/error',
    name: 'Error404',
    component: Error404
  }
];
// constenate the modules' routes into an array

export default [].concat(DemoRoutes, WGroup, SquareRoutes, Extra);
