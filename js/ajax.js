//使用原生js，封装ajax
function ajax(obj) {
    // 1.创建XMLHttpRequest对象(买手机)
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest(); //非IE5 6
    } else {
        var xhr = new ActiveXObject(Microsoft.XMLHTTP); //IE5 6
    }
    // data: user=xiaocuo&age=23
    if (obj.type == 'get' || obj.type == 'GET') {
        xhr.open('get', obj.url + '?' + obj.data + '&_=' + new Date().getTime(), true);
        xhr.send();
    } else if (obj.type == 'post' || obj.type == 'POST') {
        // 2.打开与服务器的连接(拨号)
        xhr.open('post', obj.url, true);

        // 先设置请求头，模拟表单form的post方式提交数据
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        // 3.发送到服务器(按下拨号键)
        xhr.send(obj.data);
    } else {
        alert('亲，目前只支持get和post请求方式');
        return;
    }

    // 4.等待服务器的响应(有可能关机，不在服务区，无人接听，有人接听)
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { //请求已完成
            if (xhr.status == 200) { //OK 请求成功
                obj.succeed(xhr.responseText); //成功的回调函数
            } else {
                obj.failed(xhr.status); //失败的回调函数
            }
        }
    }
}

