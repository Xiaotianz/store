#基于vue的项目              

1. 完成header区域使用的是mui中的header组件
2. 制作底部的Tabbar区域，使用的是mui的tabbar组件
 + 在制作购物车小图标时，需要引入icons-extra.css这个样式
 + 还要拷贝扩展字体库mui.ttf文件
 + 添加样式"mui-icon mui-icon-extra mui-icon-extra-cart"
3. 中间区域防止router-view用于路由来匹配展示的组件

## 改造tabbar为router-link
1. 导入路由包
2. 改变组件中的a链接为rout-link href改变为to  

## 设置路由高亮
1. 改变router-link-active 为mui的 active

## 轮播图 直接引入mint-ui的 swipe组件 
1. 数据获取思路
  + 配置可本地访问的数据接口 这个接口存放的是一个url地址
  + 通过vue-resource中this.$http()这个方法进行ajax请求
  + 数据获取成功，渲染在页面中
## 六宫格
1. 主要是样式的修改