import User from './components/user/User'
import Home from './components/Home'
import About from './components/About'

export const routes = [
  { path: '', component: Home },
  { path: '/user/:id', component: User },
  { path: '/about', component: About}
];
