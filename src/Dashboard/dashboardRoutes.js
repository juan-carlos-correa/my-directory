import ProfileContainer from '../Profile/Containers/ProfileContainer'
import UpdatePasswordContainer from '../Profile/Containers/UpdatePasswordContainer'
import AddUserContainer from './Containers/AddUserContainer'
import DashboardContainer from './Containers/DashboardContainer';

const routes = [
  {
    path: '/main/dashboard',
    component: DashboardContainer,
  },
  {
    path: '/main/profile',
    component: ProfileContainer,
  },
  {
    path: '/main/updatePassword',
    component: UpdatePasswordContainer,
  },
  {
    path: '/main/addUser',
    component: AddUserContainer,
  },
];

export default routes;