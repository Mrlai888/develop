(function () {

    //登录状态
    if (localStorage.getItem('username')) {
        // console.log(1);
        // loginIindex = 1;
        let userPhoto = localStorage.getItem('photo');
        // console.log(userPhoto);
        document.querySelector('#userPhoto').style.backgroundImage = 'url(' + userPhoto + ')';
        document.querySelector('.Jin_User_hide').innerHTML = `
            <li><a href="##" class="exitLogin">退出登录</a></li>
            <li><a href="##">个人中心</a></li>
            <li><a href="##">我的订单</a></li>
            <li><a href="##">M码通道</a></li>
            `;
        // localStorage.removeItem('photo'); //清除photo;
    } else {
        // console.log(0);
        // loginIindex = 0;
        document.querySelector('#userPhoto').style.backgroundImage = 'url(images/jy_icon-default-user.png)';
        document.querySelector('.Jin_User_hide').innerHTML = `
            <li><a href="jy_login.html">立即登录</a></li>
            <li><a href="jy_regis.html">立即注册</a></li>
            <li><a href="##">我的订单</a></li>
            <li><a href="##">M码通道</a></li>
            `;
        localStorage.removeItem('photo'); //清除photo;
    }


    //退出登录
    // 事件委托
    document.body.onclick = function (e) {
        localStorage.removeItem('photo'); //清除photo;
        var e = e || window.event;
        var tg = e.target || e.srcElement;
        // 创建元素
        if (tg.className == 'exitLogin') {
            localStorage.removeItem('username'); //清除登录标识;
            document.querySelector('#userPhoto').style.backgroundImage = 'url(images/jy_icon-default-user.png)';
            document.querySelector('.Jin_User_hide').innerHTML = `
        <li><a href="jy_login.html">立即登录</a></li>
        <li><a href="jy_regis.html">立即注册</a></li>
        <li><a href="##">我的订单</a></li>
        <li><a href="##">M码通道</a></li>
        `;
        }
    }



    //获取头部元素
    var header_inner = document.querySelector('.header_inner');
    // 获取隐藏的元素
    var hide_content = document.querySelector('.Jin_hide_content');
    //获取手机导航栏
    var phone_nav = document.querySelector('.phone_nav');

    var Jin_hide_inner = document.querySelector('.Jin_hide_inner');

    $('.phone_nav li').mouseenter(function () {
        $('#car').css('color', '#000');
        $('#userPhoto').css('background-image','url(images/jy_icon-default-user-black.png)');
        $(this).children().css('color', '#00c3f5');
        $(this).siblings().children().css('color', '#000');
    });
    $('.phone_nav li').mouseleave(function () {
        $('#userPhoto').css('background-image','url(images/jy_icon-default-user.png)');
    });
    $('.cla').mouseover(function () {
        $('.header_inner').css('backgroundColor', 'white');
        $('.Jin_hide_content').slideDown();
    });
    var json;
    $.ajax({
        url: 'php/goods.php',
        data: {
            module: 'phone_rec'
        },
        type: 'get',
        success: function (data) {
            json = JSON.parse(data);

        }
    })
    $('.cla:eq(0)').mouseover(function () {
        var jsonOne = json;
        $('.Jin_hide_inner').html('');
        var tag = '';
        for (var i = 0; i < 8; i++) {
            tag += `<li>
                    <a href="##">
                        <img src="${jsonOne[i].pic}"/>
                        <span>${jsonOne[i].name}</span><br>
                        <strong>${jsonOne[i].price}</strong>
                    </a>
                </li>`
        }
        var Jin_ul = ` <ul class="clearfix Jin_hide_li"></ul>`;
        $('.Jin_hide_inner').append(Jin_ul);
        $('.Jin_hide_li').append(tag);
        $('.Jin_hide_li li').mouseover(function () {
            $(this).css('opacity', 1);
            $(this).siblings('li').css('opacity', 0.5);
        });
        $('.Jin_hide_content_ding').css('display', 'none');
        $('.Jin_User_hide').css('display', 'none');
    });
    var Sum;
    $.ajax({
        url: 'php/goods.php',
        data: {
            module: 'music_rec'
        },
        type: 'get',
        success: function (data) {
            Sum = JSON.parse(data);
        }
    })
    $('.cla:eq(1)').mouseover(function () {
        $('.Jin_hide_inner').html('');
        var jsonTwo = Sum;
        var tag = '';

        for (var i = 0; i < 8; i++) {
            tag += `<li>
                    <a href="##">
                        <img src="${jsonTwo[i].pic}"/>
                        <span>${jsonTwo[i].name}</span><br>
                        <strong>${jsonTwo[i].price}</strong>
                    </a>
                </li>`
        }
        var Jin_ul = ` <ul class="clearfix Jin_hide_li"></ul>`;
        $('.Jin_hide_inner').append(Jin_ul);
        $('.Jin_hide_li').append(tag);
        $('.Jin_hide_li li').mouseover(function () {
            $(this).css('opacity', 1);
            $(this).siblings('li').css('opacity', 0.5);
        });
        $('.Jin_hide_content_ding').css('display', 'none');
        $('.Jin_User_hide').css('display', 'none');
    });
    var pada;
    $.ajax({
        url: 'php/goods.php',
        data: {
            module: 'accessory_rec'
        },
        type: 'get',
        success: function (data) {
            pada = JSON.parse(data);


        }
    })
    $('.cla:eq(2)').mouseover(function () {
        $('.Jin_hide_inner').html('');
        var jsonTwo = pada;
        var tag = '';

        for (var i = 0; i < 8; i++) {
            tag += `<li>
                    <a href="##">
                        <img src="${jsonTwo[i].pic}"/>
                        <span>${jsonTwo[i].name}</span><br>
                        <strong>${jsonTwo[i].price}</strong>
                    </a>
                </li>`
        }
        var Jin_ul = ` <ul class="clearfix Jin_hide_li"></ul>`;
        $('.Jin_hide_inner').append(Jin_ul);
        $('.Jin_hide_li').append(tag);
        $('.Jin_hide_li li').mouseover(function () {
            $(this).css('opacity', 1);
            $(this).siblings('li').css('opacity', 0.5);
        });
        $('.Jin_hide_content_ding').css('display', 'none');
        $('.Jin_User_hide').css('display', 'none');
    });
    var praseJin;
    $.ajax({
        url: 'php/goods.php',
        data: {
            module: 'life_rec'
        },
        type: 'get',
        success: function (data) {
            praseJin = JSON.parse(data);
        }
    })
    $('.cla:eq(3)').mouseover(function () {
        $('.Jin_hide_inner').html('');
        var jsonTwo = praseJin;
        var tag = '';

        for (var i = 0; i < 8; i++) {
            tag += `<li>
                    <a href="##">
                        <img src="${jsonTwo[i].pic}"/>
                        <span>${jsonTwo[i].name}</span><br>
                        <strong>${jsonTwo[i].price}</strong>
                    </a>
                </li>`
        }
        var Jin_ul = ` <ul class="clearfix Jin_hide_li"></ul>`;
        $('.Jin_hide_inner').append(Jin_ul);
        $('.Jin_hide_li').append(tag);
        $('.Jin_hide_li li').mouseover(function () {
            $(this).css('opacity', 1);
            $(this).siblings('li').css('opacity', 0.5);
        });
        $('.Jin_hide_content_ding').css('display', 'none');
        $('.Jin_User_hide').css('display', 'none');
    });




    // 请求数据

    $.ajax({
        url: 'php/goods.php',
        data: {
            module: 'phone_new'
        },
        type: 'get',
        success: function (data) {
            var json = JSON.parse(data);
            var tag = '';
            for (var i = 0; i < 4; i++) {
                tag += `<li>
                <a href="##">
                    <img src="${json[i].pic}"/>
                    <h3>${json[i].name}</h3>
                    <strong>${json[i].slogan}</strong>
                </a>
            </li>`;
            }
            $('.phone_content').append(tag);
            $('.phone_content li').mouseover(function () {
                $(this).css('opacity', 0.8);
                $(this).siblings('li').css('opacity', 1);
            });
            $('.phone_content li').mouseout(function () {
                $(this).css('opacity', 1);
            });
        }
    })

    $.ajax({
        url: 'php/fodder.php',
        data: {
            module: 'adv'
        },
        type: 'get',
        success: function (data) {
            var main_nav_phone = document.querySelectorAll('.main_nav_phone');
            var json = JSON.parse(data);
            var tag = '';
            json.forEach(function (item, index) {
                tag = `<a href="##">
                     <img src="${item.url}"/>
                    </a>`;
                main_nav_phone[index].innerHTML = tag;
            })
        }
    })
    // console.log($('.main_nav_phone'));

    // main_nav_phone[index]





    for (var i = 4; i < phone_nav.children.length - 1; i++) {
        var lis = phone_nav.children[i];
        lis.onmouseover = function () {
            $('.Jin_hide_content').css('display', 'none');
            $('.header_inner').css('backgroundColor', '');
            $('.Jin_hide_content_ding').css('display', 'none');
            $('.user').css('color', '#fff');
            $('#car').css('color', '#fff');
            $(this).siblings().children().css('color', '#fff');
        }
    }
    $('.phone_nav li:eq(8)').mouseover(function () {
        $('.Jin_hide_content_ding').slideDown();
        $('.header_inner').css('backgroundColor', 'white');
        $('.Jin_hide_content').css('display', 'none');
        $('.Jin_User_hide').css('display', 'none');
    });

    $('#Jin_lunbo').mouseover(function () {
        $('.Jin_hide_content').css('display', 'none');
        $('.header_inner').css('backgroundColor', '');
        $('.phone_nav li a').css('color', 'white');
        $('.Jin_hide_content_ding').css('display', 'none');
        $('.user').css('color', '#fff');
        $('#car').css('color', '#fff');

    });

    //手机用户隐藏显示
    $('.user').mouseover(function () {
        $('.Jin_User_hide').slideDown();
        $('.Jin_hide_content').css('display', 'none');
        $('.Jin_hide_content_ding').css('display', 'none');
        $('.header_inner').css('backgroundColor', '');
        $('.phone_nav li a').css('color', 'white');
        $('.Jin_car_hide').css('display', 'none')
        $('.user').css('color', '#fff');
        $('#car').css('color', '#fff');
    });
    $('#Jin_lunbo').mouseover(function () {
        $('.Jin_User_hide').css('display', 'none');
        $('.Jin_car_hide').css('display', 'none')
    });

    // 购物车隐藏
    $('#car').mouseover(function () {
        $('.Jin_User_hide').css('display', 'none');
        $('.Jin_car_hide').slideDown();
    });

    //手机导航部分

    $('.phone_content li').mouseover(function () {
        $(this).css('opacity', 0.8);
        $(this).siblings('li').css('opacity', 1);
    });
    $('.phone_content li').mouseout(function () {
        $(this).css('opacity', 1);
    });

    //大tup
    $('.main_nav_phone').mouseover(function () {
        $(this).css('opacity', 0.8);
    })
    $('.main_nav_phone').mouseout(function () {
        $(this).css('opacity', 1);
    });

    //移动显示隐藏部分

    //box-shadow:5px 4px 4px 3px #ccc;
    $('.phone_nav_ten ul li').mouseover(function () {
        $(this).css('box-shadow', '2px 2px 2px 2px #ccc');
        $(this).siblings('li').css('box-shadow', '');
    });
    // $('.phone_nav_ten .phone_ten').mouseout(function () {
    //     $(this).find('li').css('box-shadow', '');
    // })
    $('.phone_nav_ten ul').mouseout(function () {
        $(this).find('li').css('box-shadow', '');
    });

    $('.Greatvideo ul li').mouseover(function () {
        $(this).css('box-shadow', '2px 2px 2px 2px #ccc');
        $(this).siblings('li').css('box-shadow', '');
    });
    // $('.phone_nav_ten .phone_ten').mouseout(function () {
    //     $(this).find('li').css('box-shadow', '');
    // })
    $('.Greatvideo ul').mouseout(function () {
        $(this).find('li').css('box-shadow', '');
    });

    // Greatvideo


    // 底部
    $('.xiaochengxu').mouseover(function () {
        $(this).children().css('display', 'block');
    })
    $('.xiaochengxu').mouseout(function () {
        $(this).children().css('display', 'none');
    })
    $('.weixin').mouseover(function () {
        $(this).children().css('display', 'block');
    })
    $('.weixin').mouseout(function () {
        $(this).children().css('display', 'none');
    });

    // <source src="videos/video1.mp4"/>
    //视频点击
    $('#close').click(function () {
        $('.videos_main').css('display', 'none');
        $('.Jin_new').css("display", 'none');
    })

    var data = [
        "https://cimg2.res.meizu.com/www/201910/16t-video.mp4",
        "https://cimg2.res.meizu.com/www/201908/16s%20pro%20feature%E8%A7%86%E9%A2%9116%E6%AF%949_1.mp4",
        "https://cimg2.res.meizu.com/www/201904/pop2.mp4",
        "https://cimg2.res.meizu.com/www/201905/16xs.mp4",
        "https://www3.res.meizu.com/video/Flyme8%E6%A6%82%E5%BF%B5%E8%A7%86%E9%A2%91.mp4",
        "https://www3.res.meizu.com/video/Flyme8%E5%8A%9F%E8%83%BD%E8%A7%86%E9%A2%91.mp4",
        "https://www3.res.meizu.com/video/aicy.mp4",
        "https://www3.res.meizu.com/video/%E5%AE%89%E5%85%A8%E5%AE%B6%E5%BA%AD%E8%A7%86%E9%A2%91_1.mp4"
    ];
    var videos_box = document.querySelector('#videos_box');
    var videos_main = document.querySelector('.videos_main');
    var vi = document.querySelector('#vi');
    for (let i = 0; i < videos_box.children.length; i++) {
        var lis = videos_box.children[i];
        lis.index = i;
        lis.onclick = function () {
            // console.log(this.index);
            // // console.log(Jin_new);
            vi.src = data[this.index];
            videos_main.style.display = 'block';
        }
    }


















    var video1 = document.getElementById("vi"); //括号内为video标签的id
    //播放视频（点击播放按钮，后变成暂停）
    function isPlay(obj1) {
        video1.pause();
        video1.play();
    }
    isPlay(video1);
})
















();