(function () {
    //上传头像
    let upload = document.querySelector('.upload');
    let cvs = document.querySelector('.cvs');
    let ctx = cvs.getContext('2d');
    localStorage.removeItem('photo'); //清除;

    upload.onchange = function () {
        // console.log(this.files);//上传文件列表 FileList {0: File, length: 1}
        let file = this.files[0]; //获取上传文件对象

        // 判断上传文件是否为图片
        if (!(/image\/\w+/.test(file.type))) {
            alert('上传文件必须为图片！');
            return false;
        }

        let reader = new FileReader(); // 读取文件的对象
        // console.log(reader);
        reader.readAsDataURL(file); //把文件转成url
        reader.onload = function () {
            console.log(this.result);//读取到的图片路径 base64
            localStorage.setItem('photo', this.result); //设置 
            let img = new Image();
            img.src = this.result;
            img.onload = function () {
                ctx.beginPath();
                ctx.drawImage(this, 0, 0, 200, 200);
                ctx.closePath();
            }
        }
        // setTimeout(() => {
        //     console.log(reader.result);
        // }, 10000);
    }
    

    document.querySelector('.finish').onclick = function () {
        let que1 = document.querySelector('.que1').value;
        let que2 = document.querySelector('.que2').value;
        let asw1 = document.querySelector('.asw1').value;
        let asw2 = document.querySelector('.asw2').value;
        let asw1_errTip = document.querySelector('.answer1 .err-tip');
        let asw2_errTip = document.querySelector('.answer2 .err-tip');
        let read = localStorage.getItem('photo');
        // console.log(read);
        // console.log(asw1);
        // console.log(asw2);
        // console.log(que1);
        // console.log(que2);
        
        if (read == null) {
            alert('请上传分辨率小于100px*100px的头像');
            return;
        }
        if (asw1 == '') {
            asw1_errTip.style.visibility = 'visible';
        } else {
            asw1_errTip.style.visibility = 'hidden';
        }
        if (asw2 == '') {
            asw2_errTip.style.visibility = 'visible';
            return;
        } else {
            asw2_errTip.style.visibility = 'hidden';
        }
        if (que1 == '' || que2 == "") {
            alert('请输入问题');
            return;
        }
        let phone = localStorage.getItem('key1');
        let pass = localStorage.getItem('key2');
        ajax({
            data: 'username=' + phone + '&password=' + pass + '&question1=' + que1 + '&question2=' + que2 + '&answer1=' + asw1 + '&answer2=' + asw2 + '&photo=' + read + '&ope=setqueasw',
            url: 'php/logRes.php',
            type: 'post',
            succeed: function (data) {
                // console.log(data);
                localStorage.setItem("username", "login");//存一个登录状态
                window.location.assign('Jin-index.html');//注册成功，直接去首页，免登录
            },
            failed: function (code) {
                alert('链接失败');
                console.log(code);
            }
        });

    }

})();