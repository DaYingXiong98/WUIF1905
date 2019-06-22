
$(function () {
    let box = $('.box');
    let flag = true;
    let black = {} ,white = {};
    let blank = {};
    let ai = true;
    // 生棋盘
    for (let i=0;i<25;i++){
        for (let j=0;j<25;j++){
            $('<div>').addClass('chess').attr('id',i+'_'+j).appendTo(box);
            blank[i+'_'+j] = true;
        }
    }
    // 下棋
    box.on('click' , '.chess' , function () {
        let _this = $(this);
        if (_this.hasClass('black') || _this.is('.white')) {
            return;
        }
        flag = !flag;
        let coords = _this.attr('id');

        if (flag){
            black[coords] = true;
            delete blank[coords];
            $(this).addClass('black');
            if(Victory(black , coords) >=5 ){
                console.log('黑棋胜');;
                box.off('click');
            }
        } else{
            white[coords] = true;
            delete blank[coords];
            $(this).addClass('white');
            console.log(white);
            if(Victory(white , coords) >=5 ){
                console.log('白棋胜');;
                box.off('click');
            }
            if (ai){
                let pos = AI();
                black[pos] = true;
                delete blank[pos];
                $('#' + pos).addClass('black');
                console.log(pos);
                if (Victory(black , pos) >=5){

                    box.off('click');
                    console.log('黑棋胜');;
                }
                flag = !flag;
            }
        }
    });

    // AI判断
    function AI() {
        let blankScore = 0 , whiteScore = 0;
        let pos1 = '' , pos2 = '';
        for (let i in blank){
            let score = Victory(black,i);
            if (score >= blankScore){
                blankScore = score;
                pos1 = i;
            }
        }
        for (let i in blank){
            let score = Victory(white,i);
            if (score >= whiteScore){
                whiteScore = score;
                pos2 = i;
            }
        }
        return blankScore >= whiteScore ? pos1 : pos2;
    }

    function Victory(obj,coords) {
        let sp=1 ,cz=1 ,yx=1 ,zx =1;
        let [x , y] = coords.split('_');
        let i = x*1,j = y*1;

        // sp
        while(obj[i + '_' + (++j)]){
            sp++;
        }
        j =y*1;
        while(obj[i+'_'+(--j)]){
            sp++;
        }
        j =y*1;

        // cz
        while(obj[++i + '_' + j]){
            cz++;
        }
        i = x*1;
        while(obj[--i + '_' + j]){
            cz++;
        }

        i = x*1;
        j = y*1;

        // yx
        while(obj[--i + '_' + (++j)]){
            yx++;
        }
        i = x * 1;j = y * 1;
        while(obj[++i + '_' + (--j)]){
            yx++;
        }
        i = x*1;j = y*1;
        // zx
        while (obj[--i+'_'+(--j)]){
            zx++;
        }
        i =x*1;j=y*1;
        while (obj[++i+'_'+(++j)]){
            zx++;
        }
        return Math.max(sp,cz,zx,yx);
    }
});