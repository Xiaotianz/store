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
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/menber">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="shoppingball">{{$store.getters.getallcount}}</span>
			   </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/setting">
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
	},
}
    
</script>
<style lang="less" scoped>
.app-container{
	padding-top:40px;     
	padding-bottom:50px;
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


//下面的样式 是tab栏的样式 因为.mui-tab-item的类与 图片分享中的 tab栏冲突了 所以导致tab栏无法切换路由
// 解决方法： 为.mui-tab-item重新起一个类名 为的是防止 冲突 
.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
