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
        console.log(oSn);

        var oMei = $(' .y_taf_page .mei input').val()
        console.log(oMei);
        $.ajax({
            type: "get",
            url: "http://localhost/project/text",
            data: "sn=" + oSn + "&IMEI=" + oMei + "",
            // dataType: "dataType",
            success: function(response) {
                // var json = JSON.parse(response)
                // $('.y_taf_page .inner').html(json)
                if (response) {
                    $('.y_taf_page .inner').html(response)
                } else {
                    $('.y_taf_page .inner').html('所查 SN 无记录，请确认输入是否正确')
                }
            },

        });
    })
})()