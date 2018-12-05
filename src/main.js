//这是入口文件!
import Vue from "vue"
import VueRouter from "vue-router"
import resource from "vue-resource"

import app from "./app.vue"
import "./mui/css/mui.css"          
import "./mui/css/icons-extra.css"  //导入购物车图标

Vue.use(VueRouter);
Vue.use(resource);

Vue.http.options.emulateJSON = true;
//导入路由模块
import router from "./router.js"

//按需导入mint-ui 轮播图 
import { Swipe,SwipeItem,Button} from "mint-ui"
import "mint-ui/lib/style.css"
// 安装轮播图组件
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);
var vm=new Vue({
   el:"#app",
   methods:{},
//    渲染组件
   render:function(creaElement){
       return creaElement(app);
   },
      //挂载路由
    router
})