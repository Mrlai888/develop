(function() {
    var object = {}
    var arr = []
    var att = document.querySelectorAll(' .y_answers .answers_inner div')
    var val = JSON.parse(localStorage.getItem('oA')) //取出主页存入的标签的内容

    for (var i = 0; i < att.length; i++) {
        arr.push(att[i].getAttribute('class')) //获取所有图的类名

    }
    // console.log(arr)
    for (var j = 0; j < arr.length; j++) {
        object[val[j]] = arr[j] //吧a标签的内容和类名存入对象中{支付方式: "payWay", 使用说明: "deliVery"}
    }
    // console.log(object['下一家']);

    for (var res in object) {
        // console.log(object[res]);
        // console.log(localStorage.getItem('answer'));
        if (localStorage.getItem('answer') === res) {
            for (var k = 0; k < att.length; k++) {
                att[k].style.display = 'none'
            }
            // console.log('.y_answers .answers_inner .' + object[res] + '');
            $('.y_answers .answers_inner .' + object[res] + '').css('display', 'block')

        } else if (!object[localStorage.getItem('answer')]) {
            console.log(666)
                // for (var k = 0; k < att.length; k++) {
                //     att[k].style.display = 'none'
                // }
            $('.y_answers .answers_inner').html('<h2>页面正在加载中。。。。</h2>')
        }

    }

})()