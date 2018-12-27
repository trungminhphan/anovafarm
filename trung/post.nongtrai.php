<?php
require_once('header_none.php');
use \Models\DBConnect;
use \Models\NongTraiTrung;

$nongtrai = new NongTraiTrung();
$id = isset($_POST['id']) ? $_POST['id'] : '';
$act = isset($_POST['act']) ? $_POST['act'] : '';
$url = isset($_POST['url']) ? $_POST['url'] : '';
//$ten = isset($_POST['ten']) ? $_POST['ten'] : '';
//$diachi = isset($_POST['diachi']) ? $_POST['diachi'] : '';
$id_dmnongtrai = isset($_POST['id_dmnongtrai']) ? $_POST['id_dmnongtrai'] : '';
$tieuchuan = isset($_POST['tieuchuan']) ? $_POST['tieuchuan'] : '';
$sochungnhantieuchuan = isset($_POST['sochungnhantieuchuan']) ? $_POST['sochungnhantieuchuan'] : '';
$madan = isset($_POST['madan']) ? $_POST['madan'] : '';
$soluong = isset($_POST['soluong']) ? $_POST['soluong'] : 0;
$ngaythuhoach = isset($_POST['ngaythuhoach']) ? $_POST['ngaythuhoach'] : 0;
$nhamaycungcapthucan = isset($_POST['nhamaycungcapthucan']) ? $_POST['nhamaycungcapthucan'] : '';
$soxevanchuyen = isset($_POST['soxevanchuyen']) ? $_POST['soxevanchuyen'] : '';
$tentaixe = isset($_POST['tentaixe']) ? $_POST['tentaixe'] : '';
$hienthi = isset($_POST['hienthi']) ? $_POST['hienthi'] : 0;

//$nongtrai->ten = $ten;
//$nongtrai->diachi = $diachi;
$nongtrai->id_dmnongtrai = $id_dmnongtrai;
$nongtrai->tieuchuan = $tieuchuan;
$nongtrai->sochungnhantieuchuan = $sochungnhantieuchuan;
$nongtrai->madan = $madan;
$nongtrai->soluong = $soluong;
$nongtrai->ngaythuhoach = DbConnect::getDate();//$ngaythuhoach ? new MongoDate(convert_date_yyyy_mm_dd($ngaythuhoach)) : '';
$nongtrai->nhamaycungcapthucan = $nhamaycungcapthucan;
$nongtrai->soxevanchuyen = $soxevanchuyen;
$nongtrai->tentaixe = $tentaixe;
$nongtrai->hienthi = $hienthi;
$nongtrai->id_user = $id_user;
$nongtrai->id_congty = $id_congty;

$l = explode("?", $url); $url = $l[0];
if($act == 'edit'){
	$nongtrai->id = $id;
	if($nongtrai->edit()){
		if($url) transfers_to($url . '?msg=Chỉnh sửa thành công');
		else transfers_to('nongtrai.html?msg=Chỉnh sửa thành công!');
	}
} else {
	if($nongtrai->insert()){
		if($url) transfers_to($url . '?msg=Thêm thành công');
		else transfers_to('nongtrai.html?msg=Thêm nhà máy thành công!');
	}
}

?>
