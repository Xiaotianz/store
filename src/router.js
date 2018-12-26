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
// import huiyuan from "./components/register/huiyuan.vue"
import share from "./components/share/sharehome.vue"
import shareinfo from "./components/share/shareinfo.vue"
import shopping from "./components/shopping/shopping.vue"


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
      {path:"/menber/registe",component:register},     //注册
      {path:"/menber",component:menber},       //登录页
      {path:"/home/share",component:share},    //图片分享
      {path:'/home/share/shareinfo/:id',component:shareinfo},//图片分享详情
      {path:'/home/shopping',component:shopping}
    ],
    linkActiveClass:"mui-active",

})

//把路由对象暴露出去
export default router 