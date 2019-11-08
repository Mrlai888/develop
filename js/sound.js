$.ajax({
    url: "php/fodder.php",
    type: "get",
    data: "module=adv",
    dataType: "json",
    success: function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            $('.mt-image').css({
                backgroundImage: 'url(' + data[1].url + ')'
            })
        }
    }
})


ajax({
    url: "php/goods.php",
    type: "get",
    data: "module=music_rec",
    succeed: function (data) {
        var json = JSON.parse(data);
        console.log(json);
        for (var i = 0, len = json.length; i < len; i++) {
            document.querySelector('.good-list-wrap').innerHTML += `
                          <li class="gl-item">
                        <a href="javascript:;" class="gl-item-link" title="${json[i].name}">
                        <img src="${json[i].pic}" alt="${json[i].name}" class="item-pic">
                        <ul class="item-slide">
                            <li class="item-slide-dot active" title="湖光绿">
                                <img src="https://openfile.meizu.com/group1/M00/07/7E/Cgbj0V2wCvOAXBtZAAAQmfSg29c559.png"
                                     alt="${json[i].name}">
                            </li>
                            <li class="item-slide-dot" title="鲸跃蓝">
                                <img src="https://openfile.meizu.com/group1/M00/07/67/Cgbj0F2wCvOAWIoaAAAQumAb0IQ155.png"
                                     alt="${json[i].name}">
                            </li>
                            <li class="item-slide-dot" title="日光橙">
                                <img src="https://openfile.meizu.com/group1/M00/07/67/Cgbj0F2wCvOAMJ7MAAARfgRallY579.png"
                                     alt="${json[i].name}">
                            </li>
                        </ul>
                        <h3 class="item-title">${json[i].name}</h3>
                        <p class="item-desc">${json[i].slogan}</p>
                        <p class="item-price">
                          <span class="vm-price">${json[i].price}</span>
                        </p>
                        <p class="item-hot"> ${json[i].activity} </p>
                    </a>
                </li> 
            `
        }
    }
})


$('#rec').click(function () {
    document.querySelector('.good-list-wrap').innerHTML = '';
    ajax({
        url: "php/goods.php",
        type: "get",
        data: "module=music_rec",
        succeed: function (data) {
            var json = JSON.parse(data);
            console.log(json);
            for (var i = 0, len = json.length; i < len; i++) {
                document.querySelector('.good-list-wrap').innerHTML += `
                          <li class="gl-item">
                        <a href="javascript:;" class="gl-item-link" title="${json[i].name}">
                        <img src="${json[i].pic}" alt="${json[i].name}" class="item-pic">
                        <ul class="item-slide">
                            <li class="item-slide-dot active" title="湖光绿">
                                <img src="https://openfile.meizu.com/group1/M00/07/7E/Cgbj0V2wCvOAXBtZAAAQmfSg29c559.png"
                                     alt="${json[i].name}">
                            </li>
                            <li class="item-slide-dot" title="鲸跃蓝">
                                <img src="https://openfile.meizu.com/group1/M00/07/67/Cgbj0F2wCvOAWIoaAAAQumAb0IQ155.png"
                                     alt="${json[i].name}">
                            </li>
                            <li class="item-slide-dot" title="日光橙">
                                <img src="https://openfile.meizu.com/group1/M00/07/67/Cgbj0F2wCvOAMJ7MAAARfgRallY579.png"
                                     alt="${json[i].name}">
                            </li>
                        </ul>
                        <h3 class="item-title">${json[i].name}</h3>
                        <p class="item-desc">${json[i].slogan}</p>
                        <p class="item-price">
                          <span class="vm-price">${json[i].price}</span>
                        </p>
                        <p class="item-hot"> ${json[i].activity} </p>
                    </a>
                </li> 
            `
            }
        }
    })
})

$('#new').click(function () {
    document.querySelector('.good-list-wrap').innerHTML = '';
    ajax({
        url: "php/goods.php",
        type: "get",
        data: "module=music_new",
        succeed: function (data) {
            var json = JSON.parse(data);
            console.log(json);
            for (var i = 0, len = json.length; i < len; i++) {
                document.querySelector('.good-list-wrap').innerHTML += `
                          <li class="gl-item">
                        <a href="javascript:;" class="gl-item-link" title="${json[i].name}">
                        <img src="${json[i].pic}" alt="${json[i].name}" class="item-pic">
                        <ul class="item-slide">
                            <li class="item-slide-dot active" title="湖光绿">
                                <img src="https://openfile.meizu.com/group1/M00/07/7E/Cgbj0V2wCvOAXBtZAAAQmfSg29c559.png"
                                     alt="${json[i].name}">
                            </li>
                            <li class="item-slide-dot" title="鲸跃蓝">
                                <img src="https://openfile.meizu.com/group1/M00/07/67/Cgbj0F2wCvOAWIoaAAAQumAb0IQ155.png"
                                     alt="${json[i].name}">
                            </li>
                            <li class="item-slide-dot" title="日光橙">
                                <img src="https://openfile.meizu.com/group1/M00/07/67/Cgbj0F2wCvOAMJ7MAAARfgRallY579.png"
                                     alt="${json[i].name}">
                            </li>
                        </ul>
                        <h3 class="item-title">${json[i].name}</h3>
                        <p class="item-desc">${json[i].slogan}</p>
                        <p class="item-price">
                          <span class="vm-price">${json[i].price}</span>
                        </p>
                        <p class="item-hot"> ${json[i].activity} </p>
                    </a>
                </li> 
            `
            }
        }
    })

})


ajax({
    url: "php/goods.php",
    type: "get",
    data: "module=banner",
    succeed: function (data) {
        var json = JSON.parse(data);
        console.log(json);
        for (var i = 0, len = json.length; i < len; i++) {
            document.querySelector('.recommend-slider-wrap').innerHTML += `
                    <li class="rs-item" style="width: 310px; margin-right: 0px; float: left; display: block;">
                            <a class="rs-item-wrap" title="${json[i].name}" href="#">
                                <div class="mod-pic">
                                    <img src="${json[i].pic}">
                                </div>
                                <div class="mod-desc">
                                    <h4 class="vm-title">${json[i].name}</h4>
                                    <p class="vm-price">
                                  <span class="vm-price-text">${json[i].price}</span>
                                    </p>
                                </div>
                            </a>
                        </li>
`
        }
    }
})