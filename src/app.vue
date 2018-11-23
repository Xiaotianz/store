<template>
   <div class="app-container"> 
       	<header id="header" class="mui-bar mui-bar-transparent">
			<!-- <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a> -->
			<h1 class="mui-title">CMS</h1>
		</header>

		<transition>
		   <router-view></router-view>
		</transition>

        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="menber">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
			   </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="setting">
				<span class="mui-icon mui-icon-gear"></span> 
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
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
	overflow-x: hidden;     //右侧隐藏 当我这个页面还没有出去的时候 右侧的页面隐藏
}
.v-enter,         
{     
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
    
}
.v-enter-active,   
.v-leave-active{
     transition: all 0.5s ease
}
</style>
