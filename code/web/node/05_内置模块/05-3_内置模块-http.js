/*
    内置模块 - http 模块
     + node 的内置模块之一，专门用来开启 http 服务
     + 我们的 js 在 node 环境中运行的时候，完全可以当做一个服务器使用
     + 使用的时候直接导入就可以了
      => const http = require('http')

    1.createServer()
      => 语法：http.createServer(函数) 
      => 返回值：是一个 服务

    2.listen()
      => 语法：服务.listen(端口号，函数)

    以上代码执行完毕
        => 当你把该 js 文件在 命令中 使用 node 执行以后
        => 此时你的命令行就变成了一个 服务器
        => 可以接受前端的请求，并且根据不同的请求给出不同的响应
*/

// 1.导入 http 模块
const { resolveSoa } = require('dns')
const fs = require('fs')
const http = require('http')

// 2-1.创建一个服务
// 函数a 会在什么时候执行
// 只要前端有任何一个请求请求到了 8080 端口，就会执行一次
const server = http.createServer(function a(req,res){
    // 这个a函数接受两个参数
    // 第一个叫做 request，表示次请求过来的所有信息
    // 第二个叫做 response,表示本次响应的所有内容

    // 拿到你请求的 请求地址
    const url = req.url
    // 拿到你请求的 请求方式
    const method = req.method

    // 判断，当你以 GET 方式，请求 /test/first 这个地址时
    if(method==='GET'&&url==="/test/first"){
        // response 内有一个方法叫做 end()
        // 语法：res.end('文本内容')
        // 后端返回给前端的内容
        res.end('hello,node')
    }

    // 判断
    if(method==='GET'&&url==="/test/second"){
        const obj = {name:'Jack',age:18}
        res.end(JSON.stringify(obj))
    }

    // 判断
    if(method==='GET'&&url==='/goods/list'){
        fs.readFile('./data.json','utf-8',(err,data)=>{
            if(err){
                console.log(err)
                return
            }else
            res.end(data)
        })
    }
})

// 2-2.监听一个端口
server.listen(8080,()=>{
    console.log('我正在监听 8080 端口')
})