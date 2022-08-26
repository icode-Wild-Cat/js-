// 我是一个 b.js 文件，我有一些内容可能需要给别人使用
const num = 100
const str = "hello,nodejs"
function fn (){
    console.log(str)
}

// 1.我想被别人使用的
// 我需要暴露出去
// 我要在自己的文件内进行导出
/**
 * 语法：
 *  + module.exports = { 书写你要导出的内容 }
 */

// 我要导出的整体内容
// 谁导入我，谁就可以得到下面这个对象

// CommonJS 模块
module.exports = {
    // 
    num : num,
    showStr : fn

}