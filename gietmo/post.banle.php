<?php
require_once('header_none.php');
$banle = new BanLe();
$id = isset($_POST['id']) ? $_POST['id'] : '';
$act = isset($_POST['act']) ? $_POST['act'] : '';
$url = isset($_POST['url']) ? $_POST['url'] : '';
$id_donggoi = isset($_POST['id_donggoi']) ? $_POST['id_donggoi'] : '';
$id_dmbanle = isset($_POST['id_dmbanle']) ? $_POST['id_dmbanle'] : '';
$hienthi = isset($_POST['hienthi']) ? $_POST['hienthi'] : 0;

/*$noibansi = isset($_POST['noibansi']) ? $_POST['noibansi'] : '';
$diachibansi = isset($_POST['diachibansi']) ? $_POST['diachibansi'] : '';
$ngaygiobansi = isset($_POST['ngaygiobansi']) ? $_POST['ngaygiobansi'] : '';
$giobansi = isset($_POST['giobansi']) ? $_POST['giobansi'] : '';
$phutbansi = isset($_POST['phutbansi']) ? $_POST['phutbansi'] : '';
$ngaygiobansi = new MongoDate(convert_date_yyyy_mm_dd_1($ngaygiobansi, $giobansi, $phutbansi));
$noibanle = isset($_POST['noibanle']) ? $_POST['noibanle'] : '';
$tenquaysap = isset($_POST['tenquaysap']) ? $_POST['tenquaysap'] : '';

$ngaygiobanle = isset($_POST['ngaygiobanle']) ? $_POST['ngaygiobanle'] : '';
$giobanle = isset($_POST['giobanle']) ? $_POST['giobanle'] : '';
$phutbanle = isset($_POST['phutbanle']) ? $_POST['phutbanle'] : '';
$ngaygiobanle = new MongoDate(convert_date_yyyy_mm_dd_1($ngaygiobanle, $giobanle, $phutbanle));
*/
$banle->id_donggoi = $id_donggoi;
$banle->id_dmbanle = $id_dmbanle;
$banle->hienthi = $hienthi;
$banle->id_user = $id_user;
$banle->id_congty = $id_congty;
/*$banle->noibansi = $noibansi;
$banle->diachibansi = $diachibansi;
$banle->ngaygiobansi = $ngaygiobansi;
$banle->noibanle = $noibanle;
$banle->tenquaysap  = $tenquaysap;
$banle->ngaygiobanle = $ngaygiobanle;*/
$l = explode("?", $url); $url = $l[0];
if($act == 'edit'){
	$banle->id = $id;
	if($banle->edit()) {
		if($url) transfers_to($url . '?msg=Chỉnh sửa thành công');
		else transfers_to('banle.htmlmsg=Chỉnh sửa thành công!');
	}
} else {
	if($banle->insert()){
		if($url) transfers_to($url . '?msg=Thêm mới thành công!');
		else transfers_to('banle.htmlmsg=Thêm mới thành công!');
	}
}
?>