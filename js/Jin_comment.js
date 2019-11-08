(function () {
    //获取头部元素
    var header_inner = document.querySelector('.header_inner');
    // 获取隐藏的元素
    var hide_content = document.querySelector('.Jin_hide_content');
    //获取手机导航栏
    var phone_nav = document.querySelector('.phone_nav');

    var Jin_hide_inner = document.querySelector('.Jin_hide_inner');



    $('.phone_nav li').mouseover(function () {
        $('#car').css('color', '#000');
        $('.user').css('color', '#000');
        $(this).children().css('color', '#00c3f5');
        $(this).siblings().children().css('color', '#000');
    });
    $('.cla').mouseover(function () {
        $('.header_inner').css('backgroundColor', 'white');
        $('.Jin_hide_content').slideDown();
    });
    $('.cla:eq(0)').mouseover(function () {
        $('.Jin_hide_inner').html('');
        $('.Jin_hide_content_ding').css('display', 'none');
        var tag = `<ul class="clearfix Jin_hide_li">
                <li>
                    <a href="##">
                        <img src="images/Jin-hide1.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide2.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide3.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide4.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide5.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide6.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide7.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide8.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
            </ul>`;
        $('.Jin_User_hide').css('display', 'none');
        $('.Jin_hide_inner').append(tag);
        $('.Jin_hide_li li').mouseover(function () {
            $(this).css('opacity', 1);
            $(this).siblings('li').css('opacity', 0.5);

        });
    });
    $('.cla:eq(1)').mouseover(function () {
        $('.Jin_hide_inner').html('');
        $('.Jin_hide_content_ding').css('display', 'none');
        var tag1 = `<ul class="clearfix Jin_hide_li">
                <li>
                    <a href="##">
                        <img src="images/Jin-hide1.jpg"/>
                        <span>魅族 17T</span><br>
                        <strong>¥1992</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide2.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide3.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide4.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide5.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide6.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide7.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide8.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
            </ul>`;
        $('.Jin_User_hide').css('display', 'none');
        $('.Jin_hide_inner').append(tag1);

        $('.Jin_hide_li li').mouseover(function () {
            $(this).css('opacity', 1);
            $(this).siblings('li').css('opacity', 0.5);

        });
    });

    $('.cla:eq(2)').mouseover(function () {
        $('.Jin_hide_inner').html('');
        $('.Jin_hide_content_ding').css('display', 'none');
        var tag1 = `<ul class="clearfix Jin_hide_li">
                <li>
                    <a href="##">
                        <img src="images/Jin-hide2.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide3.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥100</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide4.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide5.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide6.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide7.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide8.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
            </ul>`;
        $('.Jin_User_hide').css('display', 'none');
        $('.Jin_hide_inner').append(tag1);
        $('.Jin_hide_li li').mouseover(function () {
            $(this).css('opacity', 1);
            $(this).siblings('li').css('opacity', 0.5);

        });
    });
    $('.cla:eq(3)').mouseover(function () {
        $('.Jin_hide_inner').html('');
        $('.Jin_hide_content_ding').css('display', 'none');
        $('.Jin_User_hide').css('display', 'none');
        var tag1 = `<ul class="clearfix Jin_hide_li">
                <li>
                    <a href="##">
                        <img src="images/Jin-hide2.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide3.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide4.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide5.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide6.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide7.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
                <li>
                    <a href="##">
                        <img src="images/Jin-hide8.jpg"/>
                        <span>魅族 16T</span><br>
                        <strong>¥1999</strong>
                    </a>
                </li>
            </ul>`;
        $('.Jin_hide_inner').append(tag1);
        $('.Jin_hide_li li').mouseover(function () {
            $(this).css('opacity', 1);
            $(this).siblings('li').css('opacity', 0.5);
        });
    });

    for (var i = 4; i < phone_nav.children.length - 1; i++) {
        var lis = phone_nav.children[i];
        lis.onmouseover = function () {
            $('.Jin_hide_content').css('display', 'none');
            $('.header_inner').css('backgroundColor', '');
            $('.Jin_hide_content_ding').css('display', 'none');
            $('.user').css('color', '#333');
            $('#car').css('color', '#333');
            $(this).siblings().children().css('color', '#333');
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

    //修改----梅恬
    $('.mt-image').mouseover(function () {
        $('.Jin_hide_content').css('display', 'none');
        $('.Jin_hide_content_ding').css('display', 'none');
    })


    //手机用户隐藏显示
    $('.user').mouseover(function () {
        $('.Jin_User_hide').slideDown();
        $('.Jin_hide_content').css('display', 'none');
        $('.Jin_hide_content_ding').css('display', 'none');
        $('.header_inner').css('backgroundColor', '');
        $('.phone_nav li a').css('color', '#333');
        $('.Jin_car_hide').css('display', 'none')
        $('.user').css('color', '#333');
        $('#car').css('color', '#333');
    });
    $('#Jin_lunbo').mouseover(function () {
        $('.Jin_User_hide').css('display', 'none');
        $('.Jin_car_hide').css('display', 'none')
    });

    //修改--梅恬
    $('.mt-image').mouseenter(function () {
        $('.Jin_User_hide').css('display', 'none');
        $('.Jin_car_hide').css('display', 'none')
    })

    // 购物车隐藏
    $('#car').mouseover(function () {
        $('.Jin_User_hide').css('display', 'none');
        $('.Jin_car_hide').slideDown();
    });



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
    })


})
();