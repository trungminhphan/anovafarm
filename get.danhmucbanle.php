<?php
require_once('header_none.php');
use \Models\DanhMucBanLe;
use \Models\BanLe;
use \Models\BanLeTrung;
use \Models\BanLeRauQua;
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';
$danhmucbanle = new DanhMucBanLe();
$banle = new BanLe();$banletrung = new BanLeTrung(); $banlerauqua = new BanLeRauQua();
if($act == 'del' && $id){
	$danhmucbanle->id = $id;
	if($banle->check_dmbanle($id) || $banletrung->check_dmbanle($id) || $banlerauqua->check_dmbanle($id)){
		transfers_to('danhmucbanle.html?msg=Không thể xóa, ràng buộc dữ liệu ở Bán lẻ giết mổ, bán lẻ trứng, bán lẻ rau quả');
	} else {
		if($danhmucbanle->delete()) transfers_to('danhmucbanle.html?msg=Xóa thành công!');
		else transfers_to('danhmucbanle.html?msg=Không thể xóa, ràng buộc dữ liệu');
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
