//这是入口文件!
import Vue from "vue"
import VueRouter from "vue-router"
import app from "./app.vue"

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