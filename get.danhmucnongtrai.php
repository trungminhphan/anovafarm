<?php
require_once('header_none.php');
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';
$danhmucnongtrai = new DanhMucNongTrai();$nongtrai = new NongTrai();
if($act == 'del' && $id){
	$danhmucnongtrai->id = $id; $dm = $danhmucnongtrai->get_one();
	if($nongtrai->check_dmnongtrai($id)){
		transfers_to('danhmucnongtrai.html?msg=Không thể xóa, ràng buộc nơi giết mổ');
	} else {
		if($danhmucnongtrai->delete()) transfers_to('danhmucnongtrai.html?msg=Xóa thành công!');
		else transfers_to('danhmucnongtrai.html?msg=Không thể xóa, ràng buộc nơi giết mổ');
	}
}

if($act == 'edit'){
	$danhmucnongtrai->id = $id; $dm = $danhmucnongtrai->get_one();
	$arr = array(
		'id' => $id,
		'id_congty' => strval($dm['id_congty']),
		'act' => $act,
		'ten' => $dm['ten'],
		'diachi' => $dm['diachi']
	);
	echo json_encode($arr);
}
?>