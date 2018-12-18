<template>
  <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in title" :key="item.id" @click="getinfo(item.id)">
							{{item.title}}
						</a>
					</div>
					<ul class="list-content">
 						<li v-for="item in list" :key="item.id">
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
			title:[],
			list:[],

        }
    },
	created(){
	   this.gettitle();
	   this.getinfo();
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
		gettitle:function(){
			this.$http.get("http://www.vue.stdio.io/api/sharetitle/").then((data)=>{
                if(data.status==200){
					this.title = data.body ;
					this.title.unshift({"id":"0","title":"全部"}); 
				}
				// console.log(data);
			})

		},
		getinfo:function(keyid){
			this.$http.get("http://www.vue.stdio.io/api/sharetitle/",{params:keyid}).then((data)=>{
                if(data.status==200){
					this.list = data.body ;
				}
				// console.log(data);
			})
		}
	
	}
}
</script>

<style lang="less" scoped>
* { 
	touch-action: pan-y;

} 
  //去掉 Unable to preventDefault inside passive event listener due to target being treated as passive. 警告

.list-content{
	list-style: none;
	padding: 0;
	margin-top:40px;
	padding:0 10px;
	li{
		text-align: center;
		background-color: #ccc;
		margin-bottom: 5px;

		img{
			width: 100%;
			vertical-align: middle;
			border-radius: 10px;
			box-shadow: 0 0 8px #999;
			max-height: 300px;
		}
		img[lazy=loading] {
			width: 40px;	
			height: 300px;
			margin: auto;
		}
	}
}


</style>