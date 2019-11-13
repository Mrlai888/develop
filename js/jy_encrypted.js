(function () {
    // 一进入页面 根据手机号 请求问题
    let regPhoneNum = localStorage.getItem('regPhoneNum');
    let question1 = document.querySelector('.question1 .quetext');
    let question2 = document.querySelector('.question2 .quetext');
    ajax({
        url: 'php/logRes.php',
        type: 'post',
        data: 'username=' + regPhoneNum + '&ope=question',
        succeed: function (data) {
            // console.log(data);
            let json = JSON.parse(data);
            question1.innerText = json.data[4];
            question2.innerText = json.data[6];
        },
        failed: function (err) {
            console.log(err);
        }
    })

    //提交验证
    document.querySelector('.next-step').onclick = function () {
        let answer1 = document.querySelector('.answer1 input').value;
        let answer2 = document.querySelector('.answer2 input').value;
        let tip1 = document.querySelector('.answer1 .err-tip');
        let tip2 = document.querySelector('.answer2 .err-tip');
        //判断空
        if (answer1 == '') {
            tip1.style.visibility = 'visible';
            tip1.innerText = '请输入密码问题答案';
        } else {
            tip1.style.visibility = 'hidden';
        }
        if (answer2 == '') {
            tip2.style.visibility = 'visible';
            tip2.innerText = '请输入密码问题答案';
            return;
        } else {
            tip2.style.visibility = 'hidden';
        }

        //请求问题答案
        ajax({
            url: 'php/logRes.php',
            type: 'post',
            data: 'username=' + regPhoneNum + '&ope=answer',
            succeed: function (data) {
                // console.log(data);
                let json = JSON.parse(data);
                if (answer1 != json.data[5] ) {
                    tip1.style.visibility = 'visible';
                    tip1.innerText = '密保验证错误';
                }
                if(answer2 != json.data[7]){
                    tip2.style.visibility = 'visible';
                    tip2.innerText = '密保验证错误';
                    return;
                }
                window.location.assign('jy_pwd-rew.html');
            },
            failed: function (err) {
                console.log(err);
            }
        })
    }
})();