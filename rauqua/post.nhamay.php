<?php
require_once('header_none.php');
use \Models\DBConnect;
use \Models\NhaMayRauQua;
$nhamay = new NhaMayRauQua();
$id = isset($_POST['id']) ? $_POST['id'] : '';
$act = isset($_POST['act']) ? $_POST['act'] : '';
$url = isset($_POST['url']) ? $_POST['url'] : '';

$id_nongtrairauqua = isset($_POST['id_nongtrairauqua']) ? $_POST['id_nongtrairauqua'] : '';
$id_dmnhamay = isset($_POST['id_dmnhamay']) ? $_POST['id_dmnhamay'] : '';
$tieuchuan = isset($_POST['tieuchuan']) ? $_POST['tieuchuan'] : '';
$sochungnhantieuchuan = isset($_POST['sochungnhantieuchuan']) ? $_POST['sochungnhantieuchuan'] : '';
$matruyxuatsanpham = isset($_POST['matruyxuatsanpham']) ? $_POST['matruyxuatsanpham'] : '';
$ngaysoche = isset($_POST['ngaysoche']) ? $_POST['ngaysoche'] : '';
$hienthi = isset($_POST['hienthi']) ? $_POST['hienthi'] : '';

$nhamay->id_nongtrairauqua = $id_nongtrairauqua;
$nhamay->id_dmnhamay = $id_dmnhamay;
$nhamay->tieuchuan = $tieuchuan;
$nhamay->sochungnhantieuchuan = $sochungnhantieuchuan;
$nhamay->matruyxuatsanpham = $matruyxuatsanpham;
$nhamay->ngaysoche = DBConenct::setDate();//$ngaysoche ? new MongoDate(convert_date_yyyy_mm_dd($ngaysoche)) : '';
$nhamay->hienthi = $hienthi;
$nhamay->id_user = $id_user;
$nhamay->id_congty = $id_congty;

if($act == 'edit'){
	$nhamay->id = $id;
	if($nhamay->edit()){
		if($url){
			$l = explode("?", $url);transfers_to($l[0] . '?msg=Chỉnh sửa thành công');
		}
		else transfers_to('nhamay.html?msg=Chỉnh sửa thành công!');
	}
} else {
	if($nhamay->insert()){
		if($url){
			$l = explode("?", $url);transfers_to($l[0] .'?msg=Thêm thành công');
		}
		else transfers_to('nhamay.html?msg=Thêm nhà máy thành công!');
	}
}

?>
