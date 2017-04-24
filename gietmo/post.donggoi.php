<?php
require_once('header_none.php');
$donggoi = new DongGoi();
$id = isset($_POST['id']) ? $_POST['id'] : '';
$act = isset($_POST['act']) ? $_POST['act'] : '';
$url = isset($_POST['url']) ? $_POST['url'] : '';
$id_nhamay = isset($_POST['id_nhamay']) ? $_POST['id_nhamay'] : '';
$tensanpham = isset($_POST['tensanpham']) ? $_POST['tensanpham'] : '';
$quicachdonggoi = isset($_POST['quicachdonggoi']) ? $_POST['quicachdonggoi'] : '';
$solo = isset($_POST['solo']) ? $_POST['solo'] : '';
$tieuchuan = isset($_POST['tieuchuan']) ? $_POST['tieuchuan'] : '';
$sochungnhantieuchuan = isset($_POST['sochungnhantieuchuan']) ? $_POST['sochungnhantieuchuan'] : '';
$ngaygiogietmo = isset($_POST['ngaygiogietmo']) ? $_POST['ngaygiogietmo'] : '';
$ngaygiodonggoi = isset($_POST['ngaygiodonggoi']) ? $_POST['ngaygiodonggoi'] : '';
$hansudung = isset($_POST['hansudung']) ? $_POST['hansudung'] : '';
$hienthi = isset($_POST['hienthi']) ? $_POST['hienthi'] : 0;

$donggoi->id_nhamay = $id_nhamay;
$donggoi->tensanpham = $tensanpham;
$donggoi->quicachdonggoi = $quicachdonggoi;
$donggoi->solo = $solo;
$donggoi->tieuchuan = $tieuchuan;
$donggoi->sochungnhantieuchuan = $sochungnhantieuchuan;
$donggoi->ngaygiogietmo = $ngaygiogietmo ? new MongoDate(convert_date_yyyy_mm_dd($ngaygiogietmo)) : '';
$donggoi->ngaygiodonggoi = $ngaygiodonggoi ? new MongoDate(convert_date_yyyy_mm_dd($ngaygiodonggoi)) : '';
$donggoi->hansudung = $hansudung;
$donggoi->hienthi = intval($hienthi);
$donggoi->id_user = $id_user;
$donggoi->id_congty = $id_congty;

$l = explode("?", $url); $url = $l[0];
if($act == 'edit'){
	$donggoi->id = $id;
	if($donggoi->edit()) {
		if($url) transfers_to($url . '?msg=Chỉnh sửa thành công');
		else transfers_to('donggoi.htmlmsg=Chỉnh sửa thành công!');
	}
} else {
	if($donggoi->insert()){
		if($url) transfers_to($url . '?msg=Thêm thành công');
		else transfers_to('donggoi.htmlmsg=Thêm thành công!');
	}
}
?>