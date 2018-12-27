<?php
require_once('header_none.php');
use \Models\DBConnect;
use \Models\NhaMayRauQua;
use \Models\NongTraiRauQua;
use \Models\DongGoiRauQua;
use \Models\BanLeRauQua;
use \Models\DanhMucNhaMay;
use \Models\DanhMucBanLe;
use \Models\DanhMucNongTrai;

$nhamay = new NhaMayRauQua();$nongtrai = new NongTraiRauQua();
$donggoi = new DongGoiRauQua();$banle = new BanLeRauQua();
$danhmucnhamay = new DanhMucNhaMay();$danhmucbanle = new DanhMucBanLe();$danhmucnongtrai = new DanhMucNongTrai();
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';
if($act == 'edit' || $act == 'thembanle'){
	$donggoi->id = $id; $dg = $donggoi->get_one();
	$nhamay->id = $dg['id_nhamayrauqua']; $nm = $nhamay->get_one();
	$danhmucnhamay->id = $nm['id_dmnhamay']; $dm = $danhmucnhamay->get_one();
	$nongtrai->id = $nm['id_nongtrairauqua']; $nt = $nongtrai->get_one();
	$danhmucnongtrai->id = $nt['id_dmnongtrai']; $dmnt = $danhmucnongtrai->get_one();
	$danhmucnhamay->id = $dg['id_dmnhamay']; $dmnm = $danhmucnhamay->get_one();
	$arr = array(
		'id' => $id,
		'act' => $act,
		'id_donggoirauqua' => $id,
		'tensanpham' => $dg['tensanpham'],
		'quicachdonggoi' => $dg['quicachdonggoi'],
		'solo' => $dg['solo'],
		'id_dmnhamay' => strval($dg['id_dmnhamay']),
		'tieuchuan' => $dg['tieuchuan'],
		'sochungnhantieuchuan' => $dg['sochungnhantieuchuan'],
		'id_nhamayrauqua' => strval($dg['id_nhamayrauqua']),
		'ngaydonggoi' => DBConnect::getDate($dg['ngaydonggoi'],"d/m/Y"),
		'hansudung' => $dg['hansudung'],
		'hienthi' => '<input type="checkbox" data-render="switchery" data-theme="default" name="hienthi" value="1" '.($dg['hienthi'] == 1 ? ' checked' : '').'/>',
		'tentrai' => $dmnt['ten'],
		'diachitrai' => $dmnt['diachi'],
		'tennhamay' => $dmnm['ten'],
		'diachinhamay' => $dmnm['diachi']
		);
	echo json_encode($arr);
}

if($act == 'del'){
	$donggoi->id = $id;
	if($banle->check_donggoi($id)){
		transfers_to('donggoi.html?msg=Không thể xoá, ràng buộc dữ liệu ở bán lẻ rau quả!');
	} else {
		if($donggoi->delete()) transfers_to('donggoi.html?msg=Xoá thành công!');
		else transfers_to('donggoi.html?msg=Không thể xoá!');
	}
}

if($act == 'hienthi'){
	$hienthi = isset($_GET['hienthi']) ? $_GET['hienthi'] : '';
	$donggoi->id = $id;
	if($donggoi->set_hienthi(intval($hienthi))){
		if($hienthi == 1){
			echo '<a href="get.donggoi.html?id='.$id.'&hienthi=0&act=hienthi" class="sethienthi" onclick="return false;"><i class="fa fa-eye text-primary"></i></a>';
		} else {
			echo '<a href="get.donggoi.html?id='.$id.'&hienthi=1&act=hienthi" class="sethienthi" onclick="return false;"><i class="fa fa-eye-slash text-danger"></i></a>';
		}
	}
}

?>
