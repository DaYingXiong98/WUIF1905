$(function () {

    let table = $('tbody');
    let progressBar = $('progress-bar');

    $(document).ajaxStart(function () {
        console.log('start');
        progressBar.css({width:'30%',display: 'block'})
    });
    $(document).ajaxSuccess(function () {
        console.log('success');
        progressBar.css({width:'100%'})
    });
    progressBar.on('webkitTransitionEnd',function () {
        $(this).css({display:'none',width:0})
    });



    // 获取数据
    $.ajax({
        url:'php/query.php',
        type:'GET',
        async:true,
        dataType:'json',
        success:function (res) {
            let {code,data} = res;
            console.log(data);
            if (res.code){
                render(data);
            } else{

            }
        }
    });


    // 渲染render
    function render(data){
        let html = '';
        data.forEach(ele=>{
            html +=`
            <tr id="${ele.id}">
                <td><input type="text" value="${ele.names}" data-type=""></td>
                <td><input type="text" value="${ele.sex}"></td>
                <td><input type="text" value="${ele.age}"></td>
                <td><input type="text" value="${ele.major}"></td>
                <td><button class="btn btn-warning btn-sm">删除</button></td>
            `
        });
        table.html((index,value()))
    }

    /*
        增删改查
        url type async data datatype success error
     */

    // 增加数据库
    function arrayTojson(data) {
        let obj = {};
        data.forEach(ele=>{
            let {name,value} = ele;
            obj[name] = value
        });
        return obj;
    }

    $('[type=submit]').on('click',function (e) {
        e.preventDefault();
        let qs = ('form');
        let data = $('form').serializeArray();

        $.ajax({
            url:'php/insert.php',
            type:'POST',
            data:qs,
            datatype:'json',
            success:function (res) {
                if (res.code){
                    let obj = arrayTojson()
                }
            }

        })
    });

    // 删除数据库
    table.on('click','button',function () {
        let tr = $(this).closest('tr');
        let id = tr.attr('id');
        $.ajax({
            url: 'php/delete.php',
            type: 'POST',
            data:{id},
            dataType: 'json',
            success:function (res) {
                let {code,msg} = res;
                if (code == 1){
                    tr.remove();
                    tr = null;
                } else{

                }
            }
        })
    });

    // 修改数据库
    table.on('blur','input',{},function (e) {
        let id = $(this).closest('tr').attr('id');
        let val = $(this).val();
        let type = $(this).data('type');
        // ajax
        $.ajax({
            url:'../php/update.php',
            data:{type,val,id},
            dataType:'json',
            success:function (res) {
                let {code,msg} = res;
                console.log(code , msg);
            }
        });
    });


});