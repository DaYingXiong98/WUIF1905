<?php

$mysql = new mysqli('localhost','root','',
                    'wuif1905','3306');
if ($mysql->connect_errno){
    echo '数据库连接失败，失败原因是' . $mysql->connect_errno;
    exit();
}

$mysql->query('set names utf8');

$sql = "select * from student";

$result = $mysql->query($sql)->fetch_all(MYSQLI_ASSOC);

if (count($result)){
    echo json_encode([
        'code'=>1,
        'data'=>$result
    ]);
}else{
    echo json_encode([
        'code'=>0
    ]);
}