<?php
    /*
        增的 sql 语句
            书写方式1：
                => INSERT INTO `表` VALUES(数据1，数据2...)
            书写方式2：
                => INSERT INYO `表` (字段1，)
    */
    // 准备sql语句
    $sql = "INSERT INTO `users` VALUES(null,'lisi','123456','xiaosi','sdwefweafewf')";


    // 1,建立连接
    $link = mysqli_connect('localhost','root','root','shadouyou');

    // 2.操作数据库
    $res = mysqli_query($link,$sql);

    // 3，解析结果
    // $data = mysqli_fetch_all($res,MYSQLI_ASSOC);
    
    // 4. 关闭连接
    mysqli_close($link);

    // 输出看一下
    var_dump($res);
?>