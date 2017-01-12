/**
 * this file collect all the information of square module.
**/
import SquareHome from './home/SquareHome';
import SquareTopic from './topic/SquareTopic';

const ModuleName = 'Sequare';
const ModuleRoutes = [
  {
    path: '/square-home',
    name: 'Square Home',
    component: SquareHome
  },
  {
    path: '/sequare-topic',
    name: 'Sequare Topic',
    component: SquareTopic
  }
];

export default {
  name: ModuleName,
  routes: ModuleRoutes
};
