/*
    内置模块 - path 模块
     + node 内置模块之一
     + 专门用来操作 路径信息 的模块
     + 主要功能，是用来帮你组装路径信息的
     + 例子：
        => 有时候你得到的路径信息是 a/ b/ 和 c.txt
        => 你需要把它们合并成一个完整的路径信息
        => a/b/c.txt
        => 自己组装会比较麻烦
     + 使用的时候直接导入就可以了
        => const path = require('path')

    1.join()
     + 把你需要的路径组装成一个相对路径信息
     + 语法：path.join(路径片段1，路径片段2，。。。)
     + 返回值：组装好的完整路径信息

    2.resolve()
     + 把你需要的路径组装成一个绝对路径信息
     + 语法：path.resolve(路径片段1，路径片段2，。。。)
     + 返回值：组装好的完整路径信息
*/

// 1.导入 path 模块
const path = require('path')

// 2.join()
const res = path.join('a','b','c.txt','../d.txt')
console.log(res)

// 3.resolve()
// const res = path.resolve('a','b','c.txt')
// console.log(res)

/*
    相对：
    ./a/b/c
    a/b/c

    绝对：
    d:/a/b/c
    /a/b/c

    从 根目录 出发的路径叫做 绝对路径

*/