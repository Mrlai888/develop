<?php

/************************************************************

请求方式: get

url:	php/comm.php

            参数                                                    return json
        module = index              [{"pic":"网上url","user_info:"网上url","username":"hooyeah","introduce":"魅族 Note9 邀请函 JK 服妹子出镜，谁才是最美游戏姬？","type":"魅族 Note9"}]
					 
*************************************************************/

	//连接数据库
	include 'public.php';

	//选择数据库
    my_error('use test02');
    
    //接收参数
    $module = $_GET['module'];

	// 检测操作类型
	switch($module){
		case "index":
			$sql = "select * from comm where module = 'index'";
			$res = my_error($sql);		
			$arr = array();	
	        while($row = mysql_fetch_assoc($res)){
		        $arr[] = $row;
	        }
			//返回json
			$data = json_encode($arr);
			echo $data;
            
			break;
	}

	//关闭数据库
	mysql_close(mysql_connect('','root',''));
    

	


 
    





	
    



