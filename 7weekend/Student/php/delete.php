<?php
require_once 'db.php';

$id = $_POST['id'];

$sql="delete from student where id=$id";

$mysql->query($sql);

$rows = $mysql->affected_rows;

if ($rows == 1) {
    echo json_encode([
        'code' => 1,
        'msg' => '删除成功'
    ]);
}else {
    echo json_encode([
        'code' => 0,
        'msg' => '删除失败'
    ]);
}
