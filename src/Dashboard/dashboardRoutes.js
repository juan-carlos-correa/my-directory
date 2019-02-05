import ProfileContainer from '../Profile/Containers/ProfileContainer'
import UpdatePasswordContainer from '../Profile/Containers/UpdatePasswordContainer'
import AddUserContainer from './Containers/AddUserContainer'
import DashboardContainer from './Containers/DashboardContainer';

const routes = [
  {
    path: '/main/dashboard',
    component: DashboardContainer,
    isPrivate: true,
  },
  {
    path: '/main/profile',
    component: ProfileContainer,
    isPrivate: true,
  },
  {
    path: '/main/updatePassword',
    component: UpdatePasswordContainer,
    isPrivate: true,
  },
  {
    path: '/main/addUser',
    component: AddUserContainer,
    isPrivate: true,
  },
];

export default routes;