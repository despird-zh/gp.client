/**
 * this file collect all the information of square module.
**/
import Demo from './Demo';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './demo4/Demo4';

const Routes = [
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
  }
];

export default Routes;
