//轮播图的逻辑代码
console.log('代码引入成功')
/*
    思路：
    0.获取元素
      => imgBox:承载图片的盒子
      => pointBox：承载焦点的盒子


    1. 根据图片创建焦点（选做）
      => 你如果自己调整好的样式，可以不做这一步
      => 如果你希望将来简单一些。那么现在可以做这一步
     1-1.确定我需要生成多少个焦点
      -> imgBox内有多少个li，就是有多少个图片
      -> 就应该生成多少个焦点
      -> 获取到 imgBox 内有多少个 li
     1-2. 如何生成焦点
      -> 根据 pointNum 循环
      -> 每循环一次，创建一个 li 标签
      -> 插入到 pointBox 内部
     1-3. 重新调整一下 pointBox 的宽度（选做）


    2. 复制一份元素（选做） 
      => 你可以手动复制，然后通过调整 css 的方式来实现
      2-1.拿到要复制的元素去克隆一份
       -> imgBox 内的第一个子元素
       -> imgBox 内的最后一个子元素
      2-2.插入指定的父元素内
       -> first 插入到 imgBox 内的最后一个，appendchild()
       -> last 插入到 imgBox 内的第一个，insertBefore()
      2-3.调整一下 imgBox 的宽度
       -> 本身设置的时候，是设置的 五个图片的宽度
       -> 为了循环播放，我们复制了两个元素放进去
       -> 导致子元素变成了 7 个，宽度不够了
       -> 根据最新的子元素的数量来设置宽度
      2-4.调整一下 imgBox 的 left值
       -> 让真实的第一张显示在可视窗口内
       -> 将 imgBox 向负方向 移动一段距离
       -> 走多少，一个 li 的宽度
       -> 一个 li 就是一个 可视窗口的宽度
       -> 只要拿到可视窗口的宽度


    3. 开始自动轮播
     => 每间隔一段时间，让 imgBox 移动一段距离
     => 达到切换下一张的效果
     => 问题1：如何让 imgBox 移动一段距离
      -> 运动函数
     => 问题2：什么时候让 imgBox 移动一段距离？
      -> 每间隔一段固定的时间移动一次
      -> setInterval()
     => 问题3：运动的目标位置是多少？
      -> 当前显示的是 【1】的那一张，imgBox 的 left 是 -600px
      -> 当前显示的是 【2】的那一张，imgBox 的 left 是 -1200px
      -> 当前显示的是 【3】的那一张，imgBox 的 left 是 -1800px


    4.运动结束
     => 需要在运动结束以后，让 imgBox 瞬间定位到真实第一张的位置
     => 每一次运动完都要定位吗
     => 问题：什么时候需要瞬间定位 ？
      -> 假的第一张运动完毕以后
      -> 假的第一张索引是多少， imgBox.children.length - 1
     => 需要让焦点跟随一起切换
      -> 让 pointBox 内所有子元素都没有 active 类名
      -> 只有索引和 图片 配套的这一张有 active 类名
      -> 如何配套
       图片： 0 1 2 3 4 5 6
       焦点：   0 1 2 3 4


    5.移入移出
     => 需要绑定一个移入移出事件
     => 移入的时候，停止自动轮播
     => 移出的时候，再次开始自动轮播
     => 问题：移入移出谁的时候，执行这个操作？
      -> 整个可视区域，banner


    6.点击切换
     => 左按钮：点击事件
     => 右按钮：点击事件
     => 焦点事件：点击事件
     => 事件委托：委托给 banner


    7. 解决切换标签页时的问题
     => 问题：当你切换标签页，会导致页面混乱 ？
      -> 当你离开当前页面的时候，页面上的任何 DOM 是绝对不允许移动的
      -> 你的索引 DOM 操作是无效的，因为这个原因，浏览器会把你的 DOM 操作 保留
      -> 当时当你离开当前页面的时候，定时器不会听
     => 解决：
      -> 只要离开页面的时候，关闭定时器
      -> 回到页面的时候再次开启自动轮播
     => 问题2：如何判断离开页面了 ？
      -> 有一个事件，叫做 visibilitychange 事件
      -> 只能绑定给 document
      -> 当文档流的可视程度改变的时候会触发
     => 问题3：你怎么知道是离开还是回来 ？
      -> document 身上有一个属性，叫做 visibilitystate
      -> 当你离开的时候，值是 hidden
      -> 当你回来的时候，值是 visible


    8. 点击过快抖动问题
     => 问题：当你点击过快的时候，会出现抖动问题
    


*/

// 0.获取元素
const banner = document.querySelector('.banner')
const imgBox = document.querySelector('.imgBox')
const pointBox = document.querySelector('.pointBox')

