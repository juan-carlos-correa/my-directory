import ProfileContainer from '../Profile/Containers/ProfileContainer'
import UpdatePasswordContainer from '../Profile/Containers/UpdatePasswordContainer'

const routes = [
  {
    path: '/main/profile',
    component: ProfileContainer,
  },
  {
    path: '/main/updatePassword',
    component: UpdatePasswordContainer,
  }
];

export default routes;