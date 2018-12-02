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

## 组件动画切换 
1. 使用overflow 实现右侧页面隐藏 .v-enter和.v-leave-to 分离写法 实现右侧进入 左侧离开 
2. position：实现组件内容从下往上进入的bug
 ```
 .app-container{
	padding-top:40px;     
	overflow-x: hidden;     //右侧隐藏 当我这个页面还没有出去的时候 右侧的页面隐藏
}
.v-enter,         
{     
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
    
}
.v-enter-active,   
.v-leave-active{
     transition: all 0.5s ease
}
```
## 通过vue-resource发起get请求 
1. 启动phpstudy本地服务器
2. mysql上面存放了两个网址 通过 站点域名管理给这个目录添加一个网址
3. 在get方法中第一个参数则是这个php文件地址 通过 php获取数据库地址 然后返回给data
4. 因为不熟悉php 所以手动添加的数组对象 然后 通过v-for指令 渲染数据  

##新闻资讯板块
1. mysql里面存放的数据通过php获取 然后返回json格式的数组
2. 把mui里面的media-list作为页面的模板 数据是ajax请求服务器来完成的
3. 请求完成后,通过v-for来渲染页面中的数据

##新闻详情板块
1. 首先在组件中写好模板 模板的主要信息来源于数据库
2. 通过ajax进行请求 请求回来的数据通过插件表达式的方式进行渲染
3. content里面的内容是用html标签来渲染的 所以内容需要用指令v-html 进行绑定渲染

### 登录和注册思路 目前登录显示的只有评论组件
## 登录思路
1. 通过get方式把输入的账号和密码通过yi下形式进行传递
```
this.$http.get("http://www.vue.stdio.io/api/login/",{params:{username:this.username,password:this.password}})
```  
2. 后端获取到数据库的数据和传递过来的数据进行比对
3. 正确返回yes 页面进行跳转
4. 评论组件中 用户姓名显示用户账号名称
## 注册思路
1. 通过post传参把用户输入的注册信息传递给后端
```
 <?php
error_reporting(0);
$code = $_POST["code"];
$name = $_POST["name"];
$date  = $_POST["date"];
$age = $_POST["age"];
$job = $_POST["job"];
$department  = $_POST["department"];
$month = $_POST["month"];
$year = $_POST["year"];
$politics = $_POST["politics"];
$health = $_POST["health"];

$db = new MySQLi("localhost","root","123456","study");
!mysqli_connect_error() or die("连接失败！");
$sql = "insert into `员工信息` values('{$code}','{$name}','{$date}',
'{$age}','{$job}','{$department}','{$month}','{$year}','{$politics}','{$health}')";
$result = $db->query($sql);
if($result)
{
header("location:work.php");
}
else
{
echo "添加失败！";
}
?>
--------------------- 
```
3. 通过以上方法进行数据的添加 
4. 添加完成后页面跳转至登录页
5. 登录完成进行登录思路的第4步
