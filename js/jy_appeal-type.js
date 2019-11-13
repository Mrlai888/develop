(function () {
    //勾选记住登录状态
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    document.querySelector('.chk1').onclick = function () {
        if (index1 == 0) {
            this.style.backgroundPosition = '-32px -160px';
            index1 = 1;
        } else {
            this.style.backgroundPosition = '0 -128px';
            index1 = 0;
        }
    }
    document.querySelector('.chk2').onclick = function () {
        if (index2 == 0) {
            this.style.backgroundPosition = '-32px -160px';
            index2 = 1;
        } else {
            this.style.backgroundPosition = '0 -128px';
            index2 = 0;
        }
    }
    document.querySelector('.chk3').onclick = function () {
        let ipt = document.querySelector('.other input');
        // console.log(ipt);
        if (index3 == 0) {
            this.style.backgroundPosition = '-32px -160px';
            index3 = 1;
            ipt.removeAttribute('readonly');
        } else {
            this.style.backgroundPosition = '0 -128px';
            index3 = 0;
        }
    }

    let reg = /^[a-zA-Z0-9\u4e00-\u9fa5]{0,10}$/;
    document.querySelector('.next-step').onclick = function () {
        let pwdTip = document.querySelector('.pwd-tip');
        let ipt = document.querySelector('.other input');
        if (reg.test(ipt.value)) {
            pwdTip.style.visibility = 'visible';
        }else{
            pwdTip.style.visibility = 'hidden';
        }
    }
})();