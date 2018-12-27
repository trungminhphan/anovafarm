<?php
require_once('header_none.php');
use \Models\NhaMay;
use \Models\NongTrai;
use \Models\DongGoi;
use \Models\DanhMucNhaMay;
use \Models\DBConnect;

$nhamay = new NhaMay();$nongtrai = new NongTrai();$donggoi = new DongGoi();
$danhmucnhamay = new DanhMucNhaMay();
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';

if($act == 'edit' || $act == 'themdonggoi'){
	$nhamay->id = $id; $nm = $nhamay->get_one();
	$nongtrai->id = $nm['id_nongtrai']; $nt = $nongtrai->get_one();
	$danhmucnhamay->id = $nm['id_dmnhamay']; $dmnm = $danhmucnhamay->get_one();
	$arr = array(
		'id' => $id,
		'act' => $act,
		'id_nongtrai' => strval($nm['id_nongtrai']),
		'madan' => $nt['madan'],
		'ten' => $dmnm['ten'],
		'diachi' => $dmnm['diachi'],
		'id_dmnhamay' => strval($nm['id_dmnhamay']),
		'tieuchuan' => $nm['tieuchuan'],
		'solo' => $nm['solo'],
		'sogiaykiemdichthusong' => $nm['sogiaykiemdichthusong'],
		'giaychungnhan' => $nm['giaychungnhan'],
		'nhanvienkiemsoat' => $nm['nhanvienkiemsoat'],
		'ngaygiogietmo' => DBConnect::getDate($nm['ngaygiogietmo'],"d/m/Y"),
		'gio' => intval(DBConnect::getDate($nm['ngaygiogietmo'],"H")),
		'phut' => intval(DBConnect::getDate($nm['ngaygiogietmo'],"i")),
		'hienthi' => '<input type="checkbox" data-render="switchery" data-theme="default" name="hienthi" value="1" '.($nm['hienthi'] == 1 ? ' checked' : '').'/>'
	);
	echo json_encode($arr);
}

if($act == 'del'){
	$nhamay->id = $id;
	if($donggoi->check_nhamay($id)){
		transfers_to('nhamay.html?msg=Không thể xoá, vì liên quan bán lẻ!');
	} else {
		if($nhamay->delete()) transfers_to('nhamay.html?msg=Xoá thành công!');
		else transfers_to('nhamay.html?msg=Không thể xoá, vì ràng buộc đóng gói!');
	}
}

if($act == 'hienthi'){
	$hienthi = isset($_GET['hienthi']) ? $_GET['hienthi'] : '';
	$nhamay->id = $id;
	if($nhamay->set_hienthi(intval($hienthi))){
		if($hienthi == 1){
			echo '<a href="get.nhamay.html?id='.$id.'&hienthi=0&act=hienthi" class="sethienthi" onclick="return false;"><i class="fa fa-eye text-primary"></i></a>';
		} else {
			echo '<a href="get.nhamay.html?id='.$id.'&hienthi=1&act=hienthi" class="sethienthi" onclick="return false;"><i class="fa fa-eye-slash text-danger"></i></a>';
		}
	}
}

?>
