<?php
require_once('header_none.php');
use \Models\DanhMucNongTrai;
use \Models\NongTrai;
use \Models\NongTraiTrung;
use \Models\NongTraiRauQua;

$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';
$danhmucnongtrai = new DanhMucNongTrai();
$nongtrai = new NongTrai();$nongtraitrung = new NongTraiTrung();$nongtrairauqua = new NongTraiRauQua();
if($act == 'del' && $id){
	$danhmucnongtrai->id = $id; $dm = $danhmucnongtrai->get_one();
	if($nongtrai->check_dmnongtrai($id) || $nongtraitrung->check_dmnongtrai($id) || $nongtrairauqua->check_dmnongtrai($id)){
		transfers_to('danhmucnongtrai.html?msg=Không thể xóa, ràng buộc các Nông trại giết mổ, Nông trại Trứng, Nông trại Rau quả');
	} else {
		if($danhmucnongtrai->delete()) transfers_to('danhmucnongtrai.html?msg=Xóa thành công!');
		else transfers_to('danhmucnongtrai.html?msg=Không thể xóa, ràng buộc dữ liệu');
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
