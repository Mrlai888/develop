//首次进入后台页面时拉取数据
(function () {
    layui.use('layer', function () {
        var layer = layui.layer; //使用layui弹出层模块
        ajax({
            url: 'php/back-fodder.php',
            type: 'post',
            succeed: function (data) {
                console.log(data);
                var json = JSON.parse(data);
                if (json.err == 1) {
                    layer.msg(json.data);
                } else {
                    refresh(json);
                    fenpage(json.total);
                    // layer.msg('欢迎来到数据管理系统！');
                }
            },
            failed: function (code) {
                alert.msg('链接失败');
                console.log(code);
            }
        });
    })
})();


//添加用户
(function () {
    layui.use('layer', function () {
        var layer = layui.layer; //使用layui弹出层模块
        document.querySelector('#addUser').onclick = function () {
            layer.open({
                title: '请输入添加的内容',
                type: 1,
                skin: 'layui-layer-rim', //加上边框
                area: ['420px', '240px'], //宽高
                content: `<div id="add">
                                <span class="user">用户名:</span>
                                <input class="username1" type="text""><br>
                                <span class="pwd">密码:</span>
                                <input class="password1" type="text">
                            </div>`,
                shade: 0.4,
                anim: 3, //动画种类
                maxmin: true,
                btn: ['确认', '取消'],
                'btn1': function (index, layero) {
                    var username = document.querySelector('.username1');
                    var password = document.querySelector('.password1');
                    ajax({
                        data: 'username=' + username.value + '&password=' + password.value + '&ope=add',
                        url: 'php/user.php',
                        type: 'post',
                        succeed: function (data) {
                            console.log(data);
                            var json = JSON.parse(data);
                            if (json.err == 1) {
                                layer.msg(json.data);
                            } else {
                                refresh(json);
                                fenpage(json.total);
                                layer.msg('数据添加成功！')
                            }
                        },
                        failed: function (code) {
                            alert('链接失败');
                            console.log(code);
                        }
                    });
                    layer.close(index);
                },
                'btn2': function (index, layero) {}
            });
        }
    })
})();


//查询用户
(function () {
    layui.use('layer', function () {
        var layer = layui.layer; //使用layui弹出层模块
        document.querySelector('#selUser').onclick = function () {
            var selIpt = document.querySelector('#selIpt');
            ajax({
                url: 'php/user.php',
                data: 'username=' + selIpt.value + '&ope=sel',
                type: 'post',
                succeed: function (data) {
                    console.log(data);
                    var json = JSON.parse(data);
                    if (json.err == 1) {
                        layer.msg(json.data);
                    } else {
                        refresh(json);
                        fenpage(json.total);
                        layer.msg('查询到' + json.total + '条数据');
                    }
                },
                failed: function (err) {
                    console.log(err);
                }
            })
        }
    })
})();


//删除用户
(function () {
    layui.use('layer', function () {
        var layer = layui.layer; //使用layui弹出层模块
        document.querySelector('tbody').onclick = function (e) {
            var e = e || window.event;
            var tg = e.target || e.srcElement;
            if (tg.id == 'delUser') {
                //询问框
                layer.confirm('您是否要删除该条数据？', {
                    btn: ['是的', '我再想想'] //按钮
                }, function () {
                    document.querySelector('tbody').removeChild(tg.parentNode.parentNode);
                    var id = tg.parentNode.parentNode.querySelector('#userID').innerText;
                    ajax({
                        url: 'php/user.php',
                        data: 'id=' + id + '&ope=del',
                        type: 'post',
                        succeed: function (data) {
                            var json = JSON.parse(data);
                            if (json.err == 1) {
                                layer.msg(json.data);
                            } else {
                                refresh(json);
                                fenpage(json.total);
                                layer.msg('数据删除成功！');
                            }
                        },
                        failed: function (err) {
                            alert('链接失败')
                            console.log(err);
                        }
                    });
                }, function () {});
            }
        }
    })
})();


