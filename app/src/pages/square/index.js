/**
 * this file collect all the information of square module.
**/
import SquareHome from './home/SquareHome';
import SquareTopic from './topic/SquareTopic';

const Routes = [
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

export default Routes;
