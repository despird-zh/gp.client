/**
 * this file collect all the information of square module.
**/
import SquareHome from './home/SquareHome';
import SquareTopic from './topic/SquareTopic';

const ModuleName = 'Square';
const ModuleRoutes = [
  {
    path: '/square-home',
    name: 'Square Home',
    component: SquareHome
  },
  {
    path: '/square-topic',
    name: 'Square Topic',
    component: SquareTopic
  }
];

export default {
  name: ModuleName,
  routes: ModuleRoutes
};
