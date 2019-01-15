import Vuex from "vuex"   //抽离vuex模块
import Vue from "vue"


Vue.use(Vuex);

//把数据存放在本地， 在调用main.js的时候就把存放在本地的数据获取出来
var car = JSON.parse(localStorage.getItem("car")||"[]");

var store =new Vuex.Store({
    state:{
        //这里面所要共享的数据格式为：[id:"商品ID",count:"购买数量",jiage:"商品单价",selected:false] //selected 用于购物车选择状态; //默认为true
      count_car :car,  //car 指向的是本地数据
    },
    //操作数据的方法 全在里面
    mutations:{
        //把传送过来的数据添加到公共数据区
      addcar(state,obj){
          //分析加入购物车功能的实现： 
          //1. 如果之前count_car中有当前的商品信息 则 只需要更新数量
          //2. 如果没有 则直接push到count_car中;
          //  //数组操作中 有一个方法 some 这个方法 用于在数组中寻找某一个值 如果找到了 就return 一个true
          var flag  = false  // 假设count_car 中没有传递过来的商品信息 
          state.count_car.some(function(item){  
                if(item.id === obj.id){   //商品存在 //更新数量
                    item.count +=parseInt(obj.count);
                    flag = true ;    //进入到這里的时候说明商品存在 在這里面把标志位的状态更新  
                    return true;
                }
          })
          if(flag == false){
              state.count_car.push(obj);
          };
          localStorage.setItem("car",JSON.stringify(state.count_car));
      },
      //更新数量
      changecount(state,obj){
          state.count_car.some(item =>{
              if(item.id  == obj.id){
                  item.count = parseInt(obj.count);
                  return true;
              }
          })
          localStorage.setItem("car",JSON.stringify(state.count_car));
      },
      //删除的商品
      del_remove(state,id){
        state.count_car.some((item,i)=>{
            if(item.id == id){
                state.count_car.splice(i,1)
            }
        })
        localStorage.setItem("car",JSON.stringify(state.count_car));
      },
      //更新勾选的状态
      updatestatus(state,obj){
          state.count_car.some(item=>{
              if(item.id == obj.id){
                  item.selected =obj.selected;
              }
          });
          localStorage.setItem("car",JSON.stringify(state.count_car));
      }
    },
    //每当数据发生改变后会返回更新后的数据
    getters:{
        //返回购物车徽标的数量
        getallcount(state){
            var c = 0; //初始为0;
            // var zhongjianzhi = 0;
            state.count_car.forEach(function(item){
                var parseInt_count = parseInt(item.count);  //在遍历的时候把所有的count全部转换为number类型 這样
                //防止后面出现bug  加入购物车后  计算类型为  number + 字符串   防止不进行计算;   
               //count 可能是字符串 所以要转换为 number
            //    console.log(typeof parseInt_count);
                c = c+parseInt_count;

            });
            return parseInt(c);
        },
        //返回购物车每项数量
        getshopcarcount(state){

            //创建一个空对象,这个对象所要存放的值为{'count_car.id值':count_car.count值}
            //例如 {"1":12,"2":"13"}  类似于這样的数据格式
            const shopcarcount ={};
            //这边forEach的是 count_car 里面的数据 
            // 通过{"键为每一项的id":"值为每一项的count"}  
            state.count_car.forEach(item=>{
                shopcarcount[item.id] = item.count;   //存放在shopcarcount里面
            })
            return shopcarcount;  
        },
        //返回状态
        getallselected(state){
            const selectedstatus ={};
            //返回所有数据中所有selected的状态
            state.count_car.forEach(item=>{
                //键 ：id  值  状态
                selectedstatus[item.id] = item.selected;  
            })
            return selectedstatus;
            // console.log(selectedstatus);
        },
        //返回勾选的数量和全部价格
        getstatus_count_jiage(state){
            const jiage ={
                all_count:0, //勾选的数量
                all_jiage:0,//价格
            }
            state.count_car.forEach(item =>{
                if(item.selected ==true){
                     //根据数量计算价钱
                     jiage.all_count += item.count;
                     jiage.all_jiage += item.count * item.danjia;
                }
            })
            return jiage;
            
        }
    }
})


export default store