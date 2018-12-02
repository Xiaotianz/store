//导入路由
import VueRouter from "vue-router"

//导入路由组件模块
import home from "./components/tabbar/home.vue"
import menber from "./components/tabbar/menber.vue"
import shopcar from "./components/tabbar/shopcar.vue"
import setting from "./components/tabbar/setting.vue"
import newsmessage from "./components/news/news.vue"
import newsinfo from "./components/news/newsinfo.vue"

//创建路由模块
var router=new VueRouter({
    routes:[   //配置路由规则
      {path:"/",redirect:"/home"},
      {path:"/home",component:home},
      {path:"/menber",component:menber},
      {path:"/shopcar",component:shopcar},
      {path:"/setting",component:setting},
      {path:"/home/news",component:newsmessage},
      {path:"/home/newsinfo/:id",component:newsinfo}
    ],
    linkActiveClass:"mui-active",

})

//把路由对象暴露出去
export default router 