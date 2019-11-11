$('.mt-wrapperCar').mouseenter(function () {
    $('.Jin_hide_content').css('display', 'none');
    $('.Jin_hide_content_ding').css('display', 'none');
    $('.Jin_User_hide').css('display', 'none');
    $('.Jin_car_hide').css('display', 'none')
})
var list = $('.preview-thumb li');
var img = $('.preview-booth img');
swh(list, "current");
swh($('.cls1 a'), "active");
swh($('.cls2 a'), "active");
swh($('.cls3 a'), "active");
swh2($('.huabei-bd a'), "tog");

list.eq(0).click(function () {
    $('.preview-booth img').attr("src", "//openfile.meizu.com/group1/M00/07/2C/Cgbj0Vy9czeAB1b0AAbEyeUfNvI853.png680x680.jpg")
});
list.eq(1).click(function () {
    $('.preview-booth img').attr("src", "//openfile.meizu.com/group1/M00/07/14/Cgbj0Fy9cyCAFTiJAALUkAwtnM0798.png680x680.jpg")
});
list.eq(2).click(function () {
    $('.preview-booth img').attr("src", "//openfile.meizu.com/group1/M00/07/14/Cgbj0Fy9cyiAapmYAAPdKnA-Nq4341.png680x680.jpg")
});
list.eq(3).click(function () {
    $('.preview-booth img').attr("src", "////openfile.meizu.com/group1/M00/07/2C/Cgbj0Vy9cy-AQHw_AAItbvBkEag325.png680x680.jpg")
});


//封装切换函数
function swh(ele, clsname) {
    ele.click(function () {
        for (var i = 0; i < ele.length; i++) {
            ele[i].className = "vm-img";
        }
        $(this).addClass(clsname)
    })
}

function swh2(ele, clsname) {
    ele.click(function () {
        for (var i = 0; i < ele.length; i++) {
            ele[i].className = " ";
        }
        $(this).addClass(clsname)
    })
}

$(window).scroll(function () {
    // 获取网页滚动的偏移位
    var offset = $("html,body").scrollTop();
    // 判断网页是否滚动到了指定的位置
    if (offset >= 70) {
        $(".fast-nav").css({
            position: 'fixed',
            opacity: '.9'
        });
    } else {
        $(".fast-nav").css({
            position: 'absolute',
            opacity: '1'
        });
    }
})

