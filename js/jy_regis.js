(function () {
    //勾选协议
    let index = 0;
    document.querySelector('.circle-chk').onclick = function () {
        if (index == 1) {
            this.style.backgroundImage = 'url(images/jy_ico_checkbox_unselected.png)';
            index = 0;
        } else {
            this.style.backgroundImage = 'url(images/jy_ico_checkbox_selected.png)';
            index = 1;
        }
    }

    //选择地区
    let lis = document.querySelectorAll('.area-num .data');
    let val = document.querySelector('.area>input');
    let area = document.querySelector('.area');
    let list = document.querySelector('.area-num');
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
    document.querySelector('.tip-box .close').onclick = function () {
        let tip = document.querySelector('.tip-box');
        tip.style.visibility = 'hidden';
    }

    //点击验证
    let reg = /^1[34578]\d{9}$/;
    let rindex = 0;
    document.querySelector('.reg-api').onclick = function () {
        let ipt = document.querySelector('.phone-ipt input').value;
        let tip = document.querySelector('.tip-box');
        let tipText = document.querySelector('.tip-box .text');
        if (reg.test(ipt)) {
            tip.style.visibility = 'hidden';
            this.innerHTML = `
                                <span class="true"></span>
                                <span class="text2">验证成功</span>
                                <span class="logo2"></span>
                            `
            this.style.border = '1px solid #18a452';
            rindex = 1;
        } else {
            tip.style.visibility = 'visible';
            tipText.innerText = '手机号码输入有误';
        }
    }

    //获取验证码
    document.querySelector('.get-code').onclick = function () {
        getRegCode();
    }

    //验证码
    function getRegCode() {
        let countdowm = 59;
        let gcode = document.querySelector('.get-code');
        let timer = setInterval(() => {
            if (countdowm == 0) {
                //回显
                gcode.innerText = '获取验证码';
                clearInterval(timer);
                gcode.disabled = '';
                return;
            } else {
                //倒计时
                gcode.innerText = countdowm + '秒后重新获取';
                countdowm--;
                countdowm = countdowm < 10 ? '0' + countdowm : countdowm;
            }
        }, 1000);
        gcode.disabled = 'disabled';
    }

    //点击注册
    document.querySelector('.res-btn').onclick = function () {
        let tip = document.querySelector('.tip-box');
        let tipText = document.querySelector('.tip-box .text');
        let textBox = document.querySelector('.text-box');
        let regApi = document.querySelector('.reg-api');
        let prodocol = document.querySelector('.prodocol');
        let tipCode = document.querySelector('.tip-code');
        let regCode = document.querySelector('.reg-code');
        let areaNum = document.querySelector('.area input');
        let phone = document.querySelector('.phone-ipt input');
        let tipArea = document.querySelector('.tip-area');
        let phoneNum = document.querySelector('.phone-num');
        let resBtn = document.querySelector('.res-btn');
        let nextStep = document.querySelector('.next-step');
        let alreadyReg = document.querySelector('.already-reg');
        let alreadyTipArea = document.querySelector('.already-tip-area');
        let alreadyPhoneNum = document.querySelector('.already-phone-num');
        let readyLogin = document.querySelector('.ready-login');
        let loginBtn = document.querySelector('.login-btn');
        let register = document.querySelector('.register');
        if (rindex == 0) {
            tip.style.visibility = 'visible';
            tipText.innerText = '请先点击验证按钮';
            return;
        }
        if (index == 0) {
            tip.style.visibility = 'visible';
            tipText.innerText = '请先同意用户条款';
        } else {
            tip.style.visibility = 'hidden';
            textBox.style.display = 'none';
            regApi.style.display = 'none';
            prodocol.style.display = 'none';
            resBtn.style.display = 'none';
            ajax({
                data: 'username=' + phone.value,
                url: 'php/logRes.php',
                type: 'post',
                succeed: function (data) {
                    // console.log(data);
                    let json = JSON.parse(data);
                    if (json.err == "1") {
                        tipCode.style.display = 'block';
                        regCode.style.display = 'block';
                        nextStep.style.display = 'block';
                        tipArea.innerText = areaNum.value;
                        phoneNum.innerText = phone.value;
                        getRegCode();
                    } else {
                        loginBtn.style.display = 'none';
                        register.style.display = 'block';
                        alreadyReg.style.display = "block";
                        readyLogin.style.display = "block";
                        alreadyTipArea.innerText = areaNum.value;
                        alreadyPhoneNum.innerText = phone.value;
                    }
                },
                failed: function (code) {
                    alert('链接失败');
                    console.log(code);
                }
            });
        }
    }

    //点击下一步
    document.querySelector('.next-step').onclick = function () {
        let tip = document.querySelector('.tip-box');
        let tipText = document.querySelector('.tip-box .text');
        let iptCode = document.querySelector('.ipt-code').value;
        let tipCode = document.querySelector('.tip-code');
        let regCode = document.querySelector('.reg-code');
        let nextStep = document.querySelector('.next-step');
        let tipPwd = document.querySelector('.tip-pwd');
        let regPwd = document.querySelector('.reg-pwd');
        let submit = document.querySelector('.submit');
        if (iptCode != "123456") {
            tip.style.visibility = 'visible';
            tipText.innerText = '请输入正确的验证码';
        } else {
            tip.style.visibility = 'hidden';
            tipCode.style.display = 'none';
            regCode.style.display = 'none';
            nextStep.style.display = 'none';
            tipPwd.style.display = "block";
            regPwd.style.display = "block";
            submit.style.display = "block";
        }
    }

    //点击眼睛
    let eindex = 1;
    document.querySelector('.look-pwd').onclick = function () {
        let iptPwd = document.querySelector('.ipt-pwd');
        if (eindex == 0) {
            iptPwd.setAttribute('type', 'password');
            eindex = 1;
        } else {
            iptPwd.setAttribute('type', 'text');
            eindex = 0;
        }
    }

    //提交密码
    let reg2 = /[a-zA-Z0-9]{6,16}/;
    document.querySelector('.submit').onclick = function () {
        let tip = document.querySelector('.tip-box');
        let tipText = document.querySelector('.tip-box .text');
        let iptPwd = document.querySelector('.ipt-pwd');
        let phone = document.querySelector('.phone-ipt input');
        if (reg2.test(iptPwd.value)) {
            tip.style.visibility = 'hidden';
            ajax({
                data: 'username=' + phone.value + '&password=' + iptPwd.value + '&ope=res',
                url: 'php/logRes.php',
                type: 'post',
                succeed: function (data) {
                    console.log(data);
                    let json = JSON.parse(data);
                    if (json.err == "1") {
                        alert(json.msg);
                    } else {
                        //设置
                        localStorage.setItem('key1', phone.value); //设置 
                        localStorage.setItem('key2', iptPwd.value); //设置 
                        window.location.assign('jy_personal.html');
                    }
                },
                failed: function (code) {
                    alert('链接失败');
                    console.log(code);
                }
            });
        } else {
            tip.style.visibility = 'visible';
            tipText.innerText = '密码格式错误';
        }
    }

})();