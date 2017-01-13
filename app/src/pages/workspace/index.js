import WorkspaceHome from './home/WorkspaceHome';
import WorkspaceChat from './chat/WorkspaceChat';
import WorkspaceProfile from './profile/WorkspaceProfile';
import WorkspaceRepo from './repository/WorkspaceRepo';
import WorkspaceTask from './task/WorkspaceTask';
import WorkspaceTopic from './topic/WorkspaceTopic';

const ModuleName = 'Workspace';
const ModuleRoutes = [
  {
    path: '/workspace-home',
    name: 'Workspace Home',
    component: WorkspaceHome
  },
  {
    path: '/workspace-chat',
    name: 'Workspace Chat',
    component: WorkspaceChat
  },
  {
    path: '/workspace-profile',
    name: 'Workspace Profile',
    component: WorkspaceProfile
  },
  {
    path: '/workspace-repo',
    name: 'Workspace Repository',
    component: WorkspaceRepo
  },
  {
    path: '/workspace-task',
    name: 'Workspace Task',
    component: WorkspaceTask
  },
  {
    path: '/workspace-topic',
    name: 'Workspace Topic',
    component: WorkspaceTopic
  }
];

export default {
  name: ModuleName,
  routes: ModuleRoutes
};
