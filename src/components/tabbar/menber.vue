<template>
<div class="login_register">
   <form class="mui-input-group">
    <div class="mui-input-row">
        <label>用户名</label>
    <input type="text" class="mui-input-clear" placeholder="请输入用户名">
    </div>
    <div class="mui-input-row">
        <label>密码</label>
        <input type="password" class="mui-input-password" placeholder="请输入密码">
    </div>
    <div class="mui-button-row">
        <button type="button" class="mui-btn mui-btn-primary" >登录</button>
    </div>
    <div class="mui-button-row">
        <router-link to="/menber/registe" class="register_to">
            <p>注册账号</p>
        </router-link>
    </div>

   </form>
</div>
</template>

<script>
    export default{
        data(){
            return{
               username:"",
               password:""
            }
        },
        // created() {
        //     this.postusername();
        // },
        methods:{
            login:function(){
               this.$http.get("http://www.vue.stdio.io/api/login/",{params:{username:this.username,password:this.password}}).then(function(data){
                 console.log(data);
               })
            }
        },
    }

</script>

<style lang="less" scoped>
    .login_register{
        position: absolute;
        top:200px;
        left: 50%;
        margin-left: -165px;
        .mui-input-group:before{
            height: 0;
        }
        .mui-input-group:after{
            height: 0;
        }
        .mui-button-row .mui-btn.mui-btn-primary{
            width: 96%;
        }
        .mui-btn.mui-btn-primary{
            left:6px;
            top:10px;
        }
        p{
            position: relative;
            top:12px;
            left:5px;
            
        }
    }
</style>