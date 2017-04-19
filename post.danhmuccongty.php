<?php
require_once('header_none.php');
$danhmuccongty = new DanhMucCongTy();
$id = isset($_POST['id']) ? $_POST['id'] : '';
$act = isset($_POST['act']) ? $_POST['act'] : '';
$url = isset($_POST['url']) ? $_POST['url'] : '';

$ten = isset($_POST['ten']) ? $_POST['ten'] : '';
$diachi = isset($_POST['diachi']) ? $_POST['diachi'] : '';

$danhmuccongty->ten = $ten;
$danhmuccongty->diachi = $diachi;

if($act == 'edit'){
	$danhmuccongty->id = $id;
	if($danhmuccongty->edit()) {
		if($url) transfers_to($url);
		else transfers_to('danhmuccongty.html?msg=Chỉnh sửa thành công!');
	}
} else {
	if($danhmuccongty->insert()){
		if($url) transfers_to($url);
		else transfers_to('danhmuccongty.html?msg=Thêm nơi bán lẻ thành công!');
	}
}
?>
