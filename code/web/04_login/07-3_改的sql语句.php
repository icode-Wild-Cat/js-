<?php
    /*
        改的 sql 语句
            书写方式：
                => UPDATE `表` SET 字段1=值,字段2=值 WHERE 条件
               
            
    */
    // 准备sql语句
    $sql = "UPDATE `users` SET`username`='lisi' WHERE `user_id`=1";


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