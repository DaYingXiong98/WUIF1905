<?php
require_once 'db.php';

$keys = array_keys($_POST);

$sql = "INSERT INTO student (";

for ($i=0;$i<count($keys);$i++){
    $sql .= $keys[$i].',';
}

$sql = substr($sql,0,-1) .')values(';

foreach ($_POST as $key=>$value){
    $sql .="'$value',";
}
$sql = substr($sql,0,-1) .')';