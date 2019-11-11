$('.mt-wrapperCar').mouseenter(function () {
    $('.Jin_hide_content').css('display', 'none');
    $('.Jin_hide_content_ding').css('display', 'none');
    $('.Jin_User_hide').css('display', 'none');
    $('.Jin_car_hide').css('display', 'none')
})

swh($('.preview-thumb li'), "current");

swh($('.cls1 a'), "active");
swh($('.cls2 a'), "active");
swh($('.cls3 a'), "active");
swh2($('.huabei-bd a'), "tog");

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

