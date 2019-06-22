<?php

//1.接受前台的数据
$user = $_POST['username'];
$pass = md5($_POST['password']);

//2.从数据库查询
$mysql = new mysqli('localhost','root','','wuif1905','3306');

if ($mysql->connect_errno){
    echo '数据库连接失败，失败原因' . $mysql->connect_errno;
    exit();
}

$mysql->query("set names utf-8");

$sql = "SELECT * FROM manager";

$result = $mysql->query($sql)->fetch_all(MYSQLI_ASSOC);
//3.与数据库验证
for ($i=0;$i<count($result);$i++){
    $ele = $result[$i];
    if ($ele['names'] === $user && $ele['password'] === $pass){
        echo '登入成功';
        echo json_encode([
            'code'=>1,
            'msg'=>'登入成功'
        ]);
    }else{
        echo '登入失败';
        echo json_encode([
            'code'=>0,
            'msg'=>'登入失败'
        ]);
    }
}
