$(function () {
    let tou = $('.tou > li');
    let content = $('.content');


    tou.on('click',function () {
        let index = $(this).index();
        let type = $(this).attr('type');
        $(this).addClass('hot').siblings('li').removeClass('hot');
        content.css({display:'none'}).eq(index).css({display:'block'});


    })
    tou.triggerHandler('click');
    
    function WWW(type,index) {
        let xml = new XMLHttpRequest();
        xml.open('GET','TodolistW.php?type=' + type);
        xml.send();
        xml.onreadystatechange;
    }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function txt(T) {
        let html = '';
        T.forEach(function (ele) {
            if (ele,status);
        });
    }

})