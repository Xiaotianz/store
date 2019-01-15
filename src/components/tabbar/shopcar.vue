<template>
<div class="shopcar">
    <div class="mui-card" v-for="(items,i) in shopcar" :key="items.id">
		<div class="mui-card-content">
			<div class="mui-card-content-inner">

                <mt-switch v-model="$store.getters.getallselected[items.id]"
                @change="updatestatus(items.id,$store.getters.getallselected[items.id])"></mt-switch>

                <img :src="items.url" alt="">
                <div class="info">
                    <h1>&nbsp;&nbsp;{{items.title}}</h1>
                    <div class="shopcar-content">
                        <span>￥{{items.jiage}}</span>
                        <numbox :single_count="$store.getters.getshopcarcount[items.id]" :gooditemid="items.id"></numbox>
                        <span class="del" @click.prevent="delremove(items.id,i)">删除</span>
                    </div>
                </div>
			</div>
		</div>
	</div>
    <div class="mui-card">
		<div class="mui-card-content">
			<div class="mui-card-content-inner jiesuan">
                    <div class="content">
                        <p class="all">总计(不含运费)</p>
                        <p class="all-jiage">已勾选{{$store.getters.getstatus_count_jiage.all_count}}件商品,总价￥
                            {{$store.getters.getstatus_count_jiage.all_jiage}}元
                        </p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
import numbox from "../comment/shopcar_numberbox.vue"

export default{
    data(){
        return{
            shopcar:[],
        }
    },
    created(){
       this.getshopcar();
    },
    methods:{
        getshopcar(){
            //把$store里面的id获取回来,通过id来获取相应的内容
            //然后通过一个数组传给后台;
            var idall = [];
            this.$store.state.count_car.forEach(item => {
                idall.push(parseInt(item.id));
            }); 
            if(idall.length<=0){
                return;
            }
            // console.log(idall);
           this.$http.get("http://localhost:3000/api/shopcar/?id="+idall.join(",")).then(data=>{
                // this.shopcar.unshift(data.body.message);
                this.shopcar = data.body.message;
                console.log(this.shopcar);
           })
        },
        delremove(id,index){
            this.shopcar.splice(index,1);     
            this.$store.commit("del_remove",id);
        },
        updatestatus(id,status){
            const selectedstatus = {
                id,  //传递当前id 
                selected:status  //传递当前的状态
            }
            this.$store.commit("updatestatus",selectedstatus)
        }

    },
    components:{
        "numbox":numbox,
    }
}  
</script>

<style lang="less" scoped>
.shopcar{
    background-color:#eee;
    overflow: hidden;
}
.mui-card-content-inner{
    display: flex;
    align-items: center;
    img{
        width: 60px;
        height: 60px;
        padding-left:5px;
    }
    .info{
        h1{
            font-size: 12px;
            padding-bottom: 10px;
        }
        .shopcar-content{
            span{
                color:red;
                font-weight:bold;
            }
            .del{
                color: blue;
                font-weight: normal;
            }
        }
    }
}
.jiesuan{
    display: flex;
    justify-content: space-between;
    align-items: center;

}


</style>