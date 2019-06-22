$(function () {

    let Poker = [];
    let colorArr = ['s', 'h', 'd', 'c'];
    let flag = {};
    let Pad = $('.Pad');

    //产生扑克牌
    for (let i = 0; i < 52; i++) {
        let index = Math.floor(Math.random() * colorArr.length);
        let color = colorArr[index];
        let number = Math.round(Math.random() * 12 + 1);

        while(flag[color+'_'+number]){
            index = Math.floor(Math.random() * colorArr.length);
            color = colorArr[index];
            number = Math.round(Math.random() * 12 + 1);
        }

        Poker.push({color, number});
        flag[color+'_'+number] = true;
    }
    console.log(Poker);

    let index = -1;
    for (let i=0;i<8;i++){
        for (let j=0;j<=i;j++){
            index++;
            let obj = Poker[index];
            let lefts = 450-50 * i + 100 * j , tops = 50 * i;
            $('<div>')
                .addClass('Poke')
                .css({backgroundImage:`url(../imgs/${obj.number}${obj.color}.jpg)`})
                .appendTo('.Pad')
                .data('number' , obj.number)
                .attr('id',i+'_'+j)
                .delay(index*100)
                .animate({left:lefts,top:tops,opacity:1})
        }

    }

    for (;index<52;index++){
        let obj = Poker[index];
        let lefts = 20*(index - 30);
        $('<div>')
            .addClass('Poke')
            .addClass('left')
            .css({backgroundImage:`url(../imgs/${obj.number}${obj.color}.jpg)`})
            .appendTo('.Pad')
            .attr('id','-2_-2')
            .data('number' , obj.number)
            .delay(index*120)
            .animate({left:lefts,top:550,opacity:1})
    }
    // 牌定位
    let first = null;
    Pad.on('click','.Poke',function () {

        let _this = $(this);
        let [i,j] = _this.attr('id').split('_');
        let id1 = i*1 + 1+ '_' +j , id2 = i*1 + 1 + '_' +(j*1+1);
        console.log(1);
        if ($('#' + id1).length || $('#' + id2).length) {
            return;
        }
        // $(this).animate({top:'-=30px'});
        if (_this.hasClass('active')){
            $(this).removeClass('active').animate({top:'+=30px'})
        }else{
            $(this).addClass('active').animate({top:'-=30px'})
        }
        // 两张牌是否和为14
        if (!first){
            first = _this;
        }else{
            console.log(first);
            let number1 = first.data('number') , number2 = _this.data('number');


            if (number1 + number2 === 14){
                $('.active').animate({top:0,left:800,opacity:0},function () {
                    $(this).remove();
                });
            } else{
                $('.active').animate({top:'+=30px'},function () {
                    $(this).removeClass('.active');
                })
            }
            first = null;
        }
    });
    // 切牌
    let n = 0;
    let rightBtn = $('.right');
    let flag1 = true;
    console.log(rightBtn);
    rightBtn.on('click',function () {
        console.log(1);

        console.log(flag1);
        if (!flag1){
            return
        }
        flag1 = false;
        $('.left').last().css('zIndex',n++).animate({left:710+(n*10)},function () {
                $(this).removeClass('left').addClass('right')
                flag1 = true;
        })


    })
});