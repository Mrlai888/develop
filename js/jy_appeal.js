(function () {
    // 函数 randomCode 生成6位随机验证码
    function randomCode() {
        var arr = [1, 1, 1, 1, 1, 1]; //存储生成的随机字符
        for (var i in arr) {
            // 48-122
            do {
                var ascii = Math.round(Math.random() * (122 - 48)) + 48; // 48-122
            } while (ascii > 57 && ascii < 65 || ascii > 90 && ascii < 97);
            arr[i] = String.fromCharCode(ascii);
        }
        return arr.join(''); //  返回的字符串
    }
    let box = document.querySelector('.random-code');
    box.innerText = randomCode();
    box.onclick = function () {
        box.innerText = randomCode();
    }

    document.querySelector('.next-step').onclick = function () {
        let random = document.querySelector('.random-code').innerText;
        let userTip = document.querySelector('.user-tip');
        let codeTip = document.querySelector('.pwd-tip');
        let userIpt = document.querySelector('.username input').value;
        let codeIpt = document.querySelector('.regcode input').value;      
        if (codeIpt != random) {
            codeTip.style.visibility = 'visible';
            codeTip.innerText = '图文验证码错误';
            box.innerText = randomCode();
            return;
        } else {
            codeTip.style.visibility = 'hidden';
        }
        let reg = /^1[34578]\d{9}$/;
        if (reg.test(userIpt)) { //验证是否注册
            ajax({
                data: 'username=' + userIpt,
                url: 'php/logRes.php',
                type: 'post',
                succeed: function (data) {
                    // console.log(data);
                    let json = JSON.parse(data);
                    if (json.err == "1") {
                        userTip.style.visibility = 'visible';
                        userTip.innerText = '账号不存在';
                    } else {
                        userTip.style.visibility = 'hidden';
                        window.location.assign('jy_appeal-type.html');
                    }
                },
                failed: function (code) {
                    alert('链接失败');
                    console.log(code);
                }
            });
        } else {
            userTip.style.visibility = 'visible';
            userTip.innerText = '手机号码输入格式有误';
        }
    }
})();