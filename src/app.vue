<template>
   <div class="app-container"> 
       	<header id="header" class="mui-bar mui-bar-transparent">
			<!-- <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a> -->
			<h1 class="mui-title">CMS</h1>
		</header>
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">商城</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">我的</span>
			</a>
		</nav>
      

      <h1>这是app组件！----{{msg}}</h1>   
    </div>    

</template>
<script>

export default{
    data(){
        return{
          msg:"test"
          
        }
    }
}
    
</script>
<style lang="less" scoped>
.app-container{
     padding-top:40px;     
    
}

</style>
