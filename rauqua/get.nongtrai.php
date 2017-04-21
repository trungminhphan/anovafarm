<?php
require_once('header_none.php');
$nongtrai = new NongTraiRauQua();$nhamay = new NhaMayRauQua();
$danhmucnongtrai = new DanhMucNongTrai();
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';

if($act == 'del' && $id){
	$nongtrai->id = $id;
	if($nhamay->check_nongtrai($id)){
		transfers_to('nongtrai.html?msg=Không thể xoá, ràng buộc dữ liệu Nhà máy Sơ chế');
	} else {
		if($nongtrai->delete()){
			transfers_to('nongtrai.html?msg=Xoá thành công');
		}
	}
}
if($act == 'edit' || $act == 'themnhamay'){
	$nongtrai->id = $id; $nt = $nongtrai->get_one();
	$danhmucnongtrai->id = $nt['id_dmnongtrai']; $dmnt = $danhmucnongtrai->get_one();
	$arr = array(
		'id' => $id,
		'act' => $act,
		'id_dmnongtrai' => $nt['id_dmnongtrai'],
		'tennongtrai' => $dmnt['ten'],
		'diachinongtrai' => $dmnt['diachi'],
		'tieuchuan' => $nt['tieuchuan'],
		'sochungnhantieuchuan' => $nt['sochungnhantieuchuan'],
		'matruyxuatsanpham' => $nt['matruyxuatsanpham'],
		'soluong' => $nt['soluong'],
		'ngaythuhoach' => date("d/m/Y",$nt['ngaythuhoach']->sec),
		'soxevanchuyen' => $nt['soxevanchuyen'],
		'tentaixe' => $nt['tentaixe'],
		'hienthi' => '<input type="checkbox" data-render="switchery" data-theme="default" name="hienthi" value="1" '.($nt['hienthi'] == 1 ? ' checked' : '').'/>'
	);
	echo json_encode($arr);
}

if($act == 'hienthi'){
	$hienthi = isset($_GET['hienthi']) ? $_GET['hienthi'] : '';
	$nongtrai->id = $id;
	if($nongtrai->set_hienthi(intval($hienthi))){
		if($hienthi == 1){
			echo '<a href="get.nongtrai.html?id='.$id.'&hienthi=0&act=hienthi" class="sethienthi" onclick="return false;"><i class="fa fa-eye text-primary"></i></a>';
		} else {
			echo '<a href="get.nongtrai.html?id='.$id.'&hienthi=1&act=hienthi" class="sethienthi" onclick="return false;"><i class="fa fa-eye-slash text-danger"></i></a>';
		}
	}
}

if($act == 'themdonggoi'){
	$nongtrai->id = $id; $nt = $nongtrai->get_one();
	$danhmucnongtrai->id = $nt['id_dmnongtrai']; $dm = $danhmucnongtrai->get_one();
	$arr = array(
		'id' => $id,
		'madan' => $nt['madan'],
		'ten' => $dm['ten'],
		'diachi' => $dm['diachi'],
		'tieuchuan' => $nt['tieuchuan'],
		'sochungnhantieuchuan' => $nt['sochungnhantieuchuan']
	);
	echo json_encode($arr);
}