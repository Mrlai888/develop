<?php

/************************************************************

	请求方式: post

	url:	php/user.php

	参数：   username = 用户名
			password = 密码
			id = ID（数据库自增段）
			ope = add 增
				  del 删
				  rew 改
				  sel 查 
			什么都不传 = 首次进入 刷新页面
		
	return json:	'{"err":"0","data":'.$data.',"total":'.$total.'}'
					'{"err":"1","data":"错误信息","total":'.$total.'}'
			 
*************************************************************/

	//连接数据库
	include 'public.php';

	//选择数据库
	my_error('use test02');
    
	//接收参数
	$user = $_POST['username'];
	$pwd = $_POST['password'];
	$ope = $_POST['ope'];//操作类型
	$id = $_POST['id'];//数据库id自增字段
	$page = $_POST["page"]?:1;//当前页数
	$num = $_POST["num"]?:10;//一页显示多少条数据

	// 检测操作类型
	switch($ope){
		case "add":
			//判断数据库中是否已存在该用户名
			$sql = "select * from user where username = '{$user}'";
			$res = my_error($sql);
			$row = mysql_fetch_row($res);
			if((int)$row[0]>0){
				echo '{"err":"1","data":"此用户名已被占用！"}';
				exit();
			}
			//添加用户入库
	        $time = time();
	        $sql2 = "insert into user (username,password,time) values('{$user}','{$pwd}',$time)";
	        $insert_id = my_error($sql2);
			
			//返回修改后条数
			$res = eachData($page,$num);
			$users = $res[0];
			$total = $res[1];
			//返回json
			$data = json_encode($users);
			echo '{"err":"0","data":'.$data.',"total":'.$total.'}';

			break;  
			 
		case "del":
			//后端直接根据id删，不用判断存在性
            $sql = "delete from user where id = '{$id}'";
			my_error($sql);
			//返回修改条数
			$res = eachData($page,$num);
			$users = $res[0];
			$total = $res[1];
			//返回json
            if(empty($users)){//若数据库删空了
				echo '{"err":"1","data":"数据库空空如也！"}';
				exit();
			}
			//刷新页面，整理序号
			$data = json_encode($users);
			echo '{"err":"0","data":'.$data.',"total":'.$total.'}';
			
			break;
			
		case "rew":
			//判断数据库中是否已存在该用户名，不能撞名字
			$sql = "select * from user where username = '{$user}'";
			$res = my_error($sql);
			$row = mysql_fetch_row($res);
			if((int)$row[0]>0){	
				echo '{"err":"1","data":"此用户名已被占用！"}';
				exit();
			}
			//更新数据库用户信息
            $time = time();
	        $sql2 = "update user set username = '{$user}', password = '{$pwd}', time = '{$time}' where id = {$id}";
            my_error($sql2);
	       	//返回修改条数
			$res = eachData($page,$num);
			$users = $res[0];
			$total = $res[1];
			//返回json
            $data = json_encode($users);
			echo '{"err":"0","data":'.$data.',"total":'.$total.'}';

			break;
			
		case "sel":
			//判断数据库中是否存在该数据
	        $sql = "select * from user where username = '$user'";
			$res = my_error($sql);		
			$users = array();	
	        while($row = mysql_fetch_assoc($res)){
		        $users[] = $row;
	        }
            if(empty($users)){//没数据
				echo '{"err":"1","data":"此用户不存在！"}';
				exit();
			}
			//返回json
			$data = json_encode($users);
			echo '{"err":"0","data":'.$data.',"total":'.count($users).'}';
            
			break;
			  
		default://第一次进入页面时
			//返回总条数
			$res = eachData($page,$num);
			$users = $res[0];
			$total = $res[1];
            if(empty($users)){//没数据
				echo '{"err":"1","data":"数据库空空如也！"}';
				exit();
			}
			//有数据，刷新页面
			$data = json_encode($users);
			echo '{"err":"0","data":'.$data.',"total":'.$total.'}';
	}

	//更新展示数据
	function eachData($page,$num){
        $sql = "select * from comm";
        $res = my_error($sql);
        $total = mysql_num_rows($res);//拿到总条数
        $totalPage = ceil($total/$num);//计算分多少页
        $start=($page-1)*$num;//匹配数据库limit规则：limit(0,5)从第一条开始，显示5条。
        $sql2 = "select * from comm limit $start,$num";//查找该页数据
        $res2 = my_error($sql2);
        while($row = mysql_fetch_assoc($res2)){
            $users[] = $row;//把该页的数据取出来
		}
		return array($users,$total);
	}
	
	//关闭数据库
	mysql_close(mysql_connect('','root',''));
    

	


 
    





	
    



