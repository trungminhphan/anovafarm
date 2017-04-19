<?php
require_once('header_none.php');
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';
$danhmucbanle = new DanhMucBanLe();$banle = new BanLe();
if($act == 'del' && $id){
	$danhmucbanle->id = $id;
	if($banle->check_dmbanle($id)){
		transfers_to('danhmucbanle.html?msg=Không thể xóa, ràng buộc nơi giết mổ');
	} else {
		if($danhmucbanle->delete()) transfers_to('danhmucbanle.html?msg=Xóa thành công!');
		else transfers_to('danhmucbanle.html?msg=Không thể xóa, ràng buộc nơi giết mổ');
	}
}

if($act == 'edit'){
	$danhmucbanle->id = $id; $dm = $danhmucbanle->get_one();
	$arr = array(
		'id' => $id,
		'act' => $act,
		'ten' => $dm['ten'],
		'diachi' => $dm['diachi']
	);
	echo json_encode($arr);
}
?>