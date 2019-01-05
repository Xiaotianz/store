<template>
    <div class="registers">
               <h3>注册账号</h3>
         <div class="mui-input-row mui-password">
				<input type="text" class="mui-input-password" data-input-password="2" placeholder="输入账号" v-model="username"> 
                <!-- <span class="mui-icon mui-icon-eye"></span> -->
		 </div>
         <div class="mui-input-row mui-password">
				<input type="password" class="mui-input-password" data-input-password="2" placeholder="输入密码" v-model="password"> 
                <!-- <span class="mui-icon mui-icon-eye"></span> -->
		 </div>
         <div class="mui-input-row mui-password">
				<input type="password" class="mui-input-password" data-input-password="2" placeholder="确认密码" v-model="passwords">  
                <!-- <span class="mui-icon mui-icon-eye mui-active"></span> -->
		 </div>
        <div class="mui-input-row mui-password">
				<input type="text" class="mui-input-password" data-input-password="2" placeholder="输入用户名" v-model="accountname"> 
                <!-- <span class="mui-icon mui-icon-eye"></span> -->
		 </div>
      <router-link to="/menber">  <button class="mui-btn mui-btn-primary" @click="registerPost">注册</button> </router-link>
    </div>
   
</template>

<script> 
import { Toast } from "mint-ui"
  export default{
    data(){
       return{
           username:"",
           password:"", 
           passwords:"",
           accountname:"",
       }
    },
    methods:{
        //传递输入账号和密码'
        registerPost:function(){
            //把用户输入的信息提交给后台
            this.$http.post("http://localhost:3000/api/register/?username="+this.username+"&password="+this.password+"&accountname="+this.accountname,{emulate:true}).then(data =>{
                if(data.body.message == "ok"){
                    Toast("注册成功");
                }else{
                    
                };
            });
             
        },
    },
  }
    
</script>

<style lang="less" scoped>
     .registers{
         margin: 0 4px;
         padding-top:20px;
        h3{
         padding: 5px 0;
          text-align: center;
          font-size:  16px;
        }
        button{
            position: relative;
            width: 100%;
        }

     }
</style>
