<template>
    <div class="mui-numbox" data-numbox-min='1'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" value="1" @change="outvalue"  ref="text_value"/>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from "../../mui/js/mui.min.js";
//  什么时候传递值给父组件,  1. 当值改变后就传 所以需要监控值 使用change方法 监视值得改变
export default {
    mounted(){
        mui(".mui-numbox").numbox();  
    },
    methods:{
        outvalue(){    //sendmethods 方法名  把值传给这个方法
            this.$emit('sendmethods',this.$refs.text_value.value);
        }
    },
    props:["max"],  //接受传递过来的值 
    watch:{   //监听 max 值的改变  因为 获取数据的方法是一个异步操作 解析完后 值还没获取到 就会把一个undfinde传递过来;
    //所以需要监听max 值得改变 当max值获取到后 立刻把新的值传递;
    //这个使用的mui.js api进行设置 去看mui. numbox的 js api;
        "max":function(newvalue,oldvalue){
             mui(".mui-numbox").numbox().setOption("max",newvalue);
        }
    }
}
</script>

<style>

</style>

