//导入 a.js 文件
//moduleA 变量的值
//就是 a.js 文件中，写在 export default 后面的 对象
import module from '../modules/a.js'
console.log(module.fn)
module.fn()
console.log(module.fn2)
module.fn2()