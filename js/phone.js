
$('.filter-order a').click(function () {
    $(this).toggleClass('active').siblings().removeClass('active');
})


var list = $('.flex-control-nav a');
list.click(function () {
    for (var i = 0; i < list.length; i++) {
        list[i].className = '';
    }
    $(this).addClass('flex-active')
})

list.eq(0).click(function () {
    $(" .recommend-slider-wrap").css({
        width: '2000%',
        transitionDduration: '0s',
        transform: 'translate3d(0, 0, 0)',
        marginRight: '-100px',
        overflow: 'hidden'
    })
})

list.eq(1).click(function () {
    $(" .recommend-slider-wrap").css({
        width: '2000%',
        transitionDduration: '0s',
        transform: 'translate3d(-1240px, 0, 0)',
        marginRight: '-100px',
        overflow: 'hidden'
    })
})
list.eq(2).click(function () {
    $(" .recommend-slider-wrap").css({
        width: '2000%',
        transitionDduration: '0s',
        transform: 'translate3d(-2480px, 0, 0)',
        marginRight: '-100px',
        overflow: 'hidden'
    })
})

