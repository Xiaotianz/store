//这是入口文件!
import Vue from "vue"
import VueRouter from "vue-router"
import app from "./app.vue"
import "./mui/css/mui.css"

//按需导入mint-ui
import { Header } from "mint-ui"
import "mint-ui/lib/style.css"
//安装header
Vue.component(Header.name, Header);

var vm=new Vue({
   el:"#app",
   data:{
       msg:"test"
   },
   methods:{

   },

   
//    渲染组件
   render:function(creaElement){
       return creaElement(app);
   }

})