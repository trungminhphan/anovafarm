<?php
require_once('header_none.php');
use \Models\DBConnect;
use \Models\NhaMayRauQua;
use \Models\NongTraiRauQua;
use \Models\BanLeRauQua;
$nhamay = new NhaMayRauQua();$nongtrai = new NongTraiRauQua();$banle = new BanLeRauQua();
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';

if($act == 'hienthi'){
	$hienthi = isset($_GET['hienthi']) ? $_GET['hienthi'] : '';
	$banle->id = $id;
	if($banle->set_hienthi(intval($hienthi))){
		if($hienthi == 1){
			echo '<a href="get.banle.html?id='.$id.'&hienthi=0&act=hienthi" class="sethienthi" onclick="return false;"><i class="fa fa-eye text-primary"></i></a>';
		} else {
			echo '<a href="get.banle.html?id='.$id.'&hienthi=1&act=hienthi" class="sethienthi" onclick="return false;"><i class="fa fa-eye-slash text-danger"></i></a>';
		}
	}
}

if($act == 'edit'){
	$banle->id = $id; $bl = $banle->get_one();
	$arr = array(
		'id' => $id,
		'act' => 'edit',
		'id_donggoirauqua' => strval($bl['id_donggoirauqua']),
		'id_dmbanle' => $bl['id_dmbanle'],
		'hienthi' => '<input type="checkbox" data-render="switchery" data-theme="default" name="hienthi" value="1" '.($bl['hienthi'] == 1 ? ' checked' : '').'/>'
	);
	echo json_encode($arr);
}

if($act == 'del'){
	$banle->id = $id;
	if($banle->delete()){
		transfers_to('banle.html?msg=Xóa thành công!');
	}
}

?>
