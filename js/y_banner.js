function more() {
    $('.y_main .wrap .icon li a  ').on('click', 'span', function() {
        // console.log(666)
        var elMore = $(this).html();
        localStorage.setItem('more', elMore)
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



(function() {

    $.ajax({
        type: "get",
        url: "http://localhost/project/php/fodder.php",
        data: "module=server_swiper ",
        dataType: "json",
        success: function(response) {
            console.log(response[0].url);


            $('.swiper-wrapper').html(
                `<div class="swiper-slide"><img src=" ${response[0].url }" alt=""></div>
                        <div class="swiper-slide"><img src="${response[1].url }" alt=""></div>
                        <div class="swiper-slide"><img src="${response[2].url }" alt=""></div>
                        <div class="swiper-slide"><img src="${response[3].url }" alt=""></div>
                        <div class="swiper-slide"><img src="${response[4].url }" alt=""></div>
                        <div class="swiper-slide"><img src="${response[5].url }" alt=""></div>`


            )

            // console.log(str)
        }
    });

})();



(function() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true, //等同于以下设置
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
    return mySwiper
})();



(function() {
    $.ajax({
        type: "get",
        url: "http://localhost/project/php/fodder.php",
        data: "module=server_video",
        dataType: "json",
        success: function(response) {
            console.log(response);
            for (var i = 0; i < response.length; i++) {

                // console.log(response[1].url);

                $('.y_product .inner .prod_video ul').html(
                    ` <li>
                    <img src="./images/y_bg1.jpg" alt="">
                    <a href="${response[0].url}"></a>
               
                    <em>${response[0].title}</em>
                    <span>${response[0].slogan}</span>
                </li>
                <li>
                    <img src="./images/y_bg2.jpg" alt="">
                     <a href="${response[1].url}"></a>
                    <em>${response[1].title}</em>
                    <span>${response[1].slogan}</span>
                </li>`
                )
            }

        }
    })
})();




;
(function() {
    $('.y_product .inner .prod_content ').on('mouseenter', ' li a img', function() {
        console.log(555)
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

(function() {

    var arr = {
        "注册产品": "y_login.html",
        "真伪查询": "y_taf.html",
        "自助服务": "y_self.html",
        "寄送快修": "y_send.html"
    }

    $('.y_main .wrap ').on('click', '.icon li a ', function() {
        var content = $(this).find('span').html()
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

    $('.y_main .wrap ').on('click', '.module ul li a ', function() {
        var content = $(this).siblings('em').html()
        console.log(content);

        if (localStorage.getItem('username')) {

            for (var item in arr) {
                if (content === item) //根据标记跳到指定页面
                    $(this).attr('href', arr[item])
            }
        } else {
            $(this).attr('href', "y_self.html")
        }
    })
})()