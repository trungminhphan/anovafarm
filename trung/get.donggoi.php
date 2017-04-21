<?php
require_once('header_none.php');
$nongtrai = new NongTraiTrung();$donggoi = new DongGoiTrung();$banle = new BanLeTrung();
$danhmucnhamay = new DanhMucNhaMay();$danhmucnongtrai = new DanhMucNongTrai();
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';

if($act == 'edit' || $act == 'thembanle'){
	$donggoi->id = $id; $dg = $donggoi->get_one();
	$nongtrai->id = $dg['id_nongtraitrung']; $nt = $nongtrai->get_one();
	$danhmucnhamay->id = $dg['id_dmnhamay']; $dm = $danhmucnhamay->get_one();
	$danhmucnongtrai->id = $nt['id_dmnongtrai']; $dmnt = $danhmucnongtrai->get_one();
	$arr = array(
		'id' => $id,
		'act' => $act,
		'id_donggoi' => $id,
		'id_nongtraitrung' => strval($dg['id_nongtraitrung']),
		'tennongtrai' => $dmnt['ten'],
		'diachinongtrai' => $dmnt['diachi'],
		'madan' => $nt['madan'],
		'id_dmnhamay' => strval($dg['id_dmnhamay']),
		'tennhamay' => $dm['ten'],
		'diachinhamay' => $dm['diachi'],
		'tensanpham' => $dg['tensanpham'],
		'quicachdonggoi' => $dg['quicachdonggoi'],
		'solo' => $dg['solo'],
		'tieuchuan' => $dg['tieuchuan'],
		'sochungnhantieuchuan' => $dg['sochungnhantieuchuan'],
		'ngaydonggoi' => date("d/m/Y", $dg['ngaydonggoi']->sec),
		'hansudung' => $dg['hansudung'],
		'hienthi' => '<input type="checkbox" data-render="switchery" data-theme="default" name="hienthi" value="1" '.($dg['hienthi'] == 1 ? ' checked' : '').'/>'
		);
	echo json_encode($arr);
}

if($act == 'del'){
	$donggoi->id = $id;
	if($banle->check_donggoi($id)){
		transfers_to('donggoi.html?msg=Không thể xoá, ràng buộc dữ liệu ở bán lẻ Trứng!');
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