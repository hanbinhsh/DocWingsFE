import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserHome from '../views/UserHome.vue';
import Profile from '../views/Profile.vue';
import AllFiles from '../views/AllFiles.vue';
import Log from '../views/Log.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta: { title: '用户注册' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: { title: '用户登录' }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { title: '个人资料' }
  },
  {
    path: '/userhome',
    name: 'userhome',
    component: UserHome,
    meta: { title: '用户主页' }
  },
  {
    path: '/log',
    name: 'log',
    component: Log,
    meta: { title: '日志' }
  },
  {
    path: '/allfiles',
    name: 'allfiles',
    component: AllFiles,
    meta: { title: '所有文件' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})


export default router
