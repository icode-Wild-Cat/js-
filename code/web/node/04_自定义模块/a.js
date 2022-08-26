// 我是一个 a.js 文件，我想使用 b.js 文件内的数据


// 2.我需要导入 b.js 文件
/**
 * 语法：
 *  + require("指定的 js 文件")
 *      => 注意：如果你导入的文件是 .js 后缀，可以省略不写
 *  + 返回值：该文件内导出的那个 对象数据类型
 */

// 导入 b.js 文件
// 在 b.js 文件内导出的对象，赋值给了 变量 modules
const modules = require('./b')
console.log(modules)
modules.showStr()