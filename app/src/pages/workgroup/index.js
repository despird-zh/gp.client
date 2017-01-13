import WorkgroupHome from './home/WorkgroupHome';
import WorkgroupChat from './chat/WorkgroupChat';
import WorkgroupProfile from './profile/WorkgroupProfile';
import WorkgroupRepo from './repository/WorkgroupRepo';
import WorkgroupTask from './task/WorkgroupTask';
import WorkgroupTopic from './topic/WorkgroupTopic';

const ModuleName = 'Workgroup';
const ModuleRoutes = [
  {
    path: '/workgroup-home',
    name: 'Workgroup Home',
    component: WorkgroupHome
  },
  {
    path: '/workgroup-chat',
    name: 'Workgroup Chat',
    component: WorkgroupChat
  },
  {
    path: '/workgroup-profile',
    name: 'Workgroup Profile',
    component: WorkgroupProfile
  },
  {
    path: '/workgroup-repo',
    name: 'Workgroup Repository',
    component: WorkgroupRepo
  },
  {
    path: '/workgroup-task',
    name: 'Workgroup Task',
    component: WorkgroupTask
  },
  {
    path: '/workgroup-topic',
    name: 'Workgroup Topic',
    component: WorkgroupTopic
  }
];

export default {
  name: ModuleName,
  routes: ModuleRoutes
};
