window.onload = function () {


    // 顶部导航
    let home = document.getElementById('home');

    home.onmouseenter = function () {
        home.style.color = '#f543df'
    };
    home.onmouseleave = function () {
        home.style.color = '#ffffff'
    };


    //动画轮播
    let rightBtn = document.querySelector('.right-button');
    let leftBtn = document.querySelector('.left-button');
    let bannerImg = document.querySelectorAll('.neck-img > li');

    let w = bannerImg[0].offsetWidth;
    let current = 0, next = 0;

    //右箭头动作
    let flag = true;
    rightBtn.onclick = function () {
        if (!flag){
            return
        } ;
        flag = false;
        next++;
        if (next == bannerImg.length){
            next = 0;
        }
        bannerImg[next].style.left = w + 'px';

        animate(bannerImg[current],{left:-w});
        animate(bannerImg[next],{left:0},function () {
         flag = true;
        });

        bannerPointer[current].classList.remove('hot');
        bannerPointer[next].classList.add('hot');

        current = next;
    };

    //左箭头动作
    leftBtn.onclick = function () {
        next--;
        if (next < 0){
            next = bannerImg.length - 1;
        }
        bannerImg[next].style.left = -w + 'px';

        animate(bannerImg[current],{left:w});
        animate(bannerImg[next],{left:0});
        current = next;
    };

    setInterval(rightBtn.onclick,2000);


    //轮播图下面的几个小疙瘩
    let btnList = document.getElementsByClassName('button-list');
    let bannerPointer = btnList[0].getElementsByTagName('li');
    let activeColor = '#4386f5', disactiveColor = '#fff';

    for (let i = 0; i < bannerPointer.length; i++) {
        bannerPointer[i].onmouseenter = function () {
            this.style.backgroundColor = activeColor
        };
        bannerPointer[i].onmouseleave = function () {
            this.style.backgroundColor = disactiveColor
        };
    }

    for (let i=0;i<bannerPointer.length;i++){
        bannerPointer[i].onclick = function () {
            if(current === i){
                return;
            }
            next = i;

            if (next > current){
                bannerImg[next].style.left = w + 'px';
                animate(bannerImg[current],{left:-w});
                animate(bannerImg[next],{left:0});
            } else{
                bannerImg[next].style.left = -w + 'px';
                animate(bannerImg[current],{left:w});
                animate(bannerImg[next],{left:0});
            }

            bannerPointer[current].classList.remove('hot');
            bannerPointer[next].classList.add('hot');

            current = next;
        }
    }




    // 个人博客日志
    let diaryList = document.getElementsByClassName('d-l-list')[0];
    let listLi = diaryList.getElementsByTagName('li');

    for (let i = 0; i < listLi.length; i++) {
        listLi[i].onclick = function () {
            for (let j = 0; j < listLi.length; j++) {
                listLi[j].style.borderBottom = 'none'
            }
            this.style.borderBottom = '1px solid #000';
        }
    }
    // 个人博客日志五个内容中的
    let tabList = document.querySelector('.d-l-b-tab > li');
    let tabLists = document.querySelectorAll('.d-l-b-tab > li');
    console.log(tabLists);
    tabLists.forEach(function (elem, index) {
        elem.onmouseenter = function () {
            for (let i = 0; i < tabLists.length; i++) {
                tabLists[i].classList.remove('hot');
            }
            this.classList.add('hot')

        }
    })

    // //轮播图
    //     // let index = 0;
    //     //
    //     // //右箭头
    //     // rightBtn.onclick = function () {
    //     //     index++;
    //     //     if (index === bannerImg.length) {
    //     //         index = 0;
    //     //     }
    //     //     bannerImg.forEach(function (ele) {
    //     //         ele.style.zIndex = 1;
    //     //     });
    //     //     Array.prototype.forEach.call(bannerPointer,function(elem){
    //     //         elem.classList.remove('hot');
    //     //     });
    //     //     bannerPointer[index].classList.add('hot');
    //     //     bannerImg[index].style.zIndex = 999;
    //     // };
    //     //
    //     // // 左箭头
    //     // leftBtn.onclick = function () {
    //     //     index--;
    //     //     if (index < 0) {
    //     //         index = bannerImg.length - 1;
    //     //     }
    //     //     bannerImg.forEach(function (ele) {
    //     //         ele.style.zIndex = 1;
    //     //     });
    //     //     Array.prototype.forEach.call(bannerPointer,function(elem){
    //     //         elem.classList.remove('hot');
    //     //     });
    //     //     bannerPointer[index].classList.add('hot');
    //     //     bannerImg[index].style.zIndex = 999;
    //     // };

    // 轮播图片
    // let bannerLeft = document.querySelector('.bannerLeft')
    // let t = setInterval(rightBtn.onclick,1000);
    //
    // bannerLeft.onmouseenter = function () {
    //     clearInterval(t);
    // };
    // bannerLeft.onmouseleave = function () {
    //     t = setInterval(rightBtn.onclick,1000);
    // };
    // for (var i=0;i<bannerPointer.length;i++){
    //     bannerPointer[i].onclick = function () {
    //         Array.prototype.forEach.call(bannerPointer,function (elem) {
    //             elem.classList.remove('hot');
    //         });
    //         bannerImg.forEach(function (ele) {
    //             ele.style.zIndex = 1;
    //         });
    //         this.classList.add('hot');
    //         bannerImg[index].style.zIndex = 999;
    //     }
    // }


    let viewH = window.innerHeight;
    let imgs = document.querySelectorAll('.lazyload');
    let positionArr = [];
    imgs.forEach(function (ele) {
        let parent = ele.offsetParent;
        positionArr.push(parent.offsetTop + ele.offsetTop)
    });

    window.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        for (let i=0;i<positionArr.length;i++){
            if (scrolltop + viewH >= positionArr[i] + 100){

                if (!imgs[i].src){
                    imgs[i].src = imgs[i].getAttribute('aa')
                }
            }
        }
    }


};