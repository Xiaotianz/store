const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports={
   //配置webpack打包规则
   entry:path.join(__dirname,"./src/main.js"),//需要打包文件的路径
   output:{
      path:path.join(__dirname,"./dist"),//打包好输出的文件
      filename:"bundle.js",       //打包好后的文件名称
   },
   //webpack-dev-server已经在package.json中配置

   //配置插件节点:
   plugins:[
    new HtmlWebpackPlugin({         //创建一个在内存中生成 html页面的插件  use
        template:path.join(__dirname,"./src/index.html"),  //指定的模板页面
        filename:"index.html", 
    }),
   ],
   resolve:{    //修改vue框架导入时候的路径
        alias:{
           "vue$":"vue/dist/vue.js"
        },
    },
    //配置loader
    module:{
        rules:[
            //配置.css文件的支持
            {test:/.\.css/,use:['style-loader',"css-loader"]},
            //配置.less文件的支持
            {test:/.\.less/,use:["style-loader","css-loader","less-loader"]},
            //配置url图片的支持
            {test:/\.(png|jpg|gif|jpeg|bmp)$/,use:"url-loader?limit=81325&name=[hash:8]-[name].[ext]"},
            //配置字体文件的支持
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:"url-loader"},  
            //配置.vue文件的支持
            {test:/\.vue$/,use:"vue-loader"} 
        ]
    }


}