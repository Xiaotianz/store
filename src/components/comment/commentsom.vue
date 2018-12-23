<template>
      <div class="comment_style">
          <hr>
          <h3>发表评论</h3>
          <textarea placeholder="请输入评论内容(最大字数：120)" maxlength="120"></textarea>

          <mt-button type="primary" size="large">发表评论</mt-button>
            <div class="cmt-list">
               <div class="cmt-item" v-for="items in commentlist" :key="items.id">
                   <div class="cmt-title">
                       第{{items.id}}楼&nbsp;&nbsp;用户:{{items.user}}&nbsp;&nbsp;发表时间:{{items.addtime}}
                   </div>
                   <div class="cmt-body">   
                       {{items.content}}
                   </div>
               </div>
            </div>
            <!-- <div class="cmt-list">
               <div class="cmt-item">
                   <div class="cmt-title">
                       第1楼&nbsp;&nbsp;用户:test&nbsp;&nbsp;发表时间:2012-12-12 12:12
                   </div>
                   <div class="cmt-body">
                       习大大真帅
                   </div>
               </div>
            </div>             -->
            <!-- <div class="cmt-list">
               <div class="cmt-item">
                   <div class="cmt-title">
                       第1楼&nbsp;&nbsp;用户:test&nbsp;&nbsp;发表时间:2012-12-12 12:12
                   </div>
                   <div class="cmt-body">
                       习大大真帅
                   </div>
               </div>
            </div> -->
             <!-- <div class="cmt-list">
               <div class="cmt-item">
                   <div class="cmt-title">
                       第1楼&nbsp;&nbsp;用户:test&nbsp;&nbsp;发表时间:2012-12-12 12:12
                   </div>
                   <div class="cmt-body">
                       习大大真帅
                   </div>
               </div>
            </div>            -->
          <mt-button type="danger" size="large" plain>加载更多</mt-button>
      </div>
</template>

<script>
    //这是评论子组件 哪里需要这个组件 则只用导入一下这个组件 然后在 components中绑定一下这个组件 相当在当前组件中引入另外一个组件 
    //只是这个组件不受路由的控制 
    export default{
        data(){
            return {
             commentlist:[],
            }
        },
        created(){
            //  this.getcoment();
        },
        methods:{
            // getcoment:function(){
            //    this.$http.get("http://www.vue.stdio.io/api/comment/").then(function(comment){
            //        this.commentlist=comment.body;
            //       console.log(this.commentlist);
            //    })

            // }
        },
        // props:["id"],

    }
</script>

<style lang="less" scoped>
      .comment_style{
          h3{
             font-size:16px;
          }
          textarea{
              font-size:14px;
              line-height: 40px;
              margin: 0px;
          }
        .cmt-list{
            margin-top:5px;
          .cmt-item{
              font-size: 13px;
            .cmt-title{
            //   font-size: 14px;
            //   margin-top:5px;
              background: #cccccc;
              line-height: 30px;
            }
            .cmt-body{
                line-height: 30px;
                text-indent: 2em;   //缩进
            }
          }
        }
      }
</style>

