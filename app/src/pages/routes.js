// this file define all the routing information
import Error404 from './Error';
import Home from './home/Home';
import SquareModule from './square';
import WorkspaceModule from './workspace';
import WorkgroupModule from './workgroup';
import DemoModule from './demo';

// extra setting
const ExtraModule = {
  name: 'Extra',
  routes: [
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
  ]
};
// constenate the modules' routes into an array

export default
{
  routes: [].concat(DemoModule.routes,
          SquareModule.routes,
          WorkgroupModule.routes,
          WorkspaceModule.routes,
          ExtraModule.routes),

  modules: [DemoModule, SquareModule, WorkgroupModule, WorkspaceModule, ExtraModule]
};
