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

Vue.use(preview, {  //缩略图官方api注册
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
//导入vuex模块
import store  from "./vuex.js"   

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
 
//自定义时间过滤器
Vue.filter("datafilter",function(datetime){
    var date =new Date(datetime);
    const year =date.getFullYear(); //年 
    const month =date.getMonth()+1;  //月
    const day = date.getDate();   //日
    const hours =date.getHours();  //时
    const minutes =date.getMinutes(); //分
    const seconds = date.getSeconds(); //秒
   // if(date.getMonth()<10){
   //    const month =0+date.
   // }
    return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
})


var vm=new Vue({
   el:"#app",
   methods:{},
//    渲染组件
   render:function(creaElement){  //cleaElement指向的是app这个组件 
       return creaElement(app);  //返回这个组件并渲染
   },
      //挂载路由
   router,
   store, //挂载Vuex

})