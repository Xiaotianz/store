<template>
    <div class="shoppinginfo">
        <div class="lunbo">
            <swipe :lunbolist="lunbolist" :isfull="false"></swipe>
            <!-- :lunbolist="lunbolist 传递给轮播图组件数据   -->
           <!-- :isfull="true"  判断宽度是否100% -->
        </div>
        <div class="shopping-title">
            <div class="title">
                <h2>这是商品标题</h2>
            </div>
            <hr>
            <div class="goumai">
                <p class="jiage">
                    <span>市场价:<del>￥2300</del></span>
                    &nbsp;&nbsp;销售价：<span>￥1900</span> 
                </p>
                <p class="number">
                    购买数量:
                </p>
            </div>
           <div class="button">
               <mt-button type="primary" size="small">立即购买</mt-button>
               <mt-button type="danger"  size="small">加入购物车</mt-button>
            </div>
        </div>
    </div>     
</template>

<script>
import swipe from "../comment/lunbocomment.vue"
export default {
    //采用router编程式导航 
    data(){
        return{
            id:this.$route.params.id,
            lunbolist:[]   //存放获取到的数据
        }
    },
    created(){
      this.getinfo();
    },
    methods:{ 
        getinfo:function(){
           this.$http.get("http://localhost:3000/api/lunbourl/?id="+this.id).then(data=>{
            //    console.log(data);
                this.lunbolist = data.body.message;
           });
        }
    },
    components:{
       "swipe":swipe
    }
    
}
</script>

<style lang="less" scoped>
    .shoppinginfo{
        // padding: 0;
        background:#eee;
        overflow: hidden;  //解决塌陷;  lunbo有margin 覆盖lunbo的margin
        .lunbo{
            margin:8px;
            border:1px solid #ccc;
            box-shadow: 2px 3px 3px #ccc;
            background: white;
            border-radius: 2px 2px ;
        }
        .shopping-title{
            margin:8px;
            border:1px solid #ccc;
            box-shadow: 2px 3px 3px #ccc;
            background: white;
            border-radius: 2px 2px ;
            .title{
                padding:5px 0px 0 10px;
                h2{
                    font-size:22px;
                    line-height: 30px;
                }
            }
            .goumai{
                padding:15px 0 0 10px;
            }
            .button{
                padding: 0 0 25px 10px;
            }
        }
    }
</style>

