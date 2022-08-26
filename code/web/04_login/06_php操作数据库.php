<?php
    /*

        1.和数据库建立连接
         + 语法：mysqli-connect(ip地,用户名,密码,你要操作哪一个库);
         + 返回值：数据连接信息

        2.操作数据库
         + 因为是 sql 类的数据库
          => 所用和数据库的相关操作都是 sql 语句
          => 在 php 内用的语法是一个方法
         + 例子：
          => 你需要删除数据库中的某一条信息，使用这个方法，执行 删除的 sql 语句
          ...
         + 语法：mysqli_query(连接信息，sql语句);
            => 连接信息：就是 mysqli_connect()的返回值
            => sql 语句：你要执行的 sql 语句
            => 简单的 sql 语句："SELECT * FROM `表名`";

        3.解析结果
         + 注意：sql 语句操作，只有查询语句 需要解析结果
          => 因为如果是 查询：返回的是 查询result
          => 如果是 增删改：返回的是 true 或 false
         + 语法：mysqli_fetch_all(查询结果，MYSQLI_ASSOC);
          => 查询结果：mysqli_query() 执行查询的sql语句的返回值
          => MYSQLI_ASSOC：解析成什么格式的数据

        4.关闭数据库的连接
         + 语法：mysqli_close(连接信息);
         + 注意：
         
       
    */

    // 1.建立数据库的连接
    $link = mysqli_connect('localhost','root','root','shadouyou');

    // 2.操作数据库
    $res = mysqli_query($link,"SELECT * FROM `users`");

    // 3.解析结果
    // 注意：只有查询的 sql 语句需要解析结果
    $data = mysqli_fetch_all($res,MYSQLI_ASSOC);

    // 4.关闭数据库连接
    mysqli_close($link);

    // print_r($data);

    // 转成JSON格式输出
    echo json_encode($data)

?> 