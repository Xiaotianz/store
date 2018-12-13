<template>
  <div id="slider" class="mui-slider mui-fullscreen">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in title" :key="item.id">
							{{item.title}}
						</a>
					</div>
				</div>
            </div>
    
</template>

<script>
import mui from "../../mui/js/mui.min.js" //引入Mui的js  因为在组件中使用了 scroll 這个方法
// import func from './vue-temp/vue-editor-bridge.js';

export default{
    data(){
        return{
			title:[],

        }
    },
    mounted() {
      
      //当组件的DOM结构被渲染好 并放在页面后 会执行这个钩子 
      //如果要操作DOM 最早只能在mounted里面进行操作 
       
     //初始化scroll控件
      mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    	});
      
	},
	created(){
		this.getsharetitle();
	},
	methods:{
      getsharetitle:function(){
		this.$http.get("http://www.vue.stdio.io/api/sharetitle/").then(function(data){
			if(data.status==200){
				  data.body.unshift({title:"全部",id:"0"});  //手动添加一个 全部 接口不会返回全部這个项
				  this.title=data.body;         
				  console.log(this.title);	
			  }
		  })
	  }
	
	}
}
</script>

<style lang="less" scoped>
* { touch-action: pan-y; }   //去掉 Unable to preventDefault inside passive event listener due to target being treated as passive. 警告
   .mui-fullscreen{  //禁止导航条定位在 0 0 位置
       position: static;
   }
 

</style>