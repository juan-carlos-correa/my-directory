import ProfileContainer from '../Profile/Containers/ProfileContainer'
import SubsidiaryContainer from '../Company/Containers/SubsidiaryContainer';

const routes = [
  {
    path: '/main/profile',
    component: ProfileContainer,
  },
  {
    path: '/main/subsidiaries',
    component: SubsidiaryContainer,
  }
];

export default routes;