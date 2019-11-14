(function () {

    //登录方式
    let phoneLogin = document.querySelector('.box-phone-login');
    let computerLogin = document.querySelector('.box-computer-login');
    document.querySelector('.box-phone-login .login-way').onclick = function () {
        phoneLogin.style.display = "none";
        computerLogin.style.display = "block";
    }
    document.querySelector('.box-computer-login .login-way').onclick = function () {
        computerLogin.style.display = "none";
        phoneLogin.style.display = "block";
    }

    /*
     *手机
     */

    //点击输入框
    let index = 0;
    document.querySelector('.phone-ipt input').onclick = function () {
        let phoneReg = document.querySelector('.box-phone-login .reg-api');
        phoneReg.style.display = "block";
        index = 1;
        this.onclick = false;
    }

    //选择地区
    let lis = document.querySelectorAll('.box-phone-login .area-num .data');
    let val = document.querySelector('.box-phone-login .area>input');
    let area = document.querySelector('.box-phone-login .area');
    let list = document.querySelector('.box-phone-login .area-num');
    area.onclick = function () {
        list.style.display = 'block';
        // console.log(list);
    }
    for (let i = 0, len = lis.length; i < len; i++) {
        lis[i].onclick = function () {
            val.value = this.lastChild.innerText;
            list.style.display = 'none';
            // console.log(list);
            // 阻止事件冒泡
            event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
        }
    }

    //关闭提示
    document.querySelector('.box-phone-login .tip-box .close').onclick = function () {
        let tip = document.querySelector('.box-phone-login .tip-box');
        tip.style.visibility = 'hidden';
    }

    //点击验证
    let reg = /^1[34578]\d{9}$/;
    let rindex = 0;
    document.querySelector('.box-phone-login .reg-api').onclick = function () {
        let ipt = document.querySelector('.box-phone-login .phone-ipt input').value;
        let tip = document.querySelector('.box-phone-login .tip-box');
        let tipText = document.querySelector('.box-phone-login .tip-box .text');
        let regCode = document.querySelector('.box-phone-login .reg-code');
        let phoneIpt = document.querySelector('.box-phone-login .phone-ipt input');
        let phoneTipBox = document.querySelector('.box-phone-login .tip-box');
        let phoneTipBoxText = document.querySelector('.box-phone-login .tip-box .text');
        if (reg.test(ipt)) { //验证是否注册
            ajax({
                data: 'username=' + phoneIpt.value,
                url: 'php/logRes.php',
                type: 'post',
                succeed: function (data) {
                    // console.log(data);
                    let json = JSON.parse(data);
                    if (json.err == "1") {
                        phoneTipBox.style.visibility = 'visible';
                        phoneTipBoxText.innerHTML = '该手机号码尚未注册，<a href="jy_regis.html">立即注册</a>';
                    } else {
                        tip.style.visibility = 'hidden';
                        document.querySelector('.box-phone-login .reg-api').innerHTML = `
                                    <span class="true"></span>
                                    <span class="text2">验证成功</span>
                                    <span class="logo2"></span>
                                `;
                        document.querySelector('.box-phone-login .reg-api').style.border = '1px solid #18a452';
                        rindex = 1;
                        setTimeout(() => {
                            document.querySelector('.box-phone-login .reg-api').style.display = "none";
                            regCode.style.display = "block";
                        }, 500);
                        getRegCode1();
                        let photo = json.data[8].replace(/\s+/g,"\+");
                        localStorage.setItem('photo', photo); //设置 photo
                    }
                },
                failed: function (code) {
                    alert('链接失败');
                    console.log(code);
                }
            });
        } else {
            tip.style.visibility = 'visible';
            tipText.innerText = '手机号码输入有误';
        }
    }

    //获取验证码
    document.querySelector('.box-phone-login .get-code').onclick = function () {
        getRegCode1();
    }

    //验证码
    function getRegCode1() {
        let countdowm = 59;
        let timer = setInterval(() => {
            if (countdowm == 0) {
                //回显
                document.querySelector('.box-phone-login .get-code').innerText = '获取验证码';
                clearInterval(timer);
                document.querySelector('.box-phone-login .get-code').disabled = '';
                return;
            } else {
                //倒计时
                document.querySelector('.box-phone-login .get-code').innerText = countdowm + '秒后重新获取';
                countdowm--;
                countdowm = countdowm < 10 ? '0' + countdowm : countdowm;
            }
        }, 1000);
        document.querySelector('.box-phone-login .get-code').disabled = 'disabled';
    }

    //点击登录
    document.querySelector('.box-phone-login .login-btn').onclick = function () {
        let tip = document.querySelector('.box-phone-login .tip-box');
        let tipText = document.querySelector('.box-phone-login .tip-box .text');
        let iptCode = document.querySelector('.ipt-code').value;
        if (index == 0) {
            tip.style.visibility = 'visible';
            tipText.innerText = '请先输入手机号码';
            return;
        }
        if (rindex == 0) {
            tip.style.visibility = 'visible';
            tipText.innerText = '请先点击验证按钮';
            return;
        }
        //验证短信验证码
        if (iptCode != "123456") {
            tip.style.visibility = 'visible';
            tipText.innerText = '验证码输入错误';
            document.querySelector('.box-phone-login .reg-api').innerHTML = `
            <span class="leida"></span>
            <span class="text">点击按钮进行验证</span>
            <span class="logo"></span>
        `;
            document.querySelector('.box-phone-login .reg-api').style.border = '1px solid #ccc';
        } else {
            tip.style.visibility = 'hidden';
            localStorage.setItem("username", "login"); //存一个登录状态
            // alert('登录成功');
            window.location.assign('Jin_index.html');
        }
    }

    /*
     *电脑
     */

    //勾选记住登录状态
    let index3 = 0;
    document.querySelector('.log-chk').onclick = function () {
        if (index3 == 0) {
            this.style.backgroundPosition = '-32px -160px';
            index3 = 1;
        } else {
            this.style.backgroundPosition = '0 -128px';
            index3 = 0;
        }
    }

    //关闭提示
    document.querySelector('.box-computer-login .tip-box .close').onclick = function () {
        let tip = document.querySelector('.box-computer-login .tip-box');
        tip.style.visibility = 'hidden';
    }

    //点击验证
    let reg2 = /[a-zA-Z0-9]{6,16}/;
    let rindex2 = 0;
    document.querySelector('.box-computer-login .reg-api').onclick = function () {
        let ipt = document.querySelector('.box-computer-login .username').value;
        let pwd = document.querySelector('.box-computer-login .password').value;
        let tip = document.querySelector('.box-computer-login .tip-box');
        let tipText = document.querySelector('.box-computer-login .tip-box .text');
        if (reg.test(ipt) && reg2.test(pwd)) {
            tip.style.visibility = 'hidden';
            this.innerHTML = `
                                        <span class="true"></span>
                                        <span class="text2">验证成功</span>
                                        <span class="logo2"></span>
                                    `;
            this.style.border = '1px solid #18a452';
            rindex2 = 1;
        } else {
            tip.style.visibility = 'visible';
            tipText.innerText = '请填写正确的登录信息';
        }
    }

    //点击登录
    document.querySelector('.box-computer-login .login-btn').onclick = function () {
        let tip = document.querySelector('.box-computer-login .tip-box');
        let tipText = document.querySelector('.box-computer-login .tip-box .text');
        let ipt = document.querySelector('.box-computer-login .username').value;
        let pwd = document.querySelector('.box-computer-login .password').value;
        if (ipt == '' || pwd == '') {
            tip.style.visibility = 'visible';
            tipText.innerText = '请填写完整的登录信息';
            return;
        }
        if (rindex2 == 0) {
            tip.style.visibility = 'visible';
            tipText.innerText = '请先点击验证按钮';
            return;
        }
        ajax({
            data: 'username=' + ipt + '&password=' + pwd + '&ope=log',
            url: 'php/logRes.php',
            type: 'post',
            succeed: function (data) {
                console.log(data);
                let json = JSON.parse(data);
                if (json.err == "1") {
                    tip.style.visibility = 'visible';
                    tipText.innerText = json.msg;
                    document.querySelector('.box-computer-login .reg-api').innerHTML = `
                    <span class="leida"></span>
                    <span class="text">点击按钮进行验证</span>
                    <span class="logo"></span>
                `;
                    document.querySelector('.box-computer-login .reg-api').style.border = '1px solid #ccc';
                    rindex2 = 0;
                } else {
                    tip.style.visibility = 'hidden';
                    // alert(json.msg);  
                    let photo2 = json.data[8].replace(/\s+/g,"\+");
                    localStorage.setItem('photo', photo2); //设置 photo
                    localStorage.setItem("username", "login"); //存一个登录状态
                    if (index3 == 1) {
                        setCookie('user', [ipt, pwd], 7);
                    }
                    window.location.assign('Jin_index.html');
                }
            },
            failed: function (code) {
                alert('链接失败');
                console.log(code);
            }
        });
    }

    //自动加载cookie
    document.querySelector('.ipt-box .username').onclick = function () {
        let ipt = document.querySelector('.box-computer-login .username');
        let pwd = document.querySelector('.box-computer-login .password');
        var getData = getCookie('user');
        if (getData) {
            var cutlineArr = getData.split(',');
            ipt.value = cutlineArr[0];
            pwd.value = cutlineArr[1];
        }
    }

    // 获取cookie
    function getCookie(key) {
        let arr1 = document.cookie.split('; ');
        for (let i = 0; i < arr1.length; i++) {
            let arr2 = arr1[i].split('='); //["user1","xiaowang"]
            if (arr2[0] === key) {
                return unescape(arr2[1]);
            }
        }
        return null;
    }

    // 设置cookie
    function setCookie(key, value, day) {
        if (day) { //如果要设置有效期
            let d = new Date();
            d.setDate(d.getDate() + day);
            document.cookie = key + '=' + escape(value) + '; expires=' + d;
        } else { //临时cookie
            document.cookie = key + '=' + escape(value);
        }
    }

})();