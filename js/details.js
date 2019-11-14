//覆盖公共头部导航移出隐藏事件
$('.mt-wrapperCar').mouseenter(function () {
    $('.Jin_hide_content').css('display', 'none');
    $('.Jin_hide_content_ding').css('display', 'none');
    $('.Jin_User_hide').css('display', 'none');
    $('.Jin_car_hide').css('display', 'none')
})


//切换
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

//导航栏的固定
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


//图片切换
$(".site-title .text").mouseenter(function () {
    $(".site-title .content").css({
        display: "block"
    })
})
$(".site-title").mouseleave(function () {
    $(".site-title .content").css({
        display: "none"
    })
})

var item = $(".mt li")
item.click(function () {
    for (var i = 0; i < item.length; i++) {
        item[i].className = " "
    }
    $(this).addClass('curr')
})

$(".mt li").eq(0).click(function () {
    $(".mc").eq(0).css({
        display: "block"
    })
    $(".mc").eq(1).css({
        display: "none"
    })
    $(".mc").eq(2).css({
        display: "none"
    })

})
$(".mt li").eq(1).click(function () {
    $(".mc").eq(0).css({
        display: "none"
    })
    $(".mc").eq(1).css({
        display: "block"
    })
    $(".mc").eq(2).css({
        display: "none"
    })
})
$(".mt li").eq(2).click(function () {
    $(".mc").eq(0).css({
        display: "none"
    })
    $(".mc").eq(1).css({
        display: "none"
    })
    $(".mc").eq(2).css({
        display: "block"
    })
})


//地址栏选项
var li = $(".t1 li a");
var lit2 = $(".t2 li a");
var lit3 = $(".t3 li a");

for (var i = 0; i < li.length; i++) {
    (function (j) {
        li[j].onclick = function () {
            $("#sheng").text(this.innerText)
        }
    })(i)
}

for (var i = 0; i < lit2.length; i++) {
    (function (j) {
        lit2[j].onclick = function () {
            $("#shi").text(this.innerText)
        }
    })(i)
}
for (var i = 0; i < lit3.length; i++) {
    (function (j) {
        lit3[j].onclick = function () {
            $("#xuanze").text(this.innerText)
        }
    })(i)
}

//数量加减
$('.mod-control .vm-minus').click(function () {
    

})





//本地存储数据
var atr = JSON.parse(localStorage.getItem('obj'))
for (var i = 0; i < atr.length; i++) {
    if (localStorage.getItem('dom') === atr[i].name) {
        $(".content .name").text(atr[i].name);
        $(".property-hd h1").text(atr[i].name);
        $(".property-hd .mod-info").text(atr[i].slogan)
        $(".mod-price .vm-money").text(atr[i].price)
        $(".preview-booth a img").attr("src", atr[i].pic)
    }

}

var ban = JSON.parse(localStorage.getItem('banner'))
for (var i = 0; i < ban.length; i++) {
    if (localStorage.getItem('dom') === ban[i].name) {
        $(".content .name").text(ban[i].name);
        $(".property-hd h1").text(ban[i].name);
        $(".property-hd .mod-info").text(ban[i].slogan)
        $(".mod-price .vm-money").text(ban[i].price)
        $(".preview-booth a img").attr("src", ban[i].pic)
    }
}



//点击加入购物车

$('.property-buy-action').on("click", ' .join', function () {
    var title = $(".content .name").text();
    if (localStorage.getItem('goods')) {
        var str = JSON.parse(localStorage.getItem('goods')).title;
    } else {
        var str = [];
    }
    str.push(title)

    var jsonStr = JSON.stringify({ "title": str });
    localStorage.setItem('goods', jsonStr);


    alert('成功加入购物车!')
})