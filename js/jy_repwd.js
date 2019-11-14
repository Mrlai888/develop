(function () {
    document.querySelector('.username input').addEventListener("input", function () {
        let userErr = document.querySelector('.username .err-tip');
        userErr.style.visibility = 'hidden';
    })
    document.querySelector('.password input').oninput = function () {
        let passErr = document.querySelector('.password .err-tip');
        passErr.style.visibility = 'hidden';
    }
    let reg = /[a-zA-Z0-9]{6,16}/;
    document.querySelector('.username input').addEventListener("blur", function () {
        let userErr = document.querySelector('.username .err-tip');
        let userIpt = document.querySelector('.username input').value;
        if (!reg.test(userIpt)) {
            userErr.style.visibility = 'visible';
            userErr.innerText = '密码应为6~16个字符，区分大小写';
            document.querySelector('.true-rew').onclick = null;
        } else {
            userErr.style.visibility = 'hidden';
            document.querySelector('.true-rew').onclick = function () {
                let userErr = document.querySelector('.username .err-tip');
                let passErr = document.querySelector('.password .err-tip');
                let userIpt = document.querySelector('.username input').value;
                let passIpt = document.querySelector('.password input').value;
                let regPhoneNum = localStorage.getItem('regPhoneNum'); //拿手机号码
                if (userIpt == '') {
                    userErr.style.visibility = 'visible';
                    userErr.innerText ='请填写密码';
                }
                if (passIpt == '') {
                    passErr.style.visibility = 'visible';
                    passErr.innerText ='请填写重复密码';
                    return;
                }
                if (userIpt != passIpt) {
                    passErr.style.visibility = 'visible';
                    passErr.innerText = '两次输入密码不一致';
                    return;
                }
                userErr.style.visibility = 'hidden';
                passErr.style.visibility = 'hidden';
                ajax({
                    url: 'php/logRes.php',
                    type: 'post',
                    data: 'username=' + regPhoneNum + '&password=' + passIpt + '&ope=rew',
                    succeed: function (data) {
                        localStorage.removeItem('regPhoneNum'); //regPhoneNum;
                        window.location.assign('jy_login.html');
                    },
                    failed: function (err) {
                        console.log(err);
                    }
                })
            }
        }
    })
    document.querySelector('.true-rew').onclick = function () {
        let userErr = document.querySelector('.username .err-tip');
        let passErr = document.querySelector('.password .err-tip');
        let userIpt = document.querySelector('.username input').value;
        let passIpt = document.querySelector('.password input').value;
        let regPhoneNum = localStorage.getItem('regPhoneNum'); //拿手机号码
        if (userIpt == '') {
            userErr.style.visibility = 'visible';
            userErr.innerText ='请填写密码';
        }
        if (passIpt == '') {
            passErr.style.visibility = 'visible';
            passErr.innerText ='请填写重复密码';
            return;
        }
        if (userIpt != passIpt) {
            passErr.style.visibility = 'visible';
            passErr.innerText = '两次输入密码不一致';
            return;
        }
        userErr.style.visibility = 'hidden';
        passErr.style.visibility = 'hidden';
        ajax({
            url: 'php/logRes.php',
            type: 'post',
            data: 'username=' + regPhoneNum + '&password=' + passIpt + '&ope=rew',
            succeed: function (data) {
                localStorage.removeItem('regPhoneNum'); //regPhoneNum;
                window.location.assign('jy_login.html');
            },
            failed: function (err) {
                console.log(err);
            }
        })
    }

    //点击眼睛
    let eindex1 = 1;
    document.querySelector('.eye1').onclick = function () {
        let iptPwd1 = document.querySelector('.username input');
        if (eindex1 == 0) {
            iptPwd1.setAttribute('type', 'password');
            eindex1 = 1;
        } else {
            iptPwd1.setAttribute('type', 'text');
            eindex1 = 0;
        }
    }
    let eindex2 = 1;
    document.querySelector('.eye2').onclick = function () {
        let iptPwd2 = document.querySelector('.password input');
        if (eindex2 == 0) {
            iptPwd2.setAttribute('type', 'password');
            eindex2 = 1;
        } else {
            iptPwd2.setAttribute('type', 'text');
            eindex2 = 0;
        }
    }
})();