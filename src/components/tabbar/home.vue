<template>
      <div>
          <!-- 轮播组件 -->
           <mt-swipe :auto="4000">
                <mt-swipe-item>1</mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
                <mt-swipe-item>4</mt-swipe-item>
           </mt-swipe>
           
    <!-- 六宫格组件 -->
           <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                        <img src="../../images/menu1.png" alt="">
                        <div class="mui-media-body">新闻资讯</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                        <img src="../../images/menu2.png" alt="">
                        <div class="mui-media-body">图片分享</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                        <img src="../../images/menu3.png" alt="">
                        <div class="mui-media-body">商品购买</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                        <img src="../../images/menu4.png" alt="">
                        <div class="mui-media-body">留言反馈</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                        <img src="../../images/menu5.png" alt="">
                        <div class="mui-media-body">视频专区</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                        <img src="../../images/menu6.png" alt="">
                        <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div> 
</template>

<script>
    
</script>

<style lang="less" scoped>
// 手动给mint-swipe这个元素一个高度 让他显示出来
    .mint-swipe{      
        height: 200px;
    }
    .mint-swipe-item{
//      交集选择器
        &:nth-child(1){
           background: red;
      }
        &:nth-child(2){
           background: pink;
      }
        &:nth-child(3){
           background: blue;
      }
        &:nth-child(4){
           background: lightgreen
      }
    }
    .mui-grid-view.mui-grid-9{
        background: #fff;
        border:none
    }
    .mui-grid-view.mui-grid-9 .mui-media{
            border:0;
        img{
            width: 60px;
        }
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size:13px;
    }
</style>