import { FC } from 'react';
import { Home } from '../../pages';
import LoginPage from '../../pages/LoginPage';
import RegisterForm from '../forms/RegisterForm';

interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
}

const routes: Array<Route> = [
  {
    key: 'login-page',
    title: 'Login',
    path: '/',
    enabled: true,
    component: LoginPage,
  },
  {
    key: 'register-page',
    title: 'Register',
    path: '/register',
    enabled: true,
    component: RegisterForm,
  },
  {
    key: 'home-page',
    title: 'Home',
    path: '/home',
    enabled: true,
    component: Home,
  }
];

export default routes;
