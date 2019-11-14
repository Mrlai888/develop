<?php

/*
****************************************************

	请求方式: post

	url:	php/losRes.php

	参数：   username = 用户名
			password = 密码
			ope = res 注册
				= log 登录
		
	return json:	'{"err":"0","msg":"注册成功！"}'
					'{"err":"1","msg":"此用户名已被注册！"}'
			 
****************************************************
*/

	//连接数据库
	include 'public.php';

	//选择数据库
	my_error('use test02');
    
    //接收参数
    $user = $_POST['username'];
    $pwd = $_POST['password'];
	$ope = $_POST['ope'];
	$que1 = $_POST['question1'];
	$que2 = $_POST['question2'];
	$asw1 = $_POST['answer1'];
	$asw2 = $_POST['answer2'];
	$photo = $_POST['photo'];

    //判断是注册还是登录操作
    switch($ope){
        case "res":
            //判断数据库中是否已存在该用户名
			$sql = "select * from user where username = '{$user}'";
			$res = my_error($sql);
			$row = mysql_fetch_row($res);
			// echo $row;
			if((int)$row[0]>0){
				echo '{"err":"1","msg":"此用户名已被注册！"}';
				exit();
			}else{
                echo '{"err":"0","msg":"注册成功！"}';
            }
            //添加用户入库
	        $time = time();
	        $sql2 = "insert into user (username,password,time) values('{$user}','{$pwd}',$time)";
	        $insert_id = my_error($sql2);
			break;
			
        case "log":
			//判断数据库中是否已存在该用户名
			$sql = "select * from user where username = '{$user}'";
			$res = my_error($sql);
			$row = mysql_fetch_row($res);
			// echo $row;
			if(!(int)$row[0]>0){
				echo '{"err":"1","msg":"此用户名还未注册！"}';
				exit();
			}
			//判断密码是否输入正确
			$sql2 = "select * from user where username = '{$user}' and password='{$pwd}'";
			$res2 = my_error($sql2);
			$row2 = mysql_fetch_row($res2);
			$data = json_encode($row2);
			// echo $row;
			if((int)$row2[0]>0){
				echo '{"err":"0","msg":"登录成功！","data":'.$data.'}';
			}else{
                echo '{"err":"1","msg":"用户名与密码不匹配！"}';
            }
			break;
			
		case "rew"://重置密码
			$sql =  "update user set password = '{$pwd}', time = '{$time}' where username = {$user}";
			my_error($sql);
			break;
			
		case "question"://拿问题
			$sql = "select * from user where username = '{$user}'";
			$res = my_error($sql);
			$row = mysql_fetch_row($res);
			$data = json_encode($row);
			echo '{"err":"0","data":'.$data.'}';
			break;
			
		case "answer"://拿答案
			$sql = "select * from user where username = '{$user}'";
			$res = my_error($sql);
			$row = mysql_fetch_row($res);
			$data = json_encode($row);
			echo '{"err":"0","data":'.$data.'}';
			break;

		case "setqueasw"://设置密保
			//判断数据库中是否已存在该用户名
			$time = time();
	        $sql = "update user set time = '{$time}', question1 = '{$que1}', asw1 = '{$asw1}', question2 = '{$que2}', asw2 = '{$asw2}', photo = '{$photo}' where username = {$user}";
			$insert_id = my_error($sql);
			echo 'haha';
			break;


		default://只验证用户名是否存在
			$sql = "select * from user where username = '{$user}'";
			$res = my_error($sql);
			$row = mysql_fetch_row($res);
			// echo $row;
			$data = json_encode($row);
			if(!(int)$row[0]>0){
				echo '{"err":"1","msg":"此用户名还未注册！"}';
			}else{
				echo '{"err":"0","msg":"此用户名已注册！","data":'.$data.'}';
			}
	}
	
	//关闭数据库
	mysql_close(mysql_connect('','root',''));