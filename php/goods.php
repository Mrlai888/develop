<?php

/************************************************************

请求方式: get

url:	php/goods.php

            参数                                       return json

module = phone_rec     手机 推荐          [{"name":"魅族16T","price":"￥1999","pic":"网上url","slogan":"【原厂碎屏险特惠价99元 再送3个月延保】6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 | 双·立体声扬声器 | 全球频段 | 超广角 AI 三摄 | Flyme8尝鲜体验","old_price":"￥2099","activity":"新品","tips":"限时优惠"}]
       = phone_new     手机 新品			同上
       = music_rec     音乐 推荐			同上
       = music_new     音乐 新品			同上
       = accessory_rec 配件 推荐			同上
       = accessory_new 配件 新品			同上
       = life_rec      生活 推荐			同上
       = life_new      生活 新品			同上
       = bannner       为您推荐 轮播图		[{"id":"41","module":"server_video","url":"网上视频.mp4","title":"魅族路由器","slogan":"好用便宜"}]
					 
*************************************************************/

	//连接数据库
	include 'public.php';

	//选择数据库
	my_error('use test02');
    
	//接收参数
    $module = $_GET['module'];

	// 检测操作类型
	switch($module){
		case "phone_rec":
			$sql = "select * from goods where module = 'phone_rec'";
			$res = my_error($sql);		
			$arr = array();	
	        while($row = mysql_fetch_assoc($res)){
		        $arr[] = $row;
	        }
			//返回json
			$data = json_encode($arr);
			echo $data;
            
			break;
              
        case "phone_new":
			$sql = "select * from goods where module = 'phone_rec' order by new desc";
			$res = my_error($sql);		
			$arr = array();	
	        while($row = mysql_fetch_assoc($res)){
		        $arr[] = $row;
	        }
			//返回json
			$data = json_encode($arr);
			echo $data;
            
            break;
            
        case "music_rec":
			$sql = "select * from goods where module = 'music_rec'";
			$res = my_error($sql);		
			$arr = array();	
	        while($row = mysql_fetch_assoc($res)){
		        $arr[] = $row;
	        }
			//返回json
			$data = json_encode($arr);
			echo $data;
            
            break;
            
        case "music_new":
			$sql = "select * from goods where module = 'music_rec' order by new desc";
			$res = my_error($sql);		
			$arr = array();	
	        while($row = mysql_fetch_assoc($res)){
		        $arr[] = $row;
	        }
			//返回json
			$data = json_encode($arr);
			echo $data;
            
			break;
        
        case "accessory_rec":
			$sql = "select * from goods where module = 'accessory_rec'";
			$res = my_error($sql);		
			$arr = array();	
	        while($row = mysql_fetch_assoc($res)){
		        $arr[] = $row;
	        }
			//返回json
			$data = json_encode($arr);
			echo $data;
            
            break;
            
        case "accessory_new":
			$sql = "select * from goods where module = 'accessory_rec' order by new desc";
			$res = my_error($sql);		
			$arr = array();	
	        while($row = mysql_fetch_assoc($res)){
		        $arr[] = $row;
	        }
			//返回json
			$data = json_encode($arr);
			echo $data;
            
            break;
            
        case "life_rec":
			$sql = "select * from goods where module = 'life_rec'";
			$res = my_error($sql);		
			$arr = array();	
	        while($row = mysql_fetch_assoc($res)){
		        $arr[] = $row;
	        }
			//返回json
			$data = json_encode($arr);
			echo $data;
            
            break;
            
        case "life_new":
			$sql = "select * from goods where module = 'life_rec' order by new desc";
			$res = my_error($sql);		
			$arr = array();	
	        while($row = mysql_fetch_assoc($res)){
		        $arr[] = $row;
	        }
			//返回json
			$data = json_encode($arr);
			echo $data;
            
            break;
            
        case "banner":
			$sql = "select * from goods where recom = 'yes' order by new desc";
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
    

	


 
    





	
    



