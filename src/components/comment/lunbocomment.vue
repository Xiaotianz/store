<template>
        <div>
            <mt-swipe :auto="4000">
                 <mt-swipe-item v-for="item in lunbolist" :key="item.ID">
                    <img :src="item.URL" alt="" :class="{full:isfull}"> 
                </mt-swipe-item>
           </mt-swipe>
        </div>
</template>

<script>
export default{
    //抽离轮播图组件时注意几点： 
    //1. 数据不要在轮播图组件中获取
    //2. 父组件获取数据后，轮播图组件中通过：props的方法接收父组件传递过来的值
    //props:["lunbolist"] 指的是 v-for 所要渲染的数组; 所以这个组件中不去获取数据 就只能通过父子组件传值的方法进行传值,
    //3. 因为這里home组件和shoppinginfo组件中共同用到了轮播图组件, 而且要获取的数据也不一样;
    //4.图片的高度跟宽度需要解决; 在home组件图片width要100%；在shopping组件中width要自适应 所以需要进行解决:
    //5.目前能解决的方法： 声明一个isfull 通过isfull来判断是否100%;

    props:["lunbolist","isfull"],  //谁调用,谁就把获取过来的数据通过props的方法 传递给这个组件 通过这个组件去渲染

        //        <!-- :lunbolist="lunbolist 传递给轮播图组件数据   -->
        //    <!-- :isfull="true"  判断宽度是否100% -->
}
</script>

<style lang="less" scoped>
    .mint-swipe{      
        height: 200px;
    }
    .mint-swipe-item{
        text-align: center;
//      交集选择器
        &:nth-child(1){
        //    background: red;
      }
        &:nth-child(2){
        //    background: pink;
      }
        &:nth-child(3){
        //    background: blue;
      }
        &:nth-child(4){
        //    background: lightgreen
      }
      img{
        //    width: 100%;
           height: 100%; 
      }
      .full{    //用于解决两个组件中高度跟宽度不一样的问题
          width: 100%;
      }
    }

</style>