//拿到 可视区的 宽度
//元素.clientWidth,获取到的是元素 内容 ***content_width + padding***
const banner_width = banner.clientWidth
//接收定时器返回值
let timer = 0
//准备一个变量，表示当前第几张，默认是 1
let index = 1

// 点击开关
let flag = true


// 1.创建焦点
setPoint()
function setPoint() {
    // 1-1.获取到 imgBox 内有多少 li
    // 元素.children, 获取到的是一个伪数组，是该元素下的所有子元素
    
    const pointNum = imgBox.children.length 
    console.log(pointNum)

    // 1-2.根据 pointNum 循环
    for(var i=0;i<pointNum;i++){
        // 创建一个 li 标签
        // 创建节点：document.createElement('标签名')
        const li = document.createElement('li')

        // 给每一个 li 添加一个类名
        li.classList.add('point_item')

        // 给每一个 li 添加一个自定义属性，就是当前这个 li 的索引
        li.dataset.point = i

        // 默认第一个 li 有一个 active 类名
        if(i===0)li.classList.add('active')

        // 插入到 pointBox 内部
        // 父元素.appendchild(子元素)
        pointBox.append(li)
    } 
     
    // 1-3.重新调整 pointBox 的宽度
    pointBox.style.width = (20 + 10) * pointNum + 'px'
    imgBox.style.width = pointNum * 100 + '%'
}

// 2.复制元素
copyEle()
function copyEle() {
    // 2-1.拿到要复制的子元素去克隆一份
    // 元素.cloneNode(true) 连带后代元素一起克隆
    const first = imgBox.firstElementChild.cloneNode(true)
    const last = imgBox.lastElementChild.cloneNode(true)


    // 2-2.插入指定的位置
    imgBox.appendChild(first)
    imgBox.insertBefore(last,imgBox.firstElementChild)

    // 2-3.调整 imgBox 的宽度
    imgBox.style.width = imgBox.children.length * 100 + '%'

    // 2-4.调整 imgBox 的 left
    imgBox.style.left = -banner_width + 'px'

}

// 3.自动轮播
autoPlay()
function autoPlay() {
    //每间隔一段时间切换一次
    timer = setInterval(()=>{
        //改变当前是第几张
        index++
        
        //切换一张
        move(imgBox,{ left: - banner_width*index},()=>moveEnd())
    },5000)

}

// 4.运动结束
function moveEnd() {
    // 4-1.判断来到了假的第一张，真实的最后一张
    if( index === imgBox.children.length -1 ){
        //瞬间定位，定位回到索引第[1]张
        index = 1
        imgBox.style.left = -banner_width * index + 'px'
    }
    // 4-2.()判断来到了假的最后一张，真实的第一张
    if( index === 0 ){
        index = imgBox.children.length -2
        imgBox.style.left = -banner_width * index + 'px' 
}



// 4-3.焦点配套一起走
for(let i=0;i<pointBox.children.length;i++){
    pointBox.children[i].classList.remove('active')
}
pointBox.children[index-1].classList.add('active')
}

// 5.移入移出
overOut()
function overOut() {
    // 5-1.移入事件
    banner.addEventListener('mouseover',()=>clearInterval(timer))
    banner.addEventListener('mouseout',()=>autoPlay())
}

// 6.点击切换
change()
function change() {
    // 6-1.给 banner 绑定点击事件，进行事件委托
    banner.addEventListener('click',e=>{
        //处理事件对象兼容
        e = e || window.event
        //处理事件目标兼容
        const target = e.target || e.srcElement

        //判断点击是哪一个按钮
        if(target.className === 'left'){
            if(!flag)return
            flag = false
            console.log('左按钮，切换上一张')
            index--
            move(imgBox,{ left: - banner_width*index },()=>moveEnd())
        }
        if(target.className === 'right'){
            if(!flag)return
            flag = false
            console.log('右按钮，切换下一张')
            index++
            move(imgBox,{ left: - banner_width*index},()=>moveEnd())
        }
        if(target.className === 'point_item'){
            if(!flag)return
            flag = false
            console.log('焦点按钮，切换到每一张')
            // 你怎么知道你点击的 li 的索引是 多少
            // 可以在渲染页面的时候，把 li 的索引以自定义属性的形式记录在 li 身上
            index = parseInt(target.dataset.point) + 1
            console.log(index)
            move(imgBox,{ left: - banner_width*index},()=>moveEnd())


        }
        flag = true
    })
} 

// 7. 切换标签页
changeTab()
function changeTab() {
    // 7-1. 给 document 绑定一个事件
    document.addEventListener('visibilitychange',()=>{
        console.log(document.visibilityState)
        if(document.visibilityState === 'hidden'){
            clearInterval(timer)
        }else if(document.visibilityState === 'visible'){
            autoPlay()
        }
    })

}