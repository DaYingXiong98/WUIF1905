$(function () {
    let SubmitBtn = $(':submit');
    // SubmitBtn.on('click',function () {
    //     let User = UserT.val(),Password = PassT.val();
    //     let xml = new XMLHttpRequest();
    //     xml.open('get','./php/login.php?user='+User+'&password='+Password);
    //     xml.send();
    //     xml.onload=function () {
    //         console.log(xml.response);
    //     }
    // })

    // url地址 method传参方法 参数(个数，名字，含义，值，默认) 返回结果(类型，含义)

    SubmitBtn.on('click',function (e){
        e.preventDefault();
        let qs = $('form').serialize();
        let xml = new XMLHttpRequest();
        xml.open('POST','php/login.php');
        xml.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xml.send(qs);
        xml.onload=function () {
            let {code,msg} = xml.response;
            if (code == 1){
                alert(msg);

            } else if(code == 0){
                alert(msg);
            }
            console.log(xml.response);
        }
    })

});