window.addEventListener('load',function () {

    let tab = document.querySelectorAll('.tab>li');
    let prev = 0;
    let content = document.querySelector('.content');
    let type = 'all';
    let Todolist = [
        {
            id:1,content:'端午节要交作业',ctime:'2019/6/5',status:false
        },
        {
            id:2,content:'端午节要交作业',ctime:'2019/6/6',status:false
        },
        {
            id:3,content:'鸡鸡不知道，不关鸡鸡的事',ctime:'2019/6/7',status:true
        },
        {
            id:4,content:'端午节要交作业',ctime:'2019/6/8',status:false
        },
        {
            id:5,content:'鸡鸡复鸡鸡',ctime:'2019/6/9',status:true
        },
        {
            id:6,content:'端午节要交作业',ctime:'2019/6/10',status:false
        }
    ];

    let str = localStorage.getItem('Todolist');
    if (!str){
        saveData();
        str = localStorage.getItem('Todolist');
    }
    Todolist = JSON.parse(str);

    tab.forEach(function (ele,index) {
        ele.onclick = function () {
            tab[prev].classList.remove('hot');
            this.classList.add('hot');
            prev = index;
            type = this.getAttribute('type');
            render(filterData(type))
        }
    });
    tab[0].onclick();

    content.onclick = function (e) {
        let target = e.target;
        let id = target.parentNode.id;
            if (target.nodeName ==='DEL'){
                let index = Todolist.findIndex(ele=>ele.id ==id);
                Todolist.splice(index,1)
            }else if(target.nodeName === 'INPUT'){
                let ele = Todolist.filter(ele => ele.id == id)[0];
                ele.status = target.checked;

            }
        render(filterData(type));
    };


    //提交内容///////
    let forms = document.forms[0];
    let textBtn = forms.elements[0];
    let submitBtn = forms.elements[1];
    console.log(textBtn);
    submitBtn.onclick = function (e) {
        e.preventDefault();
        let obj = createObj();
        Todolist.push(obj);
        forms.reset();
        render(filterData(type));
        saveData();
    };
    //////////////////////////////////////
    function saveData() {
        localStorage.setItem('Todolist',JSON.stringify(Todolist))
    }
    /////////////////////////////////////
    function createObj() {
        let id = Todolist[Todolist.length-1].id + 1;
        let content = textBtn.value;
        console.log(content);
        let ctime = new Date().toLocaleDateString();
        let status = false;
        return{id,content,ctime,status}
    }
    ////////////////////////////////////////////////////////////
    function filterData(type) {
        let arr = [];
        switch (type) {
            case 'all':
                arr = Todolist;
                break;
            case 'done':
                arr = Todolist.filter(ele => ele.status);
                break;
            case 'doing':
                arr = Todolist.filter(ele => !ele.status);
                break;
        }
        return arr;
    }

    //渲染列表Render//////////////////////////////////////////

    render(Todolist);
    function render(arr) {
        let html = ``;
        arr.forEach(ele => {
            if (ele.status){
            html +=`
            <li id="${ele.id}">
                <input type="checkbox" checked="checked"> 
                <p>${ele.content}</p> 
                <del>X</del>    
                <time>${ele.ctime}</time>
            </li>
            `;
            }else{
            html += `
            <li id="${ele.id}">
                <input type="checkbox" > 
                <p>${ele.content}</p>
                <del>X</del>   
                <time>${ele.ctime}</time>
            </li>
            `;
            }
        });

        content.innerHTML = html;

    }

    //遍历判断框
    let checkboxs = document.querySelectorAll('input[type=checkbox]');
    checkboxs.forEach(elem=>{
        elem.onclick = function () {
            let id = this.parentElement.id;
            let arr = Todolist.filter(elem=>elem.id==id)[0];
            arr.status = !arr.status;
        }
    })


});