<?php
require_once('header_none.php');
$danhmucnongtrai = new DanhMucNongTrai();
$id = isset($_POST['id']) ? $_POST['id'] : '';
$act = isset($_POST['act']) ? $_POST['act'] : '';
$url = isset($_POST['url']) ? $_POST['url'] : '';

$ten = isset($_POST['ten']) ? $_POST['ten'] : '';
$diachi = isset($_POST['diachi']) ? $_POST['diachi'] : '';
$id_congty = isset($_POST['id_congty']) ? $_POST['id_congty'] : '';
$danhmucnongtrai->ten = $ten;
$danhmucnongtrai->diachi = $diachi;
$danhmucnongtrai->id_congty = $id_congty;

if($act == 'edit'){
	$danhmucnongtrai->id = $id;
	if($danhmucnongtrai->edit()) {
		if($url) transfers_to($url);
		else transfers_to('danhmucnongtrai.html?msg=Chỉnh sửa thành công!');
	}
} else {
	if($danhmucnongtrai->insert()){
		if($url) transfers_to($url);
		else transfers_to('danhmucnongtrai.html?msg=Thêm nơi bán lẻ thành công!');
	}
}
?>
