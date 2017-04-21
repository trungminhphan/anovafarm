<?php
require_once('header_none.php');
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';
$danhmuccongty = new DanhMucCongTy();
$danhmucnhamay = new DanhMucNhaMay(); $danhmucnongtrai = new DanhMucNongTrai();
$nongtrai = new NongTrai();$nongtraitrung = new NongTraiTrung();$nongtrairauqua = new NongTraiRauQua();
$nhamay = new NhaMay(); $nhamayrauqua = new NhaMayRauQua();
$donggoi = new DongGoi(); $donggoitrung = new DongGoiTrung(); $donggoirauqua = new DongGoiRauQua();
$banle = new BanLe(); $banletrung = new BanLeTrung(); $banlerauqua = new BanLeRauQua();
if($act == 'del' && $id){
	$danhmuccongty->id = $id; $dm = $danhmuccongty->get_one();
	if($users->check_dmcongty($id) || $danhmucnhamay->check_dmcongty($id) || $danhmucnongtrai->check_dmcongty($id) 
		|| $nongtrai->check_dmcongty($id) || $nongtraitrung->check_dmcongty($id) || $nongtrairauqua->check_dmcongty($id)
		|| $nhamay->check_dmcongty($id) || $nhamayrauqua->check_dmcongty($id)
		|| $donggoi->check_dmcongty($id) || $donggoitrung->check_dmcongty($id) || $donggoirauqua->check_dmcongty($id)
		|| $banle->check_dmcongty($id) || $banletrung->check_dmcongty($id) || $banlerauqua->check_dmcongty($id)){
		transfers_to('danhmuccongty.html?msg=Không thể xoá, ràng buộc trường dữ liệu các thông tin Trứng, Rau Quả, Giết mổ!');
	} else {
		if($danhmuccongty->delete()) transfers_to('danhmuccongty.html?msg=Xóa thành công!');
		else transfers_to('danhmuccongty.html?msg=Không thể xóa, ràng buộc nơi giết mổ');
	}	
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