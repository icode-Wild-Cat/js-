<?php
    /*
        删的 sql 语句
            书写方式：
                => DELETE FROM `表` WHERE 条件
                => 全删：DELETE FROM `表` 
            
    */
    // 准备sql语句
    $sql = "DELETE FROM `users` WHERE `user_id`=15";


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