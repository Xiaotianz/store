<template>
  <div id="slider" class="mui-slider mui-fullscreen">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
                        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
                        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
					</div>
				</div>
            </div>
    
</template>

<script>
import mui from "../../mui/js/mui.min.js"

export default{
    data(){
        return{

        }
    },
    methods:{

    },
    mounted() {
      
      //当组件的DOM结构被渲染好 并放在页面后 会执行这个钩子 
      //如果要操作DOM 最早只能在mounted里面进行操作 
       
     //初始化scroll控件
      mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
      
    },
}
</script>

<style lang="less" scoped>
* { touch-action: pan-y; }   //去掉 Unable to preventDefault inside passive event listener due to target being treated as passive. 警告
   .mui-fullscreen{  //禁止导航条定位在 0 0 位置
       position: static;
   }
 

</style>