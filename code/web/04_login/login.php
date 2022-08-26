<?php

    /*
        登录 - 后端逻辑
         1.接受
    */

    /*
        任何接受前端的请求
         + 在 PHP 内有两个天生的关联型数组
          => $_GET
          => $_POST
          => 存储的就是前端携带过来的数据
         + 例子：前端以 GET 方式发来请求，?username=Jack&password=123456
          => $_GET 就是一个数组 ["username"=>"Jack","password"=>"123456"]
         + 例子：前端以 POST 方式发来请求，username=Jack&password=123456
          => $_POST 就是一个数组 ["username"=>"Jack","password"=>"123456"]
    */
// GET
    // // 1.如何接受参数
    // $username = $_GET['username'];
    // $password = $_GET['password'];

    // // 2.验证
    // $t1 = 'zhangsan';
    // $t2 = '123456';

    // if($username == $t1 && $password == $t2){
    //     // 表示正确
    //     // 组装正确的数据
    //     $arr = [
    //         "message"=>"登录成功",
    //         "code"=>1
    //     ];
    // } else {
    //     // 表示错误
    //     // 组装错误的数据
    //     $arr = [
    //         "message"=>"用户名或密码错误",
    //         "code"=>0
    //     ];
    // }

    // // 代码能来到这，说明已经有了一个结果
    // // 3.只要把结果返回给前端就可以了
    // // 注意：把 php 的数据转换成 JSON 格式返回
    // // PHP 的 JSON 操作：json_encode()('编码') 和 json.decode()('解码')
    // echo json_encode($arr)

// POST
         // 1.如何接受参数
     $username = $_POST['username'];
     $password = $_POST['password'];
     // 2.验证
    //  去数据库进行比对
    // 2-1.建立连接
    $link = mysqli_connect('localhost','root','root','shadouyou');
    // 2-2.操作数据库查询
    $res = mysqli_query($link,"SELECT * FROM `users` WHERE `username`='$username' AND `password`='$password'");
    // 2-3.解析结果
    $data = mysqli_fetch_all($res,MYSQLI_ASSOC);
    // 2-4.关闭连接
    mysqli_close($link);

    // 问题：如何判断登录是否成功 ？
    // $data 内有数据，就是成功
    // 问题：如何获取数组的长度 ？
    // count(数组)  返回一个数字
    
    if(count($data)){
        $arr = [
            "massage"=>"登录成功",
            "code"=>1,
            "info"=>$data
        ];
    }else {
        // 表示没有长度
        $arr = [
            "massage"=>"登录失败",
            "code"=>0
        ];
    }

    //  $t1 = 'zhangsan';
    //  $t2 = '123456';
    //  if($username == $t1 && $password == $t2){
    //      // 表示正确
    //      // 组装正确的数据
    //      $arr = [
    //          "message"=>"登录成功",
    //          "code"=>1,
    //          "username"=>$username,
    //          "password"=>$password
    //      ];
    //  } else {
    //      // 表示错误
    //      // 组装错误的数据
    //      $arr = [
    //          "message"=>"用户名或密码错误",
    //          "code"=>0,
    //          "username"=>$username,
    //          "password"=>$password
    //      ];
    //  }
     // 代码能来到这，说明已经有了一个结果
     // 3.只要把结果返回给前端就可以了
     // 注意：把 php 的数据转换成 JSON 格式返回
     // PHP 的 JSON 操作：json_encode()('编码') 和 json.decode(
     echo json_encode($arr)

    
?>