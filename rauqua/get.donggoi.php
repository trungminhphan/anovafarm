<?php
require_once('header_none.php');
$nhamay = new NhaMay();$nongtrai = new NongTrai();$banle = new BanLe();
$donggoi = new DongGoi();$danhmucnhamay = new DanhMucNhaMay();
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';

if($act == 'edit' || $act == 'thembanle'){
	$donggoi->id = $id; $dg = $donggoi->get_one();
	$nhamay->id = $dg['id_nhamay']; $nm = $nhamay->get_one();
	$nongtrai->id = $nm['id_nongtrai']; $nt = $nongtrai->get_one();
	$danhmucnhamay->id = $nm['id_dmnhamay']; $dm = $danhmucnhamay->get_one();
	$arr = array(
		'id' => $id,
		'act' => $act,
		'id_donggoi' => $id,
		'madan' => $nt['madan'],
		'id_nhamay' => strval($dg['id_nhamay']),
		'tennhamay' => $dm['ten'],
		'diachinhamay' => $dm['diachi'],
		'tensanpham' => $dg['tensanpham'],
		'quicachdonggoi' => $dg['quicachdonggoi'],
		'solo' => $dg['solo'],
		'tieuchuan' => $dg['tieuchuan'],
		'sochungnhantieuchuan' => $dg['sochungnhantieuchuan'],
		'ngaygiogietmo' => date("d/m/Y", $dg['ngaygiogietmo']->sec),
		'giogietmo' => intval(date("H", $dg['ngaygiogietmo']->sec)),
		'phutgietmo' => intval(date("i", $dg['ngaygiogietmo']->sec)),
		'ngaygiodonggoi' => date("d/m/Y", $dg['ngaygiodonggoi']->sec),
		'giodonggoi' => intval(date("H", $dg['ngaygiodonggoi']->sec)),
		'phutdonggoi' => intval(date("i", $dg['ngaygiodonggoi']->sec)),
		'hansudung' => $dg['hansudung'],
		'hienthi' => '<input type="checkbox" data-render="switchery" data-theme="default" name="hienthi" value="1" '.($dg['hienthi'] == 1 ? ' checked' : '').'/>'
		);
	echo json_encode($arr);
}

if($act == 'del'){
	$donggoi->id = $id;
	if($banle->check_donggoi($id)){
		transfers_to('donggoi.html?msg=Không thể xoá, vì liên quan bán lẻ!');
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