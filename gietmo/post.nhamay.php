<?php
require_once('header_none.php');
$nhamay = new NhaMay();
$id = isset($_POST['id']) ? $_POST['id'] : '';
$act = isset($_POST['act']) ? $_POST['act'] : '';
$url = isset($_POST['url']) ? $_POST['url'] : '';
//$ten = isset($_POST['ten']) ? $_POST['ten'] : '';
//$diachi = isset($_POST['diachi']) ? $_POST['diachi'] : '';
$id_dmnhamay = isset($_POST['id_dmnhamay']) ? $_POST['id_dmnhamay'] : '';
$tieuchuan = isset($_POST['tieuchuan']) ? $_POST['tieuchuan'] : '';
$solo = isset($_POST['solo']) ? $_POST['solo'] : '';
$sogiaykiemdichthusong = isset($_POST['sogiaykiemdichthusong']) ? $_POST['sogiaykiemdichthusong'] : '';
$giaychungnhan = isset($_POST['giaychungnhan']) ? $_POST['giaychungnhan'] : '';
$nhanvienkiemsoat = isset($_POST['nhanvienkiemsoat']) ? $_POST['nhanvienkiemsoat'] : '';
$ngaygiogietmo = isset($_POST['ngaygiogietmo']) ? $_POST['ngaygiogietmo'] : '';
$id_nongtrai = isset($_POST['id_nongtrai']) ? $_POST['id_nongtrai'] : '';
$hienthi = isset($_POST['hienthi']) ? $_POST['hienthi'] : '';

$nhamay->id_dmnhamay = $id_dmnhamay;
$nhamay->tieuchuan = $tieuchuan;
$nhamay->solo = $solo;
$nhamay->sogiaykiemdichthusong = $sogiaykiemdichthusong;
$nhamay->giaychungnhan = $giaychungnhan;
$nhamay->nhanvienkiemsoat = $nhanvienkiemsoat;
$nhamay->ngaygiogietmo = $ngaygiogietmo  ? new MongoDate(convert_date_yyyy_mm_dd($ngaygiogietmo)) : '';
$nhamay->id_nongtrai = $id_nongtrai;
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