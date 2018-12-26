<?php
require_once('header_none.php');
use \Models\DanhMucNhaMay;
$danhmucnhamay = new DanhMucNhaMay();
$id = isset($_POST['id']) ? $_POST['id'] : '';
$act = isset($_POST['act']) ? $_POST['act'] : '';
$url = isset($_POST['url']) ? $_POST['url'] : '';

$ten = isset($_POST['ten']) ? $_POST['ten'] : '';
$diachi = isset($_POST['diachi']) ? $_POST['diachi'] : '';
$id_congty = isset($_POST['id_congty']) ? $_POST['id_congty'] : '';
$danhmucnhamay->ten = $ten;
$danhmucnhamay->diachi = $diachi;
$danhmucnhamay->id_congty = $id_congty;

if($act == 'edit'){
	$danhmucnhamay->id = $id;
	if($danhmucnhamay->edit()) {
		if($url) transfers_to($url);
		else transfers_to('danhmucnhamay.html?msg=Chỉnh sửa thành công!');
	}
} else {
	if($danhmucnhamay->insert()){
		if($url) transfers_to($url);
		else transfers_to('danhmucnhamay.html?msg=Thêm nơi bán lẻ thành công!');
	}
}
?>
