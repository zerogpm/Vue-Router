import User from './components/user/User'
import Home from './components/Home'
import About from './components/About'
import UserDetail from './components/user/UserDetail'
import UserStart from './components/user/UserStart'
import UserEdit from './components/user/UserEdit'

export const routes = [
  { path: '', component: Home },
  { path: '/user', component: User, children: [
      { path: '', component: UserStart },
      { path: ':id', component: UserDetail },
      { path: ':id/edit', component: UserEdit },
    ] },
  { path: '/about', component: About}
];
