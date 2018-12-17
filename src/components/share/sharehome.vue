<template>
  <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in title" :key="item.id" @click="getshareclick(item.id)">
							{{item.title}}
						</a>
					</div>
					<ul>
  							<li v-for="item in info" :key="item.id">
   								 <img v-lazy="item.imgurl">
 							</li>
					</ul>
				</div>
            </div>

</template>

<script>
// import $ from "jquery"

import mui from "../../mui/js/mui.min.js"


export default{
    data(){
        return{
			// id:this.$route.params.id,
			title:[],
			info:[],
        }
    },
	created(){
		this.getsharetitle();
		this.getshareinfo();
	},
	mounted(){
      //当组件的DOM结构被渲染好 并放在页面后 会执行这个钩子 
      //如果要操作DOM 最早只能在mounted里面进行操作 
	 //初始化scroll控件
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006	
		});

	},
	methods:{
		//获取图片title
      getsharetitle:function(){
		  //http://www.vue.stdio.io/api/sharetitle/
		this.$http.get("http://www.vue.stdio.io/api/sharetitle/").then(function(data){
			// console.log(data);
			if(data.status==200){
				  data.body.unshift({title:"全部",id:"0"});  //手动添加一个 全部 接口不会返回全部這个项
				  this.title=data.body;         
				//   console.log(this.title);	
				 
			  }
		  })
	  },
	  //获取全部图片
	  getshareinfo:function() {
		  
		//   console.log(keyid);
		 this.$http.get("http://www.vue.stdio.io/api/shareinfo/").then(function(data){
            // console.log(data);
			// this.info = data.body.message;
			if(data.status==200){
				this.info = data.body.message;
			}
			 
		 })
	  },
	  //点击title切换相应图片
	  getshareclick:function(keyid){
		this.$http.get("http://www.vue.stdio.io/api/sharetitleinfo/?ifid="+keyid).then(function(data){
            if(data.body.ifid == keyid){
				this.info = data.body.message[keyid];
				console.log(typeof  this.info);
				// 
				
				// console.log(typeof data.body.message);
				// this.info= this.info[keyid];
				// // this.info = test;
			}else{
				console.log("error")
			}
		 })
		  
		}
		 
	} 
	
}
</script>

<style lang="less" scoped>
* { touch-action: pan-y;} 
  //去掉 Unable to preventDefault inside passive event listener due to target being treated as passive. 警告

img[lazy=loading] {
  width: 40px;	
  height: 300px;
  margin: auto;
}
ul{
	list-style: none;
	padding: 0;
	li{
		margin: 0;
	}
}
</style>