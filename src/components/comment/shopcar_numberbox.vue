<template>
    <div class="mui-numbox" data-numbox-min='1'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" :value="single_count" @change="outvalue"  ref="text_value"/>
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
            // console.log(this.$refs.text_value.value);  
            //我要让公共的数据知道 我修改了哪一项的数据 所以在传递参数的时候需要
            //把当前的id也传过去 id怎么获取 通过props的方法进行获取 
            const shopcar_id_count ={
                id:this.gooditemid,   //需要更改的id
                count:this.$refs.text_value.value  //把更新后的值传给 vuex中的 changecount 方法 进行更改数据
            }
            this.$store.commit("changecount",shopcar_id_count);
        }
    }, 
    //获取单个商品的数量，  获取当前商品的id
    props:["single_count","gooditemid"],
}
</script>

<style>

</style>

