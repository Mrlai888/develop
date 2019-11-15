//获取随机整数
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// 随机颜色
function randomColor() {
    var col = '#';
    var strArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']; //0-15
    for (var i = 0; i < 6; i++) {
        col += strArr[randomInt(0, 15)];
    }
    return col;
}

// 通过类名获取元素
function byClass(cla) {
    var tags = document.all ? document.all : document.getElementsByTagName('*'); //兼容
    var arr = [];
    for (var i = 0; i < tags.length; i++) {
        if (tags[i].className === cla) { // 'abc red'?
            arr.push(tags[i]);
        }
    }
    return arr;
}

// 获取某个元素
// function $(selector) {
//     return document.querySelector(selector);
// }

// 获取元素样式
function getStyle(obj, attr) {
    if (obj.currentStyle) { //IE678
        return obj.currentStyle[attr];
    } else { //非IE678
        return getComputedStyle(obj, null)[attr];
    }
}

//获取元素到最外层的offsetLeft/offsetTop值
function offset(dom) {
    var l = 0,
        t = 0;
    while (dom) {
        l += dom.offsetLeft;
        t += dom.offsetTop;
        // dom = dom.parentNode;
        dom = dom.offsetParent;
        if (dom === document.body) {
            return { Left: l, Top: t };
        }
    }
}

// X和Y轴缓冲运动
function move(dom, target, callback) { //callback 一般用于移除节点
    dom.timerFire = null;
    clearInterval(dom.timerFire);
    dom.timerFire = setInterval(function() {
        // x轴运动
        var speedX = (target.left - dom.offsetLeft) / 10; //持续变化的速度
        speedX = speedX > 0 ? Math.ceil(speedX) : Math.floor(speedX); //对速度取整，避免数据丢失
        // 剩余的运动量 < 每次所走的运动量
        if (Math.abs(dom.offsetLeft - target.left) <= Math.abs(speedX)) {
            // clearInterval(dom.timerFire);
            dom.style.left = target.left + 'px'; //终点
        } else {
            dom.style.left = dom.offsetLeft + speedX + 'px';
        }

        // y轴运动
        var speedY = (target.top - dom.offsetTop) / 10; //持续变化的速度
        speedY = speedY > 0 ? Math.ceil(speedY) : Math.floor(speedY); //对速度取整，避免数据丢失
        // 剩余的运动量 < 每次所走的运动量
        if (Math.abs(dom.offsetTop - target.top) <= Math.abs(speedY)) {
            clearInterval(dom.timerFire);
            dom.style.top = target.top + 'px'; //终点
            callback(); //回调函数
        } else {
            dom.style.top = dom.offsetTop + speedY + 'px';
        }
    }, 20);
}

// 设置cookie
function setCookie(key, val, day) {
    if (day) {
        var d = new Date();
        d.setDate(d.getDate() + day);
        // escape  编码
        document.cookie = key + '=' + escape(val) + '; expires=' + d; //分号后面要加空格
    } else {
        document.cookie = key + '=' + escape(val); //escape一种编码
    }
}

// 获取cookie   获取控制台的值
function getCookie(key) {
    var arr1 = document.cookie.split('; ');
    for (var i = 0; i < arr1.length; i++) {
        var arr2 = arr1[i].split('=');
        if (arr2[0] == key) {
            // unescape  解码
            return unescape(arr2[1]);
        }
    }
    return '';
}

// 删除cookie
function removeCookie(key) {
    setCookie(key, '123', -2); //设置为过期
}



// ajax封装
/*
用法：
    ajax({
         type: "get",
         url: "http://localhost/test/day26/text2.json",
         data: "user=lai",
        success: function(response) {
                 console.log(response)
             }
         });
*/
function ajax(option) {
    if (window.XMLHttpRequest) {
        var xhr = new window.XMLHttpRequest()
    } else {
        var xhr = ActiveXObject(' Microsoft.XMLHTTP')
    }
    if (option.type === 'get' || option.type === 'GET') {
        // 打开与服务器的链接
        xhr.open(option.type, option.url + '?' + option.data + '&_=' + new Date().getTime(), true) //异步
            //发送请求
        xhr.send(null)
    } else if (option.type === 'post' || option.type === 'GET') {
        // 打开与服务器的链接
        xhr.open(option.type, option.url, true);
        //模拟表单post方法提交数据，设置在send之前
        xhr.setRequestHeader('Content-type","application/x-www-form-urlencoded')
            //发送请求
        xhr.send(data)
    } else {
        console.log('请求失败')
    }
    //读取服务器状态
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                option.success(xhr.responseText)
            } else {
                option.failed(xhr.status)
            }
        }
    }
}



//promiseAjax封装

/*
用法：1
        promiseAjax({
                type: "get",
                url: "http://localhost/test/day26/text2.json",
                data: "user=lai",
            })
            .then((result) => {//箭头函数
                console.log(result)
            }, (error) => {

            }).catch((err) => {

            });

2回调

              promiseAjax({
                type: "get",
                url: "http://localhost/test/day26/text2.json",
                data: "user=lai",
            })
            .then(function(result){
                console.log(result)
                return promiseAjax({//回调用法，
                      type: "get",
                url: "http://localhost/test/day26/text2.json",
                data: "user=lai",
            })
            .then(function(){},function(){})

            },function(error){//返回异常，看需求用
                console.log(error)
            }).catch(function(){//读取错误，看需求用

            })


*/

function promiseAjax(option) {
    return new Promise(function(resolve, reject) {
        if (window.XMLHttpRequest) {
            var xhr = new window.XMLHttpRequest()
        } else {
            var xhr = ActiveXObject(' Microsoft.XMLHTTP')
        }
        if (option.type === 'get' || option.type === 'GET') {
            // 打开与服务器的链接
            xhr.open(option.type, option.url + '?' + option.data + '&_=' + new Date().getTime(), true) //异步
                //发送请求
            xhr.send(null)
        } else if (option.type === 'post' || option.type === 'GET') {
            // 打开与服务器的链接
            xhr.open(option.type, option.url, true);
            //模拟表单post方法提交数据，设置在send之前
            xhr.setRequestHeader('Content-type","application/x-www-form-urlencoded')
                //发送请求
            xhr.send(data)
        } else {
            console.log('请求失败')
        }
        //读取服务器状态
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText)
                } else {
                    reject(xhr.status)
                }
            }
        }
    })
}

//
(function() {

    $('.user').mouseenter(function() {
        $('.Jin_User_hide').show()

    })

})();

(function() {
    $('#car').mouseenter(function() {
        $('.Jin_car_hide').show()
        $('#car').mouseleave(function() {
            $('.Jin_car_hide').hide()
        })
    })

})();

$(".user").css('color', 'black')