import Vue from 'vue';
import Router from 'vue-router';
// 引入组件
import Home from '../views/Home.vue';
import List from '../views/List.vue';
import Detail from '../views/Detail.vue';

Vue.use(Router)
// 定义路由规则
let routes = [
    // 列表页
    { path: '/list/:id', component: List },
    // 详情页
    { path: '/detail/:id', component: Detail },
    // 首页是默认页面
    // { path: '*', component: Home }
    { path: '/home', component: Home },
    // 重定向
    { path: '*', redirect: '/home' }
]

// 获取路由实例化对象
var router = new Router({ routes })

// 暴露接口
export default router;
