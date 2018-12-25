//这是入口文件!
import Vue from "vue"
import VueRouter from "vue-router"
import resource from "vue-resource"

import app from "./app.vue"
import "./mui/css/mui.css"          
import "./mui/css/icons-extra.css"  //导入购物车图标

import preview from "vue-preview"  //引入vue缩略图 插件
// import VuePreview from 'vue2-preview'
// Vue.use(VuePreview)；
Vue.use(preview, {
   mainClass: 'pswp--minimal--dark',
   barsSize: {top: 0, bottom: 0},
   captionEl: false,
   fullscreenEl: false,
   shareEl: false,
   bgOpacity: 0.85,
   tapToClose: true,
   tapToToggleControls: false
 })

Vue.use(VueRouter);
Vue.use(resource);

Vue.http.options.emulateJSON = true; //post请求
//导入路由模块
import router from "./router.js"

//全部导入mint-ui

import MintUI from "mint-ui"
Vue.use(MintUI);   //全部导入Mint-uis
//按需导入mint-ui 轮播图 
// import { Swipe,SwipeItem,Button,Lazyload} from "mint-ui"
import "mint-ui/lib/style.css" 
// // 安装轮播图组件
// Vue.component(Swipe.name,Swipe,);
// Vue.component(SwipeItem.name,SwipeItem);
// Vue.component(Button.name,Button);

// Vue.use(Lazyload);


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