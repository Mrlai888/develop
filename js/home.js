
    // console.log($(".checkboxAll"));
    //点击全选， 子选款选中
     if (localStorage.getItem('goods')) {
        // 本地存储中的商品编码数组
        var codeArr = JSON.parse(localStorage.getItem('goods')).title;
        // console.log(codeArr);   
        if (codeArr.length > 0) {//有数据
            // 展示购物车商品
            $.ajax({
                url: 'php/goods.php',
                type: 'get',
                cache: false,
                data: {module:'phone_rec'},
                success: function (data){
                    var json = JSON.parse(data);
                    var results = '';
                    $.each(codeArr,function (index,code){
                        $.each(json,function (index,item){
                            if (code == item.name) {
                                results += `
                                 <li>
                <table>
                    <tr>
                        <td>
                            <div class="checkbox">√</div>
                            <a href="##">
                                <img src="${item.pic}" alt="">
                            </a>
                            <a href="##" class="Jin_a2">
                                <p>${item.name}</p>
                                <p>${item.slogan}</p>
                            </a>
                        </td>
                        <td class="Jin_price">${item.price}</td>
                        <td>
                            <div class="Jin_add">
                                <button class="jian">-</button>
                                <div class="text">
                                    1
                                </div>
                                <button class="plus">+</button>
                            </div>
                        </td>
                        <td><span>¥</span><span class="Jin_sum_price">${item.price.substr(1)}</span></td>
                        <td>
                            <div class="remove">
                                --
                            </div>
                        </td>
                    </tr>
                </table>
            </li>`;
                            }
                        })
                    });
                    $('.car_box').html(results);
                    console.log(json);

   function Selected() {
        var checkBoxAll = document.querySelectorAll('.checkboxAll');
        var checkbox = document.querySelectorAll('.checkbox');
        this.checkbox = checkbox;
        this.checkboxAll = checkBoxAll;
        this.init();
        this.send();
        this.jinRemove();
    }

    Selected.prototype.init = function () {
        // console.log(this.checkbox[0].innerText);
        // console.log(this);
        var Jin_sum_All = document.querySelector('.Jin_sum_All');
        var Jin_price = document.querySelectorAll('.Jin_price');

        var Jin_sum_price = document.querySelectorAll('.Jin_sum_price');
        this.Jin_sum_price = Jin_sum_price;
        this.Jin_sum_All = Jin_sum_All;
        this.Jin_price = Jin_price;
        var that = this;
        for (let i = 0; i < this.checkboxAll.length; i++) {
            this.checkboxAll[i].innerText = '';
            this.checkboxAll[i].onclick = function () {
                var sumAll = [];
                if (this.innerText) {
                    that.checkboxAll[0].innerText = '';
                    that.checkboxAll[1].innerText = '';
                    Jin_sum_All.innerText = '0.00';
                } else {
                    that.checkboxAll[0].innerText = '√';
                    that.checkboxAll[1].innerText = '√';
                    for (let j = 0; j < Jin_sum_price.length; j++) {
                        sumAll.push(Jin_sum_price[j].innerText * 1);
                    }
                    Jin_sum_All.innerHTML = eval(sumAll.join('+')) + '.00'
                }
                for (let j = 0; j < that.checkbox.length; j++) {
                    if (this.innerText) {
                        that.checkbox[j].innerText = '√';
                    } else {
                        that.checkbox[j].innerText = '';
                    }
                }
                that.calculate();
            }
        }
        for (let i = 0; i < this.checkbox.length; i++) {
            this.checkbox[i].innerText = '';
            this.checkbox[i].index = i;
            var that = this;
            this.checkbox[i].onclick = function () {
                that.checkboxAll[0].innerText = '';
                that.checkboxAll[1].innerText = '';
                if (this.innerText) {
                    this.innerText = '';
                } else {
                    this.innerText = '√';
                }
                // 判断是否所有的都被勾选中
                var inSore = true; // false没有全部  true全部选中
                for (let j = 0; j < that.checkbox.length; j++) {
                    if (!that.checkbox[j].innerText)
                        inSore = false;
                }
                if (inSore) {
                    that.checkboxAll[0].innerText = '√';
                    that.checkboxAll[1].innerText = '√';
                }
                that.calculate();
            }
        }

    }
    // 计算有多少被选中了
    Selected.prototype.calculate = function () {
        var Jinsum = document.querySelector('.Jin_sum');
        this.Jinsum = Jinsum;
        //结算
        var Jin_fina = document.querySelector('.Jin_fina');
        //price钱
        var Jin_price = document.querySelectorAll('.Jin_price');
        //总额
        var Jin_sum_All = document.querySelector('.Jin_sum_All');
        this.sum = 0;
        Jin_fina.style.background = '';
        Jin_fina.style.cursor = 'no-drop';
        var moneyNum = [];
        var Jsore = true;
        for (let i = 0; i < this.checkbox.length; i++) {
            if (this.checkbox[i].innerText) {
                this.sum++;
                moneyNum.push(this.Jin_sum_price[this.checkbox[i].index].innerText * 1);
                this.Jin_sum_All.innerText = eval(moneyNum.join('+')) + '.00'
                Jin_fina.style.background = 'red';
                Jin_fina.style.color = '#fff';
                Jin_fina.style.cursor = 'pointer';
                Jsore = false;
            }
            if (Jsore) {
                this.Jin_sum_All.innerText = '0.00';
            }
        }
        Jinsum.innerText = this.sum;
    }
    Selected.prototype.send = function () {
        var plus = document.querySelectorAll('.plus');
        var jian = document.querySelectorAll('.jian');
        var text = document.querySelectorAll('.text');
        // text.setAttribute('num',1);
        for (let i = 0; i < text.length; i++) {
            text[i].pSum = 1;
            plus[i].index = i;
            jian[i].index = i;
            var Jin_All = 0;
            var q_All = 0;
            var that = this;
            plus[i].onclick = function () {
                (text[this.index].pSum)++;
                jian[this.index].style.cursor = 'pointer';
                if (text[this.index].pSum >= 10) {
                    plus[this.index].style.cursor = 'no-drop';
                    text[this.index].pSum = 10;
                }
                text[this.index].innerText = text[this.index].pSum;

                var Jinsrc = that.Jin_price[this.index].innerText;
                that.Jin_sum_price[this.index].innerText = Jinsrc.substr(1) * 1 * text[this.index].pSum + '.00';
                let y = 0;
                  y = that.Jin_sum_All.innerText * 1;
                  if(text[this.index].pSum < 10) {
                if(that.checkbox[this.index].innerText) {
                    that.Jin_sum_All.innerText = y + that.Jin_price[this.index].innerText.substr(1) * 1 + '.00'
                    //  console.log(that.Jin_price[this.index].innerText.substr(1) * 1)
                }
            }}
            jian[i].onclick = function () {
                (text[this.index].pSum)--;
                plus[this.index].style.cursor = 'pointer';
                var Jin_All = 0;
                if (text[this.index].pSum <= 1) {
                    jian[this.index].style.cursor = 'no-drop';
                    text[this.index].pSum = 1;
                }
                text[this.index].innerText = text[this.index].pSum;
                var Jinsrc = that.Jin_price[this.index].innerText;
                that.Jin_sum_price[this.index].innerText = Jinsrc.substr(1) * 1 * text[this.index].pSum + '.00';
                for (let j = 0; j < that.checkbox.length; j++) {
                    if (that.checkbox[j].innerText) {
                        // console.log(that.Jin_sum_price[j].innerText * 1);

                        // console.log(that.Jin_sum_All.innerText = that.Jin_sum_price[j].innerText);
                        // console.log(that.checkbox[j].index);
                        Jin_All += that.Jin_sum_price[that.checkbox[j].index].innerText * 1;
                        that.Jin_sum_All.innerText = Jin_All + '.00';
                        console.log(Jin_All)
                        console.log(Jin_All)
                    }
                }
            }
        }
    }
    Selected.prototype.jinRemove = function () {
        var Jin_remove = document.querySelector('.Jin_remove');
        var Jin_sum = document.querySelector('.Jin_sum');
        var that = this;
        let Jsum = 0;
        Jin_remove.onclick = function () {
            // console.log(that.checkbox)
            for (let i = 0; i < that.checkbox.length; i++) {
                if (that.checkbox[i].innerText) {
                    (that.checkbox[i]).parentNode.parentNode.parentNode.parentNode.parentNode.remove()
                    Jsum++;
                }
            }
            that.sum = 0;
            console.log(Jin_sum.innerText = that.sum);
        }

    }


    new Selected()

                }
            });
    }}


