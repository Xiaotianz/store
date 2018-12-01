//导入路由
import VueRouter from "vue-router"

//导入路由组件模块
import home from "./components/tabbar/home.vue"
import menber from "./components/tabbar/menber.vue"
import shopcar from "./components/tabbar/shopcar.vue"
import setting from "./components/tabbar/setting.vue"
import newsmessage from "./components/news/news.vue"

//创建路由模块
var router=new VueRouter({
    routes:[
      {path:"/",redirect:"/home"},
      {path:"/home",component:home},
      {path:"/menber",component:menber},
      {path:"/shopcar",component:shopcar},
      {path:"/setting",component:setting},
      {path:"/news",component:newsmessage}

    ],
    linkActiveClass:"mui-active"

 
})

//把路由对象暴露出去
export default router 