<template>
      <div>
          <!-- 轮播组件 -->
           <!-- <mt-swipe :auto="4000">
                 <mt-swipe-item v-for="item in lunbolist" :key="item.ID">
                    <img :src="item.URL" alt="">
                </mt-swipe-item>
           </mt-swipe> -->
           <swipe :lunbolist="lunbolist" :isfull="true"></swipe>  
           <!-- :lunbolist="lunbolist 传递给轮播图组件数据   -->
           <!-- :isfull="true"  判断宽度是否100% -->
           
    <!-- 六宫格组件 -->
           <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <!-- 新闻资讯 -->
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <router-link to="/home/news">
                        <img src="../../images/menu1.png" alt="">
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                    <!-- 图片分享 -->
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <router-link to="/home/share">
                        <img src="../../images/menu2.png" alt="">
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <router-link to="/home/shopping">
                        <img src="../../images/menu3.png" alt="">
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
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
import swipe from "../comment/lunbocomment.vue";  //导入轮播图组件
    export default {
         data(){
             return{
                lunbolist:[]// 保存获取过来的list
             }
         },
        created() {    //组件初始化时调用这个方法
		 this.getinfo();
	    },
	    methods:{
		    getinfo: function () {      //vue-resource 插件实例方法  需要启动phpstudy 因为是通过端口访问的网站
                this.$http.get("http://localhost:3000/api/lunbourl").then(function (data) {
                // console.log(data);
                // console.log(databody);
                if(data.body.status==200){   //判断状态
                    this.lunbolist=data.body.message;
                    console.log(this.lunbolist);
                    // console.log(data);
                //    this.lunbolist=
                //    [   //获取服务器数据后 手动添加为一个数组对象
                    
                //         {
                //            name:"img0",
                //            url:data.body[0],
                //         },
                //         {
                //            name:"img1",
                //            url:data.body[1], 
                //         }    
                //    ] 

                //    console.log(this.lunbolist);

                } else{
                    console.log('获取失败');
                }
                })
            },
        },
        components:{   //谁用到轮播图 就调用这个
            "swipe":swipe
        }
    }
</script>

<style lang="less" scoped>
// 手动给mint-swipe这个元素一个高度 让轮播图显示出来
    .mint-swipe{      
        height: 200px;
    }
    .mint-swipe-item{
//      交集选择器
        &:nth-child(1){
        //    background: red;
      }
        &:nth-child(2){
        //    background: pink;
      }
        &:nth-child(3){
           background: blue;
      }
        &:nth-child(4){
           background: lightgreen
      }
      img{
           width: 100%;
           height: 100%;   
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