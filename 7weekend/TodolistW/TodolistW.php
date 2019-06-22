<?php
    $Van = [
        ['id'=>1 , 'content'=>'明天不上课' , 'times'=>'2019/6/17' , 'status'=>false ],
        ['id'=>2 , 'content'=>'明天不上课' , 'times'=>'2019/6/17' , 'status'=>false ],
        ['id'=>3 , 'content'=>'明天不上课' , 'times'=>'2019/6/17 ', 'status'=>false ],
];
    $vAn= [
        ['id'=>1 , 'content'=>'明天上不上课' , 'times'=>'2019/6/17' , 'status'=>false ],
        ['id'=>2 , 'content'=>'明天不上课' , 'times'=>'2019/6/17' , 'status'=>false ],
        ['id'=>3 , 'content'=>'明天不上课' , 'times'=>'2019/6/17 ', 'status'=>false ],
];
    $vaN = [
        ['id'=>1 , 'content'=>'明天上不上课吧' , 'times'=>'2019/6/17' , 'status'=>false ],
        ['id'=>2 , 'content'=>'明天不上课' , 'times'=>'2019/6/17' , 'status'=>false ],
        ['id'=>3 , 'content'=>'明天不上课' , 'times'=>'2019/6/17 ', 'status'=>false ],
];

    $type = $_GET['type'];

    switch($type){
        case'Van':
            echo json_encode($Van);
            break;
        case'vAn':
            echo json_encode($Van);
            break;
        case'vaN':
            echo json_encode($Van);
            break;
    }