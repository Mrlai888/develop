

/*顶部悬浮*/
window.onscroll = function () {
    var t = document.querySelector('#ly-roof');
    var scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop)

    if (scrollTop >= 200) {
        t.style.display = 'block';
        t.style.position = 'fixed';
        t.style.top = 0;
        t.style.left = 0;
        t.style.right = 0;

    } else {
        t.style.display = 'none';
        // t.style.position = 'initial';//初始化
    }

}


// 头部移除隐藏
$('.Jin_hide_content').mouseleave(function () {
    $(this).css('display', 'none');
});

$('.Jin_hide_content_ding').mouseleave(function () {
    $(this).css('display', 'none')
});

$('.Jin_car_hide').mouseleave(function () {
    $(this).css('display', 'none')
});


function Tab() {
    this.imgs = document.querySelectorAll('.img img');
    this.imgMin = document.querySelectorAll('.img-min img');
    this.prevIndex = 0;

}
// 3. 把函数变成对象的方法（prototype原型）
Tab.prototype.clickTab = function () {
    var self = this;//保存当前的this
    for (var i = 0; i < this.imgMin.length; i++) {
        this.imgMin[i].index = i;
        this.imgMin[i].onclick = function () {

            // 上次选中的元素清空类名
            self.imgMin[self.prevIndex].className = '';
            self.imgs[self.prevIndex].className = '';


            //  当前选中的元素添加类名
            this.className = 'active';
            self.imgs[this.index].className = 'show';

            self.prevIndex = this.index;    //更新上次选中的元素

        };
    };

};
// 5. 构造函数实例化
var tab1 = new Tab();
tab1.clickTab();



// 数量加购
var ipt = document.querySelector('.msg .amount .input-content');
var i = document.querySelectorAll('.amount i');
var cont = ipt.value;
$a1 = $('.amount i').eq(0);
$a2 = $('.amount i').eq(1);

$('.amount i').eq(0).click(function () {

    $a2.css("color", "#000");

    if (cont <= 1 || cont == 1) {

        $(this).unbind("onclick");
        $(this).css("color", "#e0e0e1");
    } else {
        cont = cont / 1 - 1;
        // console.log(cont)
        ipt.value = cont;
        $(this).css("color", "block");

    };

});

$('.amount i').eq(1).click(function () {

    $('.amount i').eq(0).css("color", "#000")

    if (cont >= 5) {
        $(this).unbind("onclick");
        $(this).css("color", "#e0e0e1");
    } else {
        cont = cont / 1 + 1;
        // console.log(cont)
        ipt.value = cont;
    };

});


// 鼠标移入 + - 变小手
$a1.mouseenter(function () {
    $(this).css("cursor", "pointer");
});
$a2.mouseenter(function () {
    $(this).css("cursor", "pointer");
});


// 地区选择部分
$span0 = $('.tt span').eq(0);
$span1 = $('.tt span').eq(1);
$span2 = $('.tt span').eq(2);

$shen0 = $('.tt .shen').eq(0);
$shen1 = $('.tt .shen').eq(1);
$shen2 = $('.tt .shen').eq(2);

$span0.click(function () {
    $shen0.show();
    $shen1.hide();
    $shen2.hide();
    $(this).css('border', '1px solid #000');
    $(this).css('border-bottom', 'none');

});
$span1.click(function () {
    $shen1.show();
    $shen0.hide();
    $shen2.hide();
    // $(this).css('border', '1px solid #000');
    // $(this).css('border-bottom', 'none');

});
$span2.click(function () {
    $shen2.show();
    $shen1.hide();
    $shen0.hide();
    // $(this).css('border', '1px solid #000');
    // $(this).css('border-bottom', 'none');
});


// 当鼠标移入省区位置时显示其他省份选择
$as = $('.right .msg .address .a').mouseenter(function () {
    $area = $(".right .msg .add-ress");
    $area.show();
});
$(".right .msg .add-ress").mouseleave(function () {
    $area = $(".right .msg .add-ress");
    document.onmouseenter = false;
    $area.hide();
});

// // 点击X关闭
$('.add-ress .tt em').click(function () {
    // $('.right .msg .add-ress').hide()
    $(".add-ress").css("display", "none");
})


// 点击省 市 区替换内容
$qw = $('.qw ul li i');
$province = $('.province ul li i');
$ww = $('.ww ul li i');

$b1 = $(".address b").eq(1);
$b2 = $('.address b').eq(2);
$b3 = $('.address b').eq(3);

$qw.each(function () {//循环下标
    // console.log($(this).text())
    $(this).click(function () { // 
        // console.log($(this).text())   
        $b1.html($(this).text()); //赋值
    });
});

$province.each(function () {
    // console.log($(this).text());
    $(this).click(function () {
        $b2.html($(this).text());
    });
});

$ww.each(function () {
    $(this).click(function () {
        $b3.html($(this).text())
    });
});



// 底部商品详情
// 切换
var msgCont = document.querySelectorAll('.pr-msg .msg-cont a')
var boxs = document.querySelectorAll('#ly-product .box')
// console.log(boxs)
for (var i = 0; i < msgCont.length; i++) {
    msgCont[i].index = i;
    msgCont[i].onclick = function () {

        for (var i = 0; i < boxs.length; i++) {
            msgCont[i].classList.remove('active');
            boxs[i].style.display = 'none';
        }
        this.classList.add('active');
        boxs[this.index].style.display = 'block';
    }
}














