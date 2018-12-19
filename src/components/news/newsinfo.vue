<template>
<div>
   <div class="newsinfo">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
           <span>发表时间:{{newsinfo.addtime}}</span>
           <span>点击{{newsinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content">
             
        </div>

        <comment-box></comment-box>    
   </div>
</div>

</template>

<script>
   import comment from "../comment/commentsom.vue"   //引入评论组件

    export default{
       data(){
          return{
             id:this.$route.params.id,
            //  listid:[],
             newsinfo:[]
          }

       },
       created() {
          this.getnewsinfo();
       },
       methods:{
         getnewsinfo:function(){
            this.$http.get("http://localhost:3000/api/newsinfo").then(function(newsinfo){
               console.log(newsinfo.body.message[0].id);
                  // console.log(this.newsinfo);
                  // console.log(typeof newsinfo.body[this.id-1].id);
                  // console.log(typeof this.id);
                  // console.log(this.id=this.id-1);
                   if(newsinfo.body.message[this.id-1].id==this.id){ //通过传递过来的id来判断是否与当前数据库给id相同
                      this.newsinfo=newsinfo.body.message[this.id-1];          //把当前获取过来的数组 给newsinfo:[],
                      console.log(this.newsinfo);
                   }else{
                      console.log("oh on");
                   }
            })
         }
       },
       components:{      //组件方法  评论子组件
         "comment-box":comment,      //组件名称 绑定 引入的组件 
      }
    }
</script>
     
<style lang="less">
   .newsinfo{
      padding:0 4px;
     .title{
        font-size: 14px;
        text-align: center;
        color:red;
        margin: 10px 0;
     }
     .subtitle{
      display: flex;
      justify-content:space-between;
      font-size:12px;
      color: #22aaff;
     }
     .content{
        img{
           width: 100%;
        } 
        video{
           width: 100%;
        }      
     }


   }


</style>
