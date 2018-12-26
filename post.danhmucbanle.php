<?php
require_once('header_none.php');
use \Models\DanhMucBanLe;
$danhmucbanle = new DanhMucBanLe();
$id = isset($_POST['id']) ? $_POST['id'] : '';
$act = isset($_POST['act']) ? $_POST['act'] : '';
$url = isset($_POST['url']) ? $_POST['url'] : '';

$ten = isset($_POST['ten']) ? $_POST['ten'] : '';
$diachi = isset($_POST['diachi']) ? $_POST['diachi'] : '';
$id_congty = isset($_POST['id_congty']) ? $_POST['id_congty'] : '';
$danhmucbanle->ten = $ten;
$danhmucbanle->diachi = $diachi;

if($act == 'edit'){
	$danhmucbanle->id = $id;
	if($danhmucbanle->edit()) {
		if($url) transfers_to($url);
		else transfers_to('danhmucbanle.html?msg=Chỉnh sửa thành công!');
	}
} else {
	if($danhmucbanle->insert()){
		if($url) transfers_to($url);
		else transfers_to('danhmucbanle.html?msg=Thêm nơi bán lẻ thành công!');
	}
}
?>
