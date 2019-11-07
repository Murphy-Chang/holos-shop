import router from '@/router/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

// no redirect whitelist
const whiteList = [
  '/login',
  '/home'
]

//路由导航守卫
router.beforeEach(async(to, from, next) => {
  // 打开NProgress加载进度条
  NProgress.start()
  // 设置网页标题
  document.title = to.meta.title || `holos - shop`

  // 如果是公开的接口
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    // 判断用户是否登录
    const access = JSON.parse(localStorage.getItem('ACCESS'))
    if (access && access['access_token']) {
      next()
    } else {
      // 中断路由跳转
      next(false)

      // 关闭NProgress加载进度条
      NProgress.done()
      localStorage.setItem('SSO_CALLBACK', `${window.location.protocol}//${window.location.host}/#${to.fullPath}`)
      window.location.href = `http://localhost:9988/#/login`
    }
  }
})

router.afterEach(() => {
  // 关闭NProgress加载进度条
  NProgress.done()
})
