<?php
require_once('header_none.php');
$donggoi = new DongGoiTrung();
$id = isset($_POST['id']) ? $_POST['id'] : '';
$act = isset($_POST['act']) ? $_POST['act'] : '';
$url = isset($_POST['url']) ? $_POST['url'] : '';
$id_nongtraitrung = isset($_POST['id_nongtraitrung']) ? $_POST['id_nongtraitrung'] : '';
$tensanpham = isset($_POST['tensanpham']) ? $_POST['tensanpham'] : '';
$quicachdonggoi = isset($_POST['quicachdonggoi']) ? $_POST['quicachdonggoi'] : '';
$solo = isset($_POST['solo']) ? $_POST['solo'] : '';
$id_dmnhamay = isset($_POST['id_dmnhamay']) ? $_POST['id_dmnhamay'] : '';
$tieuchuan = isset($_POST['tieuchuan']) ? $_POST['tieuchuan'] : '';
$sochungnhantieuchuan = isset($_POST['sochungnhantieuchuan']) ? $_POST['sochungnhantieuchuan'] : '';
$ngaydonggoi = isset($_POST['ngaydonggoi']) ? $_POST['ngaydonggoi'] : '';
$hansudung = isset($_POST['hansudung']) ? $_POST['hansudung'] : '';
$hienthi = isset($_POST['hienthi']) ? $_POST['hienthi'] : 0;

$donggoi->id_nongtraitrung = $id_nongtraitrung;
$donggoi->tensanpham = $tensanpham;
$donggoi->quicachdonggoi = $quicachdonggoi;
$donggoi->solo = $solo;
$donggoi->id_dmnhamay = $id_dmnhamay;
$donggoi->tieuchuan = $tieuchuan;
$donggoi->sochungnhantieuchuan = $sochungnhantieuchuan;
$donggoi->ngaydonggoi = $ngaydonggoi ? new MongoDate(convert_date_yyyy_mm_dd($ngaydonggoi)) : '';
$donggoi->hansudung = $hansudung;
$donggoi->hienthi = intval($hienthi);
$donggoi->id_user = $id_user;
$donggoi->id_congty = $id_congty;

$l = explode("?", $url); $url = $l[0];
if($act == 'edit'){
	$donggoi->id = $id;
	if($donggoi->edit()) {
		if($url) transfers_to($url . '?msg=Chỉnh sửa thành công');
		else transfers_to('donggoi.html?msg=Chỉnh sửa thành công!');
	}
} else {
	if($donggoi->insert()){
		if($url) transfers_to($url . '?msg=Thêm thành công');
		else transfers_to('donggoi.htmlmsg=Thêm thành công!');
	}
}
?>