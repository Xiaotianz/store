# 基于Vue.js的第一个练手项目
## 基于 vue.js + webpack + node.js 的一个项目 
## 项目所用到的css库和插件如下
### 整体框架：Vue.js;
1. 项目所用到的库：
  + mui，mint-ui,
2. 项目所用到的插件：
  + vue-route, vue-resource, vue-preview,
3. webpack
  + 主要用于项目的打包, 处理每个相应loader
4. nodejs
  + 主要用于写数据接口,接口返回数据的实现

#### 以下内容是写某个组件实现功能的思路和一些有趣的事情

1. 首先是创建一个项目骨架 npm i 初始化项目
2. npm i vue.js ···· 等等一些库和插件 
3. 首先是创建一个main.js; 这个js是项目的入口文件 
  + 里面主要是引入一些项目依赖的框架和库, 因为整体框架是vue,所有还要在main.js中 创建一个vm的实例,挂载路由 
		```
		var vm=new Vue({
		el:"#app",
		methods:{},
		//    渲染组件
		render:function(creaElement){
			return creaElement(app);
		},
			//挂载路由
			router
		})

		```
4. 路由模块已经被抽离出来,router.js 這个文件主要是配置路由规则;  

#### 准备工作完毕, 进入项目首页编写;  
1. 配置路由规则, 在启动项目 hash值为 / 时 进入首页; 
 ``` 
 {path:"/",redirect:"/home"},

 ```
##### 首页思路
1. 主要是调用mui的样式库 

2. 完成header区域使用的是mui中的header组件
3. 制作底部的Tabbar区域，使用的是mui的tabbar组件
 + 在制作购物车小图标时，需要引入icons-extra.css这个样式
 + 还要拷贝扩展字体库mui.ttf文件
 + 添加样式"mui-icon mui-icon-extra mui-icon-extra-cart"
4. 中间区域防止router-view用于路由来匹配展示的组件

##### 首页难点1: 轮播图数据的获取;
1. 难点1: 没有数据接口 数据要从SQL获取, 
 解决方案: 使用php写数据接口,  php去读取sql的数据 然后返回给前端 
2. 通过vue-resource 进行请求服务器,
 请求服务器时, 因为服务器与我的项目不在同一个端口下 所以中间存在一个跨域的问题, 

