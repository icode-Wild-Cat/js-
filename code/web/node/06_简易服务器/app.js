// 这个 js 文件用来启动 服务
/*
    目录结构
     + css/ 前端使用的 css 文件
     + js/ 前端使用的 js 文件
     + views/ 前端使用的 html 文件
     + app.js 后端书写的服务器代码
     
*/

// 0.导入我们需要的模块
// 0-1. http
const http = require('http')
// 0-2. fs
const fs = require('fs')
// 1.创建服务
const server = http.createServer(function(req,res){
    // 2.通过判断你的请求方式与请求地址，来决定给你什么数据
    // 等价于 const url = req.url ,method = req.method
    const {method,url} = req

    // 2-2.开始判断
    if(method==='GET'){
        // 能来到这说明一定是 GET 请求

        if(url==="/index.html"){
            // 表示你在请求的时候，请求地址书写的 http://localhost:8888/index.html
            // 找到指定的 html 文件，给到前端
            // 读取指定的 html 文件
            fs.readFile('./views/index.html',(err,data)=>{
                if(err){
                    console.log(err)
                    return
                }else {
                    // 把读取到的页面给到前端
                    res.end(data)
                }
            })
            
        }
    }

})

// 1-2.监听一个端口
server.listen(8888,()=>{
    console.log('正在监听8888端口')
})