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
            // console.log(oSn)
        var oMei = $(' .y_taf_page .mei input').val()
            // console.log(oMei);
        $.ajax({
            type: "get",
            url: "./y_taf.json",
            data: "sn=" + oSn + "&IMEI=" + oMei + "",
            dataType: "json",
            success: function(response) {
                // console.log(response[0]);
                var res = response[0]
                for (var val in res) {
                    // console.log(val, res[val]);
                    if (oSn === val) {
                        if (oMei === res[val]) {
                            $('.y_taf_page .inner').html('卧槽这是真的')
                            location.href = './servers.html'
                        } else {
                            console.log(777)
                            $('.y_taf_page .inner').html('所查 SN 无记录，请确认输入是否正确')
                        }

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