/**
 * 内置模块 - fs模块
 *  + node 内置模块之一，专门用来操作 各种 文件文件夹 的操
 *  + 当你需要使用的时候，直接导入就可以了
 *      => const fs = require("fs")
 * 
 *  1.异步读取文件内容
 *      => 语法：fs.readFile(文件路径，格式，回调函数)
 *          -> 文件路径：你要读取的文件路径，如果该路径不存在，就会出现错误信息
 *          -> 格式：选填，默认是 buffer,选填 UTF
 *          -> 回调函数：必填，读取结束后执行
 * 
 *  2.同步读取文件内容
 *      => 语法：fs.readFileSync(文件路径，格式)
 *      => 注意：
 *          -> 如果读取文件失败，会直接报错，阻断程序的继续执行
 *      => 返回值：读取到的文件内容
 * 
 *  3.异步写入文件内容
 *      => 语法：fs.writeFile(文件路径，写入的内容，回调函数)
 *          -> 文件路径：要写入内容的文件路径，如果路径不存在，会创建一个这个文件再写入
 *          -> 写入的内容：你想要写入文件的内容
 *          -> 回调函数：必填，写入完毕后执行的代码
 *      => 注意：写入是完全覆盖式的写入
 * 
 *  4.同步写入文件内容
 *      => 语法：fs.writeFileSync(文件路径，要写入的内容)
 */

// 1.导入内置模块 fs 
const fs = require('fs')
console.log('start')

// 2-1.异步读取文件内容
// fs.readFile('./test.txt','utf-8',(err,data)=>{
    // 这个回调函数接受两个形参
    // err:读取失败时的错误信息
    // data：读取成功时读取到的文件内容
    // console.log('读取文件信息完成')
    // if(err){
    //     console.log(err)
    //     return
    // }
    // else {
        // 替换敏感词
//         data = data.replace(/l/g,'*')
//         console.log(data)
//     }
// })

// 2-2.同步读取文件内容
// const res = fs.readFileSync('./test.txt','utf-8')
// console.log(res)


// 2-3.异步写入文件内容
// fs.writeFile('./test.txt','你好，世界',()=>{
//     console.log('写入成功')
// })

// 2-4.同步写入文件内容
fs.writeFileSync('./test.txt','你好。node')
console.log('end')