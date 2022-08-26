//我专门用来实现 顶部导航 功能
//购物车
function fn() {
  console.log('fn')
}
function fn2() {
  console.log('fn2')
}
//前提：你使用的是模块化语法
//注意，这个 fn 函数，只能在 a.js 文件里面使用
//别的任何文件不能使用
//想让别的文件使用
//需要在该文件中做一个导出，（暴露）
export default {
  fn,
  fn2
}