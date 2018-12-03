//导入路由
import VueRouter from "vue-router"

//导入路由组件模块
import home from "./components/tabbar/home.vue"
import menber from "./components/tabbar/menber.vue"
import shopcar from "./components/tabbar/shopcar.vue"
import setting from "./components/tabbar/setting.vue"
import newsmessage from "./components/news/news.vue"
import newsinfo from "./components/news/newsinfo.vue"
import register from "./components/register/registered.vue"

//创建路由模块
var router=new VueRouter({
    routes:[   //配置路由规则
      {path:"/",redirect:"/home"},
      {path:"/home",component:home},     //主页面
      {path:"/menber",component:menber},     //会员
      {path:"/shopcar",component:shopcar},   //购物车
      {path:"/setting",component:setting},    //设置
      {path:"/home/news",component:newsmessage},  //新闻资讯
      {path:"/home/newsinfo/:id",component:newsinfo},   //新闻详情
      {path:"/menber/registe",component:register}      //注册
    ],
    linkActiveClass:"mui-active",

})

//把路由对象暴露出去
export default router 