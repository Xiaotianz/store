<template>
     <div>    
         <h3>会员登录</h3>
         <label>账号:<input type="text" v-model='username'></label>
         <label>密码:<input type="text" v-model="password"></label>
         <!-- <input type="text"> -->
         <!-- <input type="text"> -->
         <button @click="login()">登录</button>
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
    
</style>