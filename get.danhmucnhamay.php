<?php
require_once('header_none.php');
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';
$danhmucnhamay = new DanhMucNhaMay();
$nhamay = new NhaMay(); $nhamayrauqua = new NhaMayRauQua();
$donggoitrung = new DongGoiTrung();$donggoirauqua = new DongGoiRauQua();
if($act == 'del' && $id){
	$danhmucnhamay->id = $id; $dm = $danhmucnhamay->get_one();
	if($nhamay->check_dmnhamay($id) || $nhamayrauqua->check_dmnhamay($id) || $donggoitrung->check_dmnhamay($id) || $donggoirauqua->check_dmnhamay($id)){
		transfers_to('danhmucnhamay.html?msg=Không thể xóa, ràng buộc dữ liệu ở nhà máy giết mổ, Nơi sơ chế rau quả, Nơi đóng gói trứng và rau quả.');
	} else {
		if($danhmucnhamay->delete()) transfers_to('danhmucnhamay.html?msg=Xóa thành công!');
		else transfers_to('danhmucnhamay.html?msg=Không thể xóa, ràng buộc nơi giết mổ');
	}
}

if($act == 'edit'){
	$danhmucnhamay->id = $id; $dm = $danhmucnhamay->get_one();
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