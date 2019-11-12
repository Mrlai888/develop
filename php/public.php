<?php
	// 设置响应头，防止乱码
	header('Content-type:text/html;charset=utf-8');
	
	//关闭错误报告
	error_reporting(0);

	//连接数据库
	mysql_connect('','root','') or die('数据库连接失败！');

	//封装MySQL语法错误检查函数并执行
	/*
	 * @param1 string $sql，要执行的SQL指令
	 * @return $res，正确执行完返回的结果，如果SQL错误，直接终止
	*/
	function my_error($sql){
		//执行SQL
		$res = mysql_query($sql);

		//处理可能存在的错误
		if(!$res){
			echo 'SQL执行错误，错误编号为：' . mysql_errno() . '<br/>';
			echo 'SQL执行错误，错误信息为：' . mysql_error() . '<br/>';

			//终止错误继续执行
			exit;
		}

		//返回结果
		return $res;
	}

	//字符集处理
	my_error('set names utf8');

