(function() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,

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
})()




// var oI = document.querySelectorAll('.y_main .wrap li .bg')
// window.onload = function() {
//     for (var i = 5; i < oI.length + 5; i++) {
//         oI[i].style.background = `../images/y_icon${i}.jpeg`
//     }
// }