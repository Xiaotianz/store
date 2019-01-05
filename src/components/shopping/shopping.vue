<template>
    <div class="goods-list">
        <div class="goods-item" v-for="item in list" :key="item.id" @click="goshopinfo(item.id)">
            <img :src="item.maxurl">
            <div class="info">
              <h1 class="title">{{item.title}}</h1>
                <div class="jiage">
                    <span class="jiage-xianzai">￥{{item.jiage}}</span>
                    <span class="jiage-yiqian">￥{{item.yuanjia}}</span>
                </div>
                <div class="goods-zhuangtai">
                    <span class="remai">热卖中</span>
                    <span class="shenyu">剩余{{item.yuxia}}件</span>
                </div>
            </div>
        </div>
        <mt-button type="primary" size="large" plain @click="getall" v-show="isshow">加载更多</mt-button>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            list:[],
            pageindex:1,
            isshow:true,
        }
    },
    created(){
       this.getgoodslist();
    },
    methods:{
        getgoodslist:function(){
           this.$http.get("http://localhost:3000/api/goodslist/?pageindex="+this.pageindex).then(data =>{
                if(data.body.status ==200){
                    this.list = data.body.message;
                }
           })

        },
        getall:function(){
            this.pageindex =2;
            this.$http.get("http://localhost:3000/api/goodslist/?pageindex="+this.pageindex).then(data =>{
                if(data.body.status ==200){
                    // this.list = data.body.message;
                    for(var i=0;i<data.body.message.length;i++){
                        this.list.push(data.body.message[i]);
                    }
                }
           });
           this.isshow = false;
        },
        goshopinfo:function(id){
            //编程式导航跳转将采用 命名的路由进行匹配 
            this.$router.push({name:"shopinfo",params:{id:id}}) //name：指向命名的路由, id：传递的参数
            console.log(this);
    }
    },
    //页面跳转不将使用router-link进行路由跳转 ，而是采用编程式导航进行跳转 具体api 参考vue-router 官方文档;
}
</script>

<style lang="less" scoped>
    .goods-list{
            display: flex;
            flex-wrap: wrap;
            padding:7px;
            justify-content: space-between;
        .goods-item{ 
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin-bottom: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 296px;
            img{
                width:100%
            }
            .title{
                font-size: 14px;
                padding-left:2px;
                // height: 42px;
            }
            .jiage{
            //   padding: 10px 0px;
              padding-top:4px;
              padding-bottom: 10px;
              font-size: 14px;
              color:#ccc;
              .jiage-xianzai{
                font-size: 16px;
                color: red;
                font-weight: bold;
                padding-right: 3px;
              }
              .jiage-yiqian{
                  text-decoration: line-through;
              }
            }
            .goods-zhuangtai{
                display: flex;
                justify-content: space-between;
                padding: 5px 5px;
                font-size: 12px;
                color: #ccc;

            }
        }
    }
</style>

