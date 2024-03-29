# 小组成员介绍

- **赖祥云**（项目组长 服务页面）

- **梅恬**（手机 声学 商品详情页面）

- **李艳**（配件 生活  商品详情页面）

- **金水洪**（首页 购物车页面）


  

# 网站主目录

1. 魅族官网首页
2. 导航栏手机页面
3. 导航栏声学页面
4. 导航栏配件页面
5. 导航栏生活页面
6. 导航栏服务页面
7. 登录验证页面
8. 注册页面
9. 商品详情页面
10. 后台管理系统

**以上为本项目的主要负责页面**

# 任务分配情况

*  ## 梅恬

> **负责页面**：魅族手机子页面 魅族声学子页面  魅族网站所有商品详情页
>
> **相关技术**：Css3 ES6 jQuery Ajax sass PHP Mysql  LocalStorage
>
> **功能实现**
>
> - 手机页面与声学页面
>
>   - 两个页面主要是使用了Ajax调用php请求的数据库数据进行页面的遍历实现
>
>   - 头尾两部分是使用了首页的公共样式进行引用
>   - 底部banner的轮播处理用到了css3的transform和transition的属性
>
> - 商品购物详情页面
>
>   - 本页面也是通过ajax请求数据库数据进行输出遍历
>   - 手机的图片 价格 手机详情介绍等都是使用本地存储技术
>   - 利用本地存储将本页面的数据发送给购物车页面进行接收以便输出相关内容
>
> - 难点攻克
>
>   - 在使用ajax请求后端数据的时候，遇见最多的就是异步加载问题，无法达到自己想要的效果
>   
>      在通过对异步加载一系列的回顾，最终发现将自己要完成的事件放在在ajax success下面和Ajax同时异步完成，就不会出现异步加载的顺序问题，从而达到自己预期的效果。
>   
>   - 在处理底部轮播图效果的时候，一直在思考如何使用更加合理的方式来还原官网的轮播效果
>   
>      最后在魅族官网查看源码的时候发现，其实就是使用了css3的两行代码解决，js都不需要，十分的
>   
>      简洁清晰：transform: translate3d(-1860px, 0px, 0px);   transition: all .2s ease;
>   
>      从而完成点击滑动切换的轮播效果。
>

- ## 金水洪

> **负责页面**：首页全页面，底部头部（形成组件化，公用模块，使用ajax渲染数据）
>
> ​					购物车：使用本地存储，ajax接受数据，渲染到页面
>
> **功能实现**：
>
> 1.  导航栏可根据滚动位置下拉显示或隐藏，优化体验；
> 2. 轮播图使用Swiper
> 3.  内容区域移入有阴影
> 4. 底部使用videos点击播放，生成一个檬板层，可点击关闭；
> 5. 使用面向对象控制复选框等功能
> 6. 有共计、单选、全选、价格统计；
>
> **难点攻克**：
>
> -  ajax请求数据时是异步操作，同步无法获取到元素
>
>   - 将代码放在succeed里面
>
> - 父级显示隐藏，有冒泡
>
>   - 取消冒泡
>
>    - 需要多次获取元素，步骤繁琐
>  - 使用面向对象编程，用this指向，步骤简易
>    -  价格多次增加会有误差 
>  - 给点击的元素增加自定义属性，点击当前的元素增加，与其他无关

- ## 赖祥云

> **负责页面**：servers.html（导航栏服务页）
>
> ​				若干个子页面：所有 “y_”开头的html 都是servers.html里的子页
>
> **功能实现**：
>
> 1. 轮播图都是使用swiper插件，图片使用ajax请求，然后渲染到页面,
> 2. 点击轮播图下面的服务项时添加了登录判断，如果是登录状态则跳转子页面，如果未登录则需要登录验证
> 3. 本地存储方法；可点击项的名称保存到本地存储中，跳转到子页时把名称添加为标题,
> 4. 正则验证：给服务项子页的表单添加正则验证，填入的表单数据还需跟后台数据验证
> 5. 自助服务项使用的联动菜单数据 是ajax请求手动写的json文件 ，内容显示效果使用的是jQuery动画，
> 6. video项使用ajax请求后台数据
> 7. 联系方式项，使用鼠标事件实现动态效果
>
> **难点攻克：**
>
> - 有些数据图片使用ajax异步请求，当给这些元素添加事件时会失效，
> - 使用git分支时，分支删了主分支原有的一些东西，会一直报错，这时需要把主分支的文件下载下来同步到分支中，
>
> 

- ## 李艳

