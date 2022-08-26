<?php
    /*
        查的 sql 语句
            + 普通查询
             => SELECT * FROM `表`
             => * 表示查询所有字段
            + 只获取某些字段
             => SELECT 字段1字段2 FROM `表`
            + 条件查询
             => SELECT * FROM `表` WHERE 条件
            + 条件并列查询
             => SELECT * FROM `表` WHERE 条件1 AND 条件2
            + 或者条件查询
             => SELECT * FROM `表` WHERE 条件1 OR 条件2
            + 排序
             => SELECT * FROM `表` WHERE 条件 ORDER BY `字段` ASC （升序）
             => SELECT * FROM `表` WHERE 条件 ORDER BY `字段` DESC （降序）
            + 分页
             => SELECT * FROM `表` LIMIT 开始索引，多少个
            + 模糊查询
             => SELECT * FROM `表` WHERE `字段` LIKE '%关键字%'
             => SELECT * FROM `表` WHERE `字段` LIKE '%关键字'
             => SELECT * FROM `表` WHERE `字段` LIKE '关键字%'
             => SELECT * FROM `表` WHERE `字段` LIKE '_关键字_'  ( _ 代表一个字)

              


               
            
    */
    // 准备sql语句
    $sql = "SELECT * FROM `users` WHERE `username` LIKE '%zhang%'";


    // 1,建立连接
    $link = mysqli_connect('localhost','root','root','shadouyou');

    // 2.操作数据库
    $res = mysqli_query($link,$sql);

    // 3，解析结果
    $data = mysqli_fetch_all($res,MYSQLI_ASSOC);
    
    // 4. 关闭连接
    mysqli_close($link);

    // 输出看一下
    // 转成JSON输出
    echo json_encode($data)
?>