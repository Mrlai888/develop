<?php

/************************************************************

请求方式: get

url:	php/goods.php

            参数                                                    return json

module = flyme          首页 flyme板块                          [{"url":"网上url"}]
       = index_video    首页 视频                               [{"url":"网上url","title":"Hello 5G"}]
       = index_swiper   首页 轮播图                             [{"url":"网上url"}] 
       = adv            首页（以及手机、声乐、配件、生活）顶图     [{"url":"网上url"}]
       = server_swiper  服务页 轮播图                           [{"url":"网上url"}]
       = server_video   服务页 视频信息                          [{"url":"网上url","title":"魅族 16 旗舰手机","slogan":"屏下指纹"}]
					 
*************************************************************/

	//连接数据库
	include 'public.php';

	//选择数据库
	my_error('use test02');
    
	//接收参数
    $module = $_GET['module'];

	// 检测操作类型
	switch($module){
		case "flyme":
			$sql = "select * from fodder where module = 'flyme'";
			$res = my_error($sql);		
			$arr = array();	
	        while($row = mysql_fetch_assoc($res)){
		        $arr[] = $row;
	        }
			//返回json
			$data = json_encode($arr);
			echo $data;
            
			break;
              
        case "index_video":
			$sql = "select * from fodder where module = 'index_video'";
			$res = my_error($sql);		
			$arr = array();	
	        while($row = mysql_fetch_assoc($res)){
		        $arr[] = $row;
	        }
			//返回json
			$data = json_encode($arr);
			echo $data;
            
            break;
            
        case "index_swiper":
			$sql = "select * from fodder where module = 'index_swiper'";
			$res = my_error($sql);		
			$arr = array();	
	        while($row = mysql_fetch_assoc($res)){
		        $arr[] = $row;
	        }
			//返回json
			$data = json_encode($arr);
			echo $data;
            
            break;
            
        case "adv":
			$sql = "select * from fodder where module = 'adv'";
			$res = my_error($sql);		
			$arr = array();	
	        while($row = mysql_fetch_assoc($res)){
		        $arr[] = $row;
	        }
			//返回json
			$data = json_encode($arr);
			echo $data;
            
			break;
        
        case "server_swiper":
			$sql = "select * from fodder where module = 'server_swiper'";
			$res = my_error($sql);		
			$arr = array();	
	        while($row = mysql_fetch_assoc($res)){
		        $arr[] = $row;
	        }
			//返回json
			$data = json_encode($arr);
			echo $data;
            
            break;
            
        case "server_video":
			$sql = "select * from fodder where module = 'server_video'";
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
    

	


 
    





	
    