> **负责页面**：配件页面  生活页面以及这两个页面内的商品详情页
>
> **功能实现**：
>
> ​	 **html样式结构**：在写js时需要获取的元素最好避免用伪类写，不好获取元素；个人觉得
>
>   一边写样式结构，一边写js效率速度会更快,当时就是先把全部的结构样式写好了，结果在写
>
>  js请求数据的时候就有些麻烦，不好拿数据。有重新改样式，花的时间比较多
>
> ​	  **css**: 通过sass自动化构建工具编译写的，在写的时候要注意对应正确的父级，特别容易搞混。
>
> ​	**轮播图**: 通过组件实现的，鼠标滑过的效果是用CSS3里面的transform方法实现的。但是请求的数据不对当点击详情页时总是是显示上面板块最后一次点击商品商品详情页的内容
>
>   ​	**选项卡切换**：js需要放到请求数据里面（success后）；否则会被覆盖。 
>
>  ​    **请求数据**：通过原生ajax请求。
>
>   ​    **客服商城**：没有引用接口，直接模拟了互发消息的一个形式；点击图片切换到对应的人；
>
> ​	**难点攻克**：
>
> 1. 消息发送后输入框里面的内容没有清空；设置了值为空，但是没有用；
> 2. 输入框的内容无法选中也不能跟着页面滑动，原因是定位和获取可视宽高度不对
> 3. 消息内容显示部分出现横向滚动条
> 4. 地区选择：在选择完成后不能自动收缩
> 5. 加入购物车：通本地存储localStorage实现，根据商品的名字识别对应的商品；定义变量获取商品名字的时候要变量名要一样，因为两个人写了商品详情页；变量名
> 6. 顶部滑动到一定的高度时悬浮出现商品信息
> 7. 立即加购：加入购物车后看不到商品，；只请求了手机页面的数据


> **负责页面**：登陆注册模块、后台管理系统
>
> **功能实现&&问题总结**：
>
> 正则校验、验证码、7天免密登录、头像上传与回显、密保验证、后台数据的增删改查与分页
>
> 1. **正则校验**：参考三大运营商手机号段以及出于安全性考虑对帐号密码进行格式校验。暂无踩坑记录，实现简单，效果明显。需要注意的就是成功之后的提示，以及失败的提示展示的逻辑关系。
> 2. **验证码**：一是随机验证码，二是短信验证码。随机验证码封装成函数，多处使用。短信验证码需要第三方API与后台代码配合，耗时较长，埋坑较多，出于时间关系，暂缓这个功能，写固定的。
> 3. **7天免密登录**：也就是记住密码，用户第二次登录密码账号自动填充输入框。封装cookie的增删改操作。
> 4. **头像**：这块知识点遇坑较多。首先利用input的type=file属性将图片文件上传，将图片转为base64格式存入数据库，利用canvas将图片画在页面上。数据库使用blod字段存储base64数据。再从数据库中取出json数据时（包含base64）时，base64格式的数据在解析json的过程中，数据内容中的”+“号会解析成空字符串” “ ，导致图片显示不出来。图像转变为字符存储这块让我见识到了图片的编码是真的复杂。
> 5. **密保验证**：用户在注册时，填写问题存入数据库。找回密码时，提取问题比对。密保出于用户体验默认设置了两个问题，当然用户可以自定义修改input里的内容。当然，有时间的话用select下拉可选框更好。
> 6. **后台数据的增删改查**：利用layui库进行后台布局的设计，具体使用到layui静态table组件、layer弹出层、layadmin简易模板。通过ajax和php实现数据库的读写。layer弹出层可独立使用。table组件响应式比较适合展示数据。
> 7. **后台分页**：layui的分页模块坑比较多。根据不同条数展示不同页数这块，需要不断的请求 数据，通过mqysql与php进行数据分页再回显。由于分页模块的界面经常不能根据后端的实时数据进行渲染，我陷入一阵迷茫，难道分页模块自己写样式？但是我又舍不得这个库的分页模块，分页功能很全，就是api看似缺失了。此时，发现 layui 有一个数据表格的模块，里面的api更全（含分页），功能更多。摸索了一阵发现很难用，鉴于我只需要一个分页的功能，于是又回去研究单独的分页模块，有没有别的办法可以及时监听数据的变化，从而即时更新显示分页界面。后来解决了，其实并不是api缺失，是作者考虑的比较精简。从中收获了读文档的能力，于是乎继续研究后台管理系统，发现vue的element插件有专门的模板配置，发现layui也是基于别人的技术之上演变而来的，感慨前端博大精深，以后要培养读文档的能力，更要培养耐心。
>

# 项目总结

​	通过这一次的小组合作开发，我们小组大致的都了解了一些项目开发流程，在项目中的分工合作就显得

十分重要，人不可能独来独往。在开发的过程中，要学会和项目成员进行技术沟通，避免页面上的功能

冲突，每个人都有对应的板块，但是也要有相同的规范，不可以随性书写代码，大小写的区分，命名的前缀

路径的统一，图片的格式，公共模块的样式，这些都是需要小组成员自己在开发中进行合理的沟通以便统一规范。

​	这一次的项目使用了我们二阶段的所有知识点，可谓是得到了充足的锻炼机会，但是在开发的过程我们遇到了

各种千奇百怪的bug，有会报错的还行，不会报错的bug是最令人头疼的，但是在小组成员的协助下，整个小组完

美完成项目，积累了一些宝贵的项目bug处理经验。
