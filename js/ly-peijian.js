
ajax({//推荐
    url: 'php/goods.php',
    data: 'module=accessory_rec',
    type: 'get',
    succeed: function (data) {
        // console.log(data);
        var json = JSON.parse(data);
        // console.log(json);
        var ulCont = document.querySelector('.ul-con')
        // console.log(ulCont)

        for (var i = 0; i < 8; i++) {
            ulCont.innerHTML += `

    <li>
        <a href="#">
            <img src="${json[i].pic}" alt="">
            <em></em>
            <h3>${json[i].name}</h3>
            <p>${json[i].slogan}</p>
            <i>  
                <span>${json[i].price}</span>
            </i>
        </a>
    </li>
        `;
        }
    }, faild: function (err) {
        console.log(err);

    }
})


// 新品
ajax({ //
    url: 'php/goods.php',
    data: 'module=accessory_new',
    type: 'get',
    succeed: function (data) {
        // console.log(data);
        var json = JSON.parse(data);
        // console.log(json);
        var ulCont = document.querySelector('.ul-con1')
        // console.log(ulCont)

        ulCont.innerHTML = '';
        for (var i = 0; i < 8; i++) {
            ulCont.innerHTML += `

            <li>
                <a href="#">
                    <img src="${json[i].pic}" alt="">
                    <em></em>
                    <h3>${json[i].name}</h3>
                    <p>${json[i].slogan}</p>
                    <i>  
                        <span>${json[i].price}</span>
                    </i>
                </a>
            </li>
                `;
        }


        var oA = document.querySelectorAll('#ly-main .cont .title .right a');
        var lists = document.querySelectorAll('#ly-main .cont .list')

        // console.log(oA);

        for (var i = 0; i < oA.length; i++) {
            oA[i].index = i;
            oA[i].onclick = function () {
                for (var i = 0; i < lists.length; i++) {

                    // oA[i].classList.remove = 'show';
                    oA[i].style.color = '';

                    lists[i].style.display = 'none';
                }
                this.style.color = '#00c3f5';
                lists[this.index].style.display = 'block';
            }
        }
    }, faild: function (err) {
        console.log(err);

    }
})



//轮播图 圆点控制
var mySwiper = new Swiper('.swiper-container', {
    // 分页器
    pagination: {

        el: '.swiper-pagination',
        clickable: true,//鼠标点击圆点控制图片
    },

})


ajax({  //轮播
    url: 'php/goods.php',
    data: 'module=banner',
    type: 'get',
    succeed: function (data) {
        // console.log(data);
        var json = JSON.parse(data);
        // console.log(json);
        var lis = document.querySelectorAll('.swiper-slide a')
        // console.log(lis)

        for (var i = 0; i < json.length; i++) {
            lis[i].innerHTML = `
                <img src="${json[i].pic}" alt="">
                <h3>${json[i].name}</h3>                  
                <span>${json[i].price}</span>
                                                        
                 `;
        };
    }, faild: function (err) {
        console.log(err);

    }
});
















