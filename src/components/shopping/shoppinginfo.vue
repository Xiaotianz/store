<template>
    <div class="shoppinginfo">
        <!-- 定义一个小球用于点击加入购物车动画 首先实现小球动画 兼容后面再写-->
        <!-- 思路： 
                1.定义一个小球,把小球位置定位在起始位置,
                2.因为是半场动画 所以不能使用类名的方式进行动画的设置,
                3.需要使用动画钩子函数进行动画的设置,
                4.动画钩子函数 需要 @ 事件绑定机制绑定 
                    
         -->
        <transition @befor-enter="beforenter" @enter="enter" @after-enter="afterenter">   
           <div class="ball" v-if="fullball" ref="positionball"></div>        
           <!-- 這里的使用v-if元素在执行完半场动画后 会回到初始位置 -->
        </transition> 
        
        <div class="lunbo">
            <swipe :lunbolist="lunbolist" :isfull="false"></swipe>
            <!-- :lunbolist="lunbolist 传递给轮播图组件数据   -->
           <!-- :isfull="true"  判断宽度是否100% -->
        </div> 
        <div class="shopping-title">
            <div class="title">
                <h2>{{goodsinfo.title}}</h2>
            </div>
            <hr>
            <div class="goumai">
                <p class="jiage">
                    <span>市场价:<del>{{goodsinfo.yuanjia}}</del></span>
                    &nbsp;&nbsp;销售价：<span class="red">{{goodsinfo.jiage}}</span> 
                </p>
                <p class="number">              
                                                                <!-- 设置最多可以购买数量 -->
                    购买数量：<numbox @sendmethods="receive_value" :max="goodsinfo.yuxia"></numbox>
                </p>
            </div>
           <div class="button-goumai">
               <mt-button type="primary" size="small">立即购买</mt-button>
               <mt-button type="danger"  size="small" @click="gofullball">加入购物车</mt-button>
            </div>
        </div> 
        <div class="xiangqin">
            <div class="xiangqin-title">
                <h4>商品详情</h4>
            </div>
            <hr>
            <div class="xiangqin-info">
                <p>商品序列号:{{goodsinfo.sn}}</p>
                <p>库存情况:{{goodsinfo.yuxia}}件</p>
                <p>上架时间:{{goodsinfo.addtime | datafilter(goodsinfo.addtime)}}</p>
            </div>
            <hr>
            <div class="button">
               <mt-button type="primary" size="large" plain>图文介绍</mt-button>
               <mt-button type="danger"  size="large" plain>商品评论</mt-button>
            </div>
        </div>
    </div>     
</template>

<script>
import swipe from "../comment/lunbocomment.vue"
import numberbox from "../comment/numberbox.vue"
export default {
    //采用router编程式导航 
    data(){
        return{
            id:this.$route.params.id,
            lunbolist:[],   //轮播图数据
            goodsinfo:[],   //商品详细数据
            fullball:false, //控制小球
            selectionvalue:1,   //默认值是1; 所以 1不用传

        }
    },
    created(){
      this.getinfo();
      this.getinfodata();
    },
    methods:{ 
        getinfo:function(){        //获取轮播图的数据
           this.$http.get("http://localhost:3000/api/lunbourl/?id="+this.id).then(data=>{
            //    console.log(data);
                this.lunbolist = data.body.message; 
           });
        },
        getinfodata:function(){    //获取详情数据
            this.$http.get("http://localhost:3000/api/goodinfo/?id="+this.id).then(data=>{
                this.goodsinfo = data.body.message[0];
                console.log(data);
            })
        },
        gofullball(){   //控制小球显示隐藏
            this.fullball =!this.fullball;
        },
        beforenter(el){   //动画开始前小球起始位置
            el.style.transform ="translate(0,0)"; //因为在样式上面已经把小球的位置定义在起始位置了
        },
        enter(el,done){      //动画开始 done 会直接调用afterenter这个钩子函数
            const positionball = this.$refs.positionball.getBoundingClientRect();
            //无法获取app.vue组件上面的元素 所以使用了DOM操作; 
            const shoppingball =document.getElementById("shoppingball").getBoundingClientRect();  //用DOM的方式进行获取
              //getBoundingClientRect() 获取元素距离页面的距离
            const xball = shoppingball.left - positionball.left ;
            const yball = shoppingball.top  - positionball.top  ; 

        
            el.offsetWidth;  //需要它来启动动画
            el.style.transform="translate("+xball+"px, "+yball+"px)"; //小球动画后所移动到的位置
            el.style.transition="all 0.6s cubic-bezier(0.4,-0.3,1,0.68)";
            done()  //调用afterenter
        },
        afterenter(el){   //动画结束 
            this.fullball =!this.fullball;
            // el.style.transform ="translate(0,0)";
        },
        //现在需要把numberbox这个组件中的值传递给父组件，每当值改变就传 但是 现在有三个条件会改变 值 + - 跟输入都可以改变
        // 这个值 思路: 父给子传方法 ; 然后 子把动态改变的值传父组件  
        //父给子传方法 需要在子组件中绑定一个自定义一个方法
        
        receive_value(count){     //用于接收子组件传递过来的值
            //count是子组件传递过来的值
            this.selectionvalue = count ; // 重新赋值

            // console.log("传递过来的值:"+this.selectionvalue);
            
        }
    },
    components:{
       "swipe":swipe,
       "numbox":numberbox
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
                .jiage{
                    .red{
                        color:red;
                    }
                }
            }
            .button-goumai{
                padding: 0 0 25px 10px;
            }
        }
        .xiangqin{
            margin:8px;
            border:1px solid #ccc;
            box-shadow: 2px 3px 3px #ccc;
            background: white;
            border-radius: 2px 2px ;
            // padding-left:10px;
            .xiangqin-title{
                padding:5px 0px 0 10px;

            }
            .xiangqin-info{
                padding-left:10px;
            }
            .button{
                margin: 0 15px;
                .mint-button{
                    margin:15px 0;
                }
            }
        }
        .ball{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: red;
            position:absolute;
            top:404px;
            left:143px;
            z-index: 99;
        }
    }

    // cubic-bezier(.17,.67,.83,.67) 小球动画
</style>

