$(function () {
    let rightBtn = $('.right-button');
    let imgl = $('.lun-img > li');
    let bannerList = $('.button-list > li')
    let next = 0,current =0,flag = true;
    let imgWidth = imgl[0].clientWidth;
    console.log(imgWidth);
    imgl.css({left:imgWidth}).eq(0).css({left:0});
    //点击切换
    rightBtn.click(function () {
        if (!flag){
            return;
        }
        flag = false;
        next++;
        if (next == imgl.length){
            next = 0;
        }
        $(imgl[next]).css('left',imgWidth);

        imgl.eq(current).animate({left:-imgWidth});
        imgl.eq(next).animate({left:0},function () {
            flag = true;
        });
        bannerList.eq(current).removeClass('.hot').end().eq(next).addClass('.hot');
        current = next;
    });
    //自动轮播
    let t = setInterval(function () {
        rightBtn.triggerHandler('click')
    },2000);
    // 鼠标移入停止
    bannerList.mouseenter(function () {
        clearInterval(t);
    });

    bannerList.mouseenter(function () {
        t = setInterval(function () {
            rightBtn.triggerHandler('click')
        },3000);
    });
});
