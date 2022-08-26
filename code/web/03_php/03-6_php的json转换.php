<?php
    /*
    php 的json转换
     + 因为任何一个语言，转换成 json 格式是一模一样的
     + 语法：json_encode(php的数据);
     */

    $arr =[
    ['id'=>1,'name'=>'Jack'],
    ['id'=>2,'name'=>'Tom'],
    ['id'=>3,'name'=>'Musk']
    ];

    // 把 PHP 的数据转换成 json 格式
    $json = json_encode($arr);

    // 转换成 json 以后，就是 字符串 格式了
    // 可以使用 echo 输出

    print_r($json);
?>