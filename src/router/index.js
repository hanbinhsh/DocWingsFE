import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserHome from '../views/UserHome.vue';
import Profile from '../views/Profile.vue';
import AllFiles from '../views/AllFiles.vue';
import Log from '../views/Log.vue';
import Share from '../views/Share.vue';
import ShareAccept from '../views/ShareAccept.vue';
import UserGroupEditing from '../views/UserGroupEditing.vue';
import NotFound from "../views/404.vue";
import toastr from "../assets/js/plugins/toastr/toastr.min.js";
toastr.options = {
	"closeButton": true,
	"debug": false,
	"progressBar": true,
	"preventDuplicates": true,
	"positionClass": "toast-bottom-center",
	"onclick": null,
	"showDuration": "400",
	"hideDuration": "1000",
	"timeOut": "7000",
	"extendedTimeOut": "1000",
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "fadeIn",
	"hideMethod": "fadeOut"
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '文档之翼' }
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
    meta: { 
      title: '个人资料',
      requiresAuth: true,
    }
  },
  {
    path: '/userhome',
    name: 'userhome',
    component: UserHome,
    meta: { 
      title: '用户主页',
      requiresAuth: true,
      requires_not_3_Auth: true,
    }
  },
  {
    path: '/log',
    name: 'log',
    component: Log,
    meta: { 
      title: '日志',
      requiresAuth: true,
      requiresAdmin: true,
      requires_not_3_Auth: true,
    }
  },
  {
    path: '/allfiles',
    name: 'allfiles',
    component: AllFiles,
    meta: {
      title: '所有文件',
      requiresAuth: true,
      requires_not_3_Auth: true,
    }
  },
  {
    path: '/preview',
    name: 'preview',
    component: () => import('../views/preview.vue'),
    meta: {
      title: '文件预览',
      requiresAuth: true,
    }
  },
  {
    path: '/trash',
    name: 'trash',
    component: AllFiles,
    meta: {
      title: '回收站',
      requiresAuth: true,
      requires_not_3_Auth: true,
    }
  },
  {
    path: '/share',
    name: 'share',
    component: Share,
    meta: {
      title: '分享',
      requiresAuth: true,
    }
  },
  {
    path: '/shareaccept/:shareid',
    name: 'shareaccept',
    component: ShareAccept,
    meta: {
      title: '查看分享',
    }
  },
  {
    path: '/usergroupediting',
    name: 'usergroupediting',
    component: UserGroupEditing,
    meta: {
      title: '用户组编辑',
      requiresAuth: true,
      requiresAdmin: true,
      requires_not_3_Auth: true,
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotFound,
    meta: { title: '页面未找到' }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title  // 更新标题
  // 登录检测
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 获取 sessionStorage 中的用户数据
    const user = sessionStorage.getItem('userData');
    if (!user) {
      // 如果没有用户数据，重定向到登录页面
      toastr.error("您还没有登录，请先登陆后访问！", "错误");
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      // 如果有用户数据
      if(to.matched.some(record => record.meta.requires_not_3_Auth)){
        //需要非3级用户权限
        const auth = sessionStorage.getItem("authData")
        if(auth == 3){
          toastr.error("权限不足，无法访问该页面！", "错误");
          next({
            path: '/profile',
            query: { redirect: to.fullPath },
          });
        }
      }
      if(to.matched.some(record => record.meta.requiresAdmin)){
        // 需要管理员权限
        const admin = JSON.parse(sessionStorage.getItem('userData'));
        if(admin.isAdmin != 1){
          toastr.error("您没有管理员权限，无法访问该页面！", "错误");
          next({
            path: '/userhome',
            query: { redirect: to.fullPath },
          });
        }
      }
      // 允许访问
      next();
    }
  } else {
    // 不需要认证的路由，允许访问
    next();
  }
})

export default router
