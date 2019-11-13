function more() { //查询  标记
    $('.y_main .wrap .icon li a  ').on('click', 'span', function() {
        // console.log(666)
        var elMore = $(this).html();
        localStorage.setItem('more', elMore) //动态添加
    })
}
more();


function fix() {
    $('.y_main .wrap .module ul li  ').on('click', 'a', function() {
        // console.log(666)
        var elFix = $(this).siblings('em').html()
        localStorage.setItem('fix', elFix)
    })
}
fix();



function phone() {
    $('.y_product .inner .prod_content li').on('click', 'a', function() {
        var elPhone = $(this).find('span').html()
        console.log(elPhone)
        localStorage.setItem('phone', elPhone)
    })
}
phone()



;
(function() { //轮播图  后台请求数据

    $.ajax({
        type: "get",
        url: "./php/fodder.php",
        data: "module=server_swiper ",
        dataType: "json",
        success: function(response) {
            // console.log(response[0].url);
            $('.swiper-wrapper').html(
                    `<div class="swiper-slide"><img src=" ${response[0].url }" alt=""></div>
                        <div class="swiper-slide"><img src="${response[1].url }" alt=""></div>
                        <div class="swiper-slide"><img src="${response[2].url }" alt=""></div>
                        <div class="swiper-slide"><img src="${response[3].url }" alt=""></div>
                        <div class="swiper-slide"><img src="${response[4].url }" alt=""></div>`
                )
                // console.log(str)
        }
    });

})();



(function() {
    window.onload = function() {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            // autoplay: true,
            // centeredSlides: false,
            //等同于以下设置
            autoplay: {
                delay: 4000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },


            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',

            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
        // return mySwiper
    }
})();



(function() { //请求视屏
    $.ajax({
        type: "get",
        url: "./php/fodder.php",
        data: "module=server_video",
        dataType: "json",
        success: function(response) {
            console.log(response);
            for (var i = 0; i < response.length; i++) {

                // console.log(response[1].url);

                $('.y_product .inner .prod_video ul').html(
                    ` <li>
                    <img src="./images/y_bg1.jpg" alt="">
                    <a href="${response[0].url}" target="_blank"></a>
               
                    <em>${response[0].title}</em>
                    <span>${response[0].slogan}</span>
                </li>
                <li>
                    <img src="./images/y_bg2.jpg" alt="">
                     <a href="${response[1].url}" target="_blank"></a>
                    <em>${response[1].title}</em>
                    <span>${response[1].slogan}</span>
                </li>`
                )
            }

        }
    })
})();


(function() { //联系方式  mouse事件

    $('.touch_content .contact a').mouseenter(function(e) {
        var ev = e || window.event
        ev.stopPropagation()
        $(this).siblings('span').css('color', 'blue')
        $(this).closest('.vx').append('<img src="./images/y_vx.jpg" alt="#">')

        $('.touch_content .contact a').mouseleave(function() {
            $(this).siblings('span').css('color', 'black')
            $(this).siblings('img').remove();
        });
    })


})();



(function() { //了解常见问题

    $(' .server_content li .msg').click(function() {
        var container = $(this).html() //获取a标签内容
            // console.log(container)
        localStorage.setItem('answer', container) //存入本地  标记用
    })

    function aContent() {
        var array = [];
        var elA = document.querySelectorAll(' .server_content li .msg')
        for (var i = 0; i < elA.length; i++) {
            array.push(elA[i].innerHTML) //拿到所有a标签html内容放入数组
        }
        var jsonStr = JSON.stringify(array) //转化成json字符串
            // console.log(jsonStr);
        localStorage.setItem('oA', jsonStr) //存入本地
    }
    aContent()
})();







(function() { //产品页 动图
    $('.y_product .inner .prod_content ').on('mouseenter', ' li a img', function() {
        // console.log(555)
        $(this).css({
            'width': '200px',
            'height': '200px'
        })
        $('.y_product .inner .prod_content ').on('mouseleave', ' li a img', function() {
            $(this).css({
                'width': '180px',
                'height': '200px'
            })
        })
    })
})();


(function() { //查询部分
    var arr = {
        "注册产品": "y_login.html",
        "真伪查询": "y_taf.html",
        "自助服务": "y_selfServer.html",
        "支付查询": "y_pay.html",
        "寄送快修": "y_send.html",
        "预约维修": "y_reserve.html"
    }

    $('.y_main .wrap ').on('click', '.icon li a ', function() { //查询
        var content = $(this).find('span').html()
            // console.log(content);
        if (localStorage.getItem('username')) { //判断登录状态 

            for (var item in arr) { //遍历arr
                // console.log(item, arr[item]);
                if (content === item) //根据标记跳到指定页面
                    $(this).attr('href', arr[item]) //如果已是登录转态 直接跳过登录
            }
        } else {
            $(this).attr('href', "y_self.html") //未登录就进入登录验证
        }
    })

    $('.y_main .wrap ').on('click', '.module ul li a ', function() { //维修 
        var content = $(this).siblings('em').html()
            // console.log(content);

        if (localStorage.getItem('username')) {

            for (var item in arr) {
                if (content === item) //根据标记跳到指定页面
                    $(this).attr('href', arr[item])
            }
        } else {
            $(this).attr('href', "y_self.html")
        }
    })
})();



//主页鼠标 移开下拉菜单下拉单消失
$('.Jin_hide_content').mouseleave(function() {
    $(this).css('display', 'none')
})
$('.Jin_hide_content_ding').mouseleave(function() {
    $(this).css('display', 'none')
})