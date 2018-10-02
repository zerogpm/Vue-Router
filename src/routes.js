import Home from './components/Home'
import Header from './components/Header'


const User = () => import(/* webpackChunkName: "user" */ './components/user/User.vue')
const About = () => import(/* webpackChunkName: "About" */ './components/About.vue')
const UserDetail = () => import(/* webpackChunkName: "user" */ './components/user/UserDetail.vue')
const UserStart = () => import(/* webpackChunkName: "user" */ './components/user/UserStart.vue')
const UserEdit = () => import(/* webpackChunkName: "user" */ './components/user/UserEdit.vue')


export const routes = [
  { path: '', component: Home, name: "home", components: {
      default: Home,
      'header-top' : Header
    } },
  { path: '/user', components: {
      default: User,
      'header-bottom' : Header
    }, children: [
      { path: '', component: UserStart },
      { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
        console.log('inside route setup')
        next();
        } },
      { path: ':id/edit', component: UserEdit, name: 'userEdit' },
    ] },
  { path: '/about', component: About},
  { path: '/redirect-me', redirect: { name: 'home' } },
  { path: '*', redirect: '/' }
];
