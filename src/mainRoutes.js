import Signup from './Auth/Containers/Signup';
import Signin from './Auth/Containers/Signin';
import MainPanel from './Dashboard/Containers/MainPanel';

const routes = [
  {
    path: '/signup',
    component: Signup,
  },
  {
    path: '/signin',
    component: Signin,
  },
  {
    path: '/main',
    component: MainPanel,
    isPrivate: true,
  }
];

export default routes;
