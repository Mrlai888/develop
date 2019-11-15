window.onload = function(){
    alert('还未登录');
    window.location.assign('jy_back-login.html');//去登录
}

//layui初始化
(function () {
    layui.use('element', function () {
        var element = layui.element;
    });
})();


// iframe切换
(function () {
    var dds = document.querySelectorAll('.layui-side .layui-nav-child a');
    // console.log(dds);
    for (let i = 0, len = dds.length; i < len; i++) {
        dds[i].onclick = function () {
            var iframe = document.querySelector('iframe');
            iframe.src = this.getAttribute('data-url');
        }
    }
})();