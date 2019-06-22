<?php

$val = $_GET['val'];
$type = $_GET['type'];
$id = $_GET['id'];

$sql = "UPDATE student SET $type='$val' WHERE id=$id";

$mysql->query($sql);

$rows = $mysql->affected_rows;

if ($rows == 1) {
    echo json_encode([
        'code' => 1,
        'msg' => '更新数据表成功'
    ]);
}else {
    echo json_encode([
        'code' => 0,
        'msg' => '更新数据表失败'
    ]);
}