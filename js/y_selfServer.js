function Insert() {
    $('.y_more').append('     <a href="javascript:;">' + localStorage.getItem('more') + '</a>')
    $('.y_more .more').css({
        " font-size": "18px",
        "font-weight": "bold"
    })
}
Insert();


$('.Jin_hide_content').mouseleave(function() {
    $(this).css('display', 'none')
})
$('.Jin_hide_content_ding').mouseleave(function() {
    $(this).css('display', 'none')
});



(function() {
    $('.selfServer_box  .downBox1').on('click', 'i', function(e) { //小三角形
        e.stopPropagation()
            // console.log(666);

        var show = $('.selfServer_box  .downBox1 .content ').css('display'); //隐藏时点击显示，显示是点击隐藏
        console.log(show);

        if (show == 'block') {
            $('.selfServer_box  .downBox1 .content ').css('display', 'none');
        }
        if (show == 'none') {
            $('.selfServer_box  .downBox1 .content ').css('display', 'block');
        }
        promiseAjax({
                type: "get",
                url: "./y_selfServer.json",
                data: "user=lai",
            })
            .then(function(response) {
                var response = JSON.parse(response)
                var str = ''
                var str2 = ''
                console.log(response[0])
                var res = response[0]
                for (var item in res) {
                    str += `   <p>${item}</p> `
                        // if ($('.selfServer_box  .downBox1 #txt1').val() === item) {
                        //     console.log(res[item])
                        //     for (var i = 0; i < res[item].length; i++) {
                        //         str2 += `   <p>${res[item][i]}</p> `
                        //     }
                        // }
                }
                $('.selfServer_box  .downBox1 .content ').html(str)


                $('.selfServer_box  .downBox1 .content ').on('click', 'p', function(e) { //选项
                    e.stopPropagation()
                    $('.selfServer_box  .downBox1 #txt1').val($(this).text()); //选项框赋值
                    for (var item in res) { //处理ajax请求的数据
                        console.log(item);
                        console.log($('.selfServer_box  .downBox1 #txt1').val());
                        if ($('.selfServer_box  .downBox1 #txt1').val() === item) {
                            console.log(res[item])
                            for (var i = 0; i < res[item].length; i++) {
                                str2 += `   <p>${res[item][i]}</p> `
                            }
                        }
                    }
                    $('.selfServer_box  .downBox2 #txt2').val(''); //子选项框清空
                    $('.selfServer_box  .downBox2 .content ').html(str2)
                    $('.selfServer_box  .downBox1 .content ').css('display', 'none');
                })

            })
    });


    $('.selfServer_box  .downBox2  i').click(function() {
        // $('.selfServer_box  .downBox2 .content ').slideToggle();
        // console.log(66);

        var show = $('.selfServer_box  .downBox2 .content ').css('display');


        if (show == 'block') {
            $('.selfServer_box  .downBox2 .content ').css('display', 'none');
        }
        if (show == 'none') {
            $('.selfServer_box  .downBox2 .content ').css('display', 'block');
        }
        $('.selfServer_box  .downBox2 .content ').on('click', 'p', function(e) {
            // console.log($(this).text());
            e.stopPropagation()

            $('.selfServer_box  .downBox2 #txt2').val($(this).text());
            $('.selfServer_box  .downBox2 .content ').css('display', 'none');
        })

    })




})();


$('.y_selfServer_page button').click(function() {
    location.href = "./servers.html"
})