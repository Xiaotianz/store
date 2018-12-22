<template>
     			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="itemnews in newslist" :key="itemnews.id">
					<router-link :to="'/home/newsinfo/'+itemnews.id">
						<img class="mui-media-object mui-pull-left" :src="itemnews.url">
						<div class="mui-media-body">
							<h1>{{itemnews.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间:{{itemnews.addtime}}</span>
                                <span>点击:{{itemnews.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<!-- <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://ps.ssl.qhmsg.com/bdr/_500_/t012e163ca7eb031219.jpg">
						<div class="mui-media-body">
							<h1>测试</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2018年11月10日 12：00分</span>
                                <span>点击: 0次</span>
                            </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://ps.ssl.qhmsg.com/bdr/_500_/t012e163ca7eb031219.jpg">
						<div class="mui-media-body">
							<h1>测试</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2018年11月10日 12：00分</span>
                                <span>点击: 0次</span>
                            </p>
						</div>
					</a>
				</li> -->

			</ul>   
</template>

<script>
import { Toast } from "mint-ui"

   export default {
        data(){
            return{
              newslist:[]
            }
        },
        created() {    //组件初始化时调用这个方法
		 this.getnews();
	    },
	    methods:{
            getnews: function () {      //vue-resource 插件实例方法  需要启动phpstudy 因为是通过端口访问的网站
            // http://localhost:3000/api/newslist
                this.$http.get("http://localhost:3000/api/newslist").then(function (newsdata) {
                    console.log(newsdata);
                        if(newsdata.status==200){
                             this.newslist=newsdata.body.message;
                            //  console.log(this.newslist);
                            //  Toast("获取失败");
                            //  console.log(this.newslist);
                        }else{
                             Toast("获取失败")
                        }
                })
            },
	}

   }

    
</script>

<style lang="less" scoped>
   li{
    h1{
       font-size: 14px;
       }
       .mui-ellipsis{
           font-size: 14px;
           color: #226aff;
           display: flex;
           justify-content: space-between;
       }
   }
   .mui-table-view {
    position: relative;
    margin-top: 0;
    padding-left: 0;
    list-style: none;
    background-color: #fff;
}
</style>

