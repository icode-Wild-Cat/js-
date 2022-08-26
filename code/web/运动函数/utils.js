// function move(ele, target, fn) {
//     let count = 0
//     for(let k in target) {
//         count++
//         const timer = setInterval(() =>{
//             let current 
//             if(k=== 'opacity'){
//                 current = window.getComputedStyle(ele)[k] * 100
//             } else {
//                 current = parseInt(window.getcomputedstyle(ele)[k])
//             }
//             let distance = ( target[k] - current) / 10
// distance = distance > 0 ? Math.ceil(distance) : Math.floor(distance)
// if (current === target[k]){
// clearinterval(timer)
// count--
// if ( count =z= 0) fn()}
// else {if (k === 'opacity' ){
// ele.style[k] = (current + distance)/100
// } else {
// ele.style[k] = current + distance + 'px'}
// }},20)}}
// 参数1: 运动的标签对象
// 参数2: 对象形式 属性是要运动的css属性 属性值是要运动的css样式的最终值
// 参数3: 存储要执行的函数程序 默认值是空函数


function move(element, object, callback) {
    // 定义一个变量 存储 参数2 对象中 单元个数
    let num = 0;

    // 使用 for...in 循环遍历 参数2对象
    // 定义的变量 存储对象的键名 也就是 left,top.width,height,opacity...
    // 对象[变量] 获取对象键名存储的键值 也就是 最终值 500 300 0.3....
    // 当前变量必须要使用 let 关键词来定义
    for (let type in object) {
        // 每次循环 给 变量累加1 表示对象参数有一个单元
        num++;

        // 之前的type参数是 现在 for..in循环 type变量
        // 之前的最终值是   现在 对象[变量] 获取的数据

        // 获取运动属性的初始值
        // 如果是 透明度 直接获取结果 * 100
        // 不是   透明度 结果 parseInt() 取整
        let startVal = type === 'opacity' ? window.getComputedStyle(element)[type] * 100 : parseInt(window.getComputedStyle(element)[type]);

        // 如果 是   透明度 最终值 * 100 
        // 如果 不是 透明度 最终值就是本身
        // 之前的最终值 是 当前 对象参数中,属性存储的属性值
        let endVal = type === 'opacity' ? object[type] * 100 : object[type];

        // 设定定时器
        let time = setInterval(function () {
            // 计算步长
            let step = (endVal - startVal) / 10;

            // 步长取整 
            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            // 初始值累加步长值
            startVal += step;

            // 新的初始值 赋值给标签对象的css
            // 如果是   透明度 赋值 当前累加之后的初始值 除以 100
            // 如果不是 透明度 赋值 当前累加之后的初始值 拼接 px单位
            element.style[type] = type === 'opacity' ? startVal / 100 : startVal + 'px';

            // 判断 如果初始值 等于 最终值
            if (startVal === endVal) {
                // 清除定时器
                clearInterval(time);
                // 给 变量 --
                num--;

                // 当num数值是 0 时 
                // 表示所有执行的定时器都被清除了
                // 也就是所有css运动都执行结束了
                if (num === 0) {
                    // 执行回调函数
                    callback();
                }
            }
        }, 20)
    }
}


// move(oDiv , {left:100,top:100,width:200,height:200,opacity:0.5} , function(){console.log(111)});

