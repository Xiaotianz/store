<template>
    <div class="content—all">
        <h3 class="title">{{share_xq_title.title}}</h3>
        <div class="timer">
            <span class="time">发表时间:{{share_xq_title.addtime}}</span>
            <span class="click">点击{{share_xq_title.click}}次</span>
        </div>
        <hr>

        <!-- 缩略图 -->

        <div class="content">
            <!-- {{share_xq_title.con}} -->
        </div>
    </div> 
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            share_xq_title:[],
        }
    },
    created(){
        this.getshare_xq_title();
    },
    methods:{
        getshare_xq_title:function(){
            this.$http.get("http://localhost:3000/api/sharexqtitle/?id="+this.id).then((data)=>{
                // console.log(data.status);
                if(data.status == 200){
                    this.share_xq_title = data.body.message[0];
                }
            })

        }
    }

}
</script>


<style lang="less" scoped>
    .content—all{
        .title{
            text-align: center;
            font-size: 16px;
            padding-bottom: 15px;
            color:#007aff;
            font-weight: 500
        }
        .timer{
            display: flex;
            justify-content:space-between;
            font-size:14px;
            color: #999
        }
        .content{
            line-height: 20px;
            font-size: 14px;
        }
    }

</style>


