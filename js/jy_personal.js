(function () {
    //上传头像
    let upload = document.querySelector('.upload');
    let cvs = document.querySelector('.cvs');
    let ctx = cvs.getContext('2d');

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
            // console.log(this.result);//读取到的图片路径 base64
            let img = new Image();
            img.src = this.result;
            img.onload = function () {
                ctx.beginPath();
                ctx.drawImage(this, 0, 0, 200, 200);
                ctx.closePath();
            }
        }
    }

    document.querySelector('.finish').onclick = function () {
        let que1 = document.querySelector('.que1').value;
        let que2 = document.querySelector('.que2').value;
        let asw1 = document.querySelector('.asw1').value;
        let asw2 = document.querySelector('.asw2').value;
        let asw1_errTip = document.querySelector('.answer1 .err-tip');
        let asw2_errTip = document.querySelector('.answer2 .err-tip');
        if (asw1 == '') {
            asw1_errTip.style.visibility = 'visible';
        } else {
            asw1_errTip.style.visibility = 'hidden';
        }
        if (asw2 == '') {
            asw2_errTip.style.visibility = 'visible';
        } else {
            asw2_errTip.style.visibility = 'hidden';
        }
        if (que1 == '' || que2 == "") {
            alert('问题 空');
        } else {
            let phone = localStorage.getItem('key1')
            let pass = localStorage.getItem('key2');
            ajax({
                data: 'username=' + phone + '&password=' + pass + '&question1=' + que1 + '&question2=' + que2 + '&answer1=' + asw1 + '&answer2=' + asw2 + '&ope=setqueasw',
                url: 'php/logRes.php',
                type: 'post',
                succeed: function (data) {
                    console.log(data);
                },
                failed: function (code) {
                    alert('链接失败');
                    console.log(code);
                }
            });
        }
    }

})();