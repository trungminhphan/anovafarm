<?php
require_once('header_none.php');
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';
$danhmuccongty = new DanhMucCongTy();

if($act == 'del' && $id){
	$danhmuccongty->id = $id; $dm = $danhmuccongty->get_one();
	if($danhmuccongty->delete()) transfers_to('danhmuccongty.html?msg=Xóa thành công!');
	else transfers_to('danhmuccongty.html?msg=Không thể xóa, ràng buộc nơi giết mổ');	
}

if($act == 'edit'){
	$danhmuccongty->id = $id; $dm = $danhmuccongty->get_one();
	$arr = array(
		'id' => $id,
		'act' => $act,
		'ten' => $dm['ten'],
		'diachi' => $dm['diachi']
	);
	echo json_encode($arr);
}
?>