<template>
  <div id="slider" class="mui-slider">
		<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			<div class="mui-scroll">
				<a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in title" :key="item.id" @click="gettitleinfo(item.id)">
					{{item.title}}
				</a>
			</div>
				<ul class="list-content">
 					<li v-for="item in all" :key="item.id">
   						<img v-lazy="item.url">
						<div class="info">
							<h2 class="img-title">{{item.imgjieshao}}</h2>
							<div class="img-jieshao">{{item.imgxiangqing}}</div>	
						</div>
 					</li>
				</ul>
		</div>
	</div>

</template>

<script>
// import $ from "jquery"

import mui from "../../mui/js/mui.min.js"
import { sep } from 'path';


export default{
    data(){
        return{
			title:[],
			imglist:[],
			all:[],
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
		//获取title
		gettitle:function(){
			this.$http.get("http://localhost:3000/api/sharetitle").then(function(data){
				if(data.status==200){
					// console.log(data)
					this.title = data.body.message;
					this.title.unshift({"id":"0","title":"全部"});
					// console.log(this.title);
				}
			})
		},
		//获取图片
	 	getinfo:function(){
			this.$http.get("http://localhost:3000/api/shareinfo").then(function(data){
				if(data.status==200){
					this.all = data.body.message;
					// console.log(data);
					// console.log(this.imglist);
				}
			})			 	
		 },
		 gettitleinfo:function(keyid){
			//  console.log(keyid);
			//  console.log(this.imglist[keyid-1].ifid);

			this.$http.get("http://localhost:3000/api/shareinfo/?id="+keyid).then(function(data){
				// console.log(data);
				this.all= [];
				if(data.status==200){
						//一条数据不允许直接等于 需要使用unshift插入
						this.all = data.body.message;
				}
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
		position: relative;

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
		.info{
			// text-align: center;
			width: 100%;
			position: absolute;
			bottom:0;
			// padding: 0 5px;
			
			background: rgba(0,0,0, 0.5);
			.img-title{
				font-size: 16px;
			}
			.img-jieshao{
				text-align: left
			}
		}
	}
}


</style>