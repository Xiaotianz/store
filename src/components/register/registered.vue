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
        <router-link :to="goishuiyuan"><button class="mui-btn mui-btn-primary" @click="postdata();">注册</button></router-link> 
        
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
           goishuiyuan:""
       }
    },
    methods:{
        //传递输入账号和密码
        postdata:function(){
          if(this.password===this.passwords){
            this.$http.get("http://www.vue.stdio.io/api/register/",
            {
                params:{
                        username:this.username,
                        password:this.password,
                        accountname:this.accountname
                }
            }
        ).then(function(data){
            if(data.body=="ok"){
                Toast("注册成功");
                // this.get();
                this.goishuiyuan="/menber";
            }else if(data.body=="no"){
                Toast("注册失败");
            }else if(data.body=="err_error"){
                Toast("请填写内容");
            }
          })  
          }else{
              this.goishuiyuan="";
              Toast("确认密码错误，请重新输入");
          } 
        }
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
