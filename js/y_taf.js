function Insert() {
    $('.y_more').append('     <a href="javascript:;">' + localStorage.getItem('more') + '</a>')
    $('.y_more .more').css({
        " font-size": "18px",
        "font-weight": "bold"
    })
}
Insert();

//"sn":"IEMI"


(function() {
    $('.y_taf_page .but').click(function() {

        var oSn = $('.y_taf_page .sn input').val()
        var oMei = $(' .y_taf_page .mei input').val()
        $.ajax({
            type: "get",
            url: "./y_taf.json",
            data: "sn=" + oSn + "&IMEI=" + oMei + "",
            dataType: "json",
            success: function(response) {
                console.log(response[0]);
                var res = response[0]

                for (var item in res) {
                    console.log(typeof $('.y_taf_page .sn input').val());
                    if ($('.y_taf_page .sn input').val() && $(' .y_taf_page .mei input').val()) {
                        if ($('.y_taf_page .sn input').val() == item && $(' .y_taf_page .mei input').val() == res[item]) {
                            console.log(666);
                            $('.y_taf_page .inner').html('卧槽这是真的')
                                // $('.y_taf_page .inner').html('卧槽这是真的')
                            setTimeout(() => {
                                location.href = './servers.html'
                            }, 300);
                            break

                        } else {

                            $('.y_taf_page .inner').html('所查 SN 无记录，请确认输入是否正确')

                        }

                    } else {
                        $('.y_taf_page .inner').html('账号/IMEI不能为空')
                    }

                }

            },

        });
    })
})();




$('.Jin_hide_content').mouseleave(function() {
    $(this).css('display', 'none')
})
$('.Jin_hide_content_ding').mouseleave(function() {
    $(this).css('display', 'none')
})