//编辑用户
(function () {
    layui.use('layer', function () {
        var layer = layui.layer; //使用layui弹出层模块
        document.querySelector('.layui-table').onclick = function (e) {
            var e = e || window.event;
            var tg = e.target || e.srcElement;
            if (tg.id == 'rewUser') { //获取内容显示在弹出框中
                var uname = tg.parentNode.parentNode.querySelector('#uName');
                var upwd = tg.parentNode.parentNode.querySelector('#uPwd');
                layer.open({
                    title: '请输入编辑的内容',
                    type: 1,
                    skin: 'layui-layer-rim', //加上边框
                    area: ['420px', '240px'], //宽高
                    content: `<div id="rew">
                                        <span class="user">用户名:</span>
                                        <input class="username2" type="text" value="${uname.innerText}"><br>
                                        <span class="pwd">密码:</span>
                                        <input class="password2" type="text" value="${upwd.innerText}">
                                    </div>`,
                    shade: 0.4,
                    anim: 1, //动画种类
                    maxmin: true,
                    btn: ['确认', '取消'],
                    'btn1': function (index, layero) {
                        var username = document.querySelector('.username2');
                        var password = document.querySelector('.password2');
                        var id = tg.parentNode.parentNode.querySelector('#userID').innerText;
                        ajax({
                            data: 'username=' + username.value + '&password=' + password.value + '&ope=rew' + '&id=' + id,
                            url: 'php/user.php',
                            type: 'post',
                            succeed: function (data) {
                                console.log(data);
                                var json = JSON.parse(data);
                                if (json.err == 1) {
                                    layer.msg(json.data);
                                } else {
                                    refresh(json);
                                    fenpage(json.total);
                                    layer.msg('数据修改成功！');
                                }
                            },
                            failed: function (code) {
                                alert('链接失败');
                                console.log(code);
                            }
                        });
                        layer.close(index);
                    },
                    'btn2': function (index, layero) {}
                });
            }
        }
    })
})();


//刷新页面
function refresh(json) {
    var tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    for (var i = 0, len = json.data.length; i < len; i++) {
        // let d = new Date(json.data[i].time*1000);
        tbody.innerHTML += `<tr>
                                <td>${i+1}</td>
                                        <td id="userID">${json.data[i].id}</td>
                                        <td id="uName">${json.data[i].module}</td>
                                        <td id="uPwd">${json.data[i].url}</td>
                                        <td id="uPwd">${json.data[i].title}</td>
                                        <td id="uPwd">${json.data[i].slogan}</td>
                                        <td>
                                            <button type="button" class="layui-btn layui-btn-sm" id="rewUser">
                                                <i class="layui-icon">&#xe642;</i>编辑
                                            </button>
                                            <button type="button" class="layui-btn layui-btn-sm layui-btn-danger" id="delUser">
                                                <i class="layui-icon">&#xe640;</i>删除
                                            </button>
                                        </td>
                                    </tr>`          
    }
    displayTd();
}


//更新分页
function fenpage(total) {
    layui.use(['laypage', 'layer'], function () {
        var laypage = layui.laypage;
        laypage.render({
            elem: 'demo7',
            count: total, //总条数
            limits:[5,10,15,20,30,50],
            layout: ['count', 'prev', 'page', 'next', 'limit', 'refresh', 'skip'], //完整功能
            jump: function (obj, first) {
                console.log(obj); //obj包含了当前分页的所有参数，比如：
                console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
                console.log(obj.limit); //得到每页显示的条数
                console.log(obj.layout[5]);              
                if (!first) { //首次不执行
                    // console.log('hahaha');
                    ajax({
                        url: 'php/back-fodder.php',
                        type: 'post',
                        data: 'page=' + obj.curr + '&num=' + obj.limit,
                        succeed: function (data) {
                            console.log(data);
                            var json = JSON.parse(data);
                            refresh(json);
                            obj.count = json.total;
                        },
                        failed: function (code) {
                            alert('链接失败');
                            console.log(code);
                        }
                    });
                }
            }
        });
    });
}


//隐藏数据库自增id
function displayTd() {
    var allID = document.querySelectorAll('#userID');
    // console.log(allID);
    for (var i = 0, len = allID.length; i < len; i++) {
        allID[i].style.display = "none";
    }
}