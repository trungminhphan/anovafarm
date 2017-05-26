<?php
require_once('header_none.php');
$nongtrai = new NongTrai();$danhmucnongtrai = new DanhMucNongTrai();
$nhamay = new NhaMay();
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';
if($act == 'del' && $id){
	$nongtrai->id = $id;
	if($nhamay->check_nongtrai($id)){
		transfers_to('nongtrai.html?msg=Không thể xóa, ràng buộc dữ liệu ở nhà máy');
	} else {
		if($nongtrai->delete()){
			transfers_to('nongtrai.html?msg=Xoá thành công');
		}
	}
}
if($act == 'edit' && $id){
	$nongtrai->id = $id; $nt = $nongtrai->get_one();
	$arr = array(
		'id' => $id,
		'act' => $act,
		//'ten' => $nt['ten'],
		//'diachi' => $nt['diachi'],
		'id_dmnongtrai' => strval($nt['id_dmnongtrai']),
		'tieuchuan' => $nt['tieuchuan'],
		'ngaygioxuat' => date("d/m/Y",$nt['ngaygioxuat']->sec),
		'madan' => $nt['madan'],
		'soluong' => $nt['soluong'],
		'nhamaycungcapthucan' => $nt['nhamaycungcapthucan'],
		'soxevanchuyen' => $nt['soxevanchuyen'],
		'tentaixe' => $nt['tentaixe'],
		'sogiaykiemdichthusong' => $nt['sogiaykiemdichthusong'],
		'nhanvienkiemdich' => $nt['nhanvienkiemdich'],
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

if($act == 'themnhamay'){
	$nongtrai->id = $id; $nt = $nongtrai->get_one();
	$danhmucnongtrai->id = $nt['id_dmnongtrai']; $dm = $danhmucnongtrai->get_one();
	$arr = array(
		'id' => $id,
		'madan' => $nt['madan'],
		'ten' => $dm['ten'],
		'diachi' => $dm['diachi'],
		'tieuchuan' => $nt['tieuchuan'],
		'sogiaykiemdichthusong' => $nt['sogiaykiemdichthusong']
	);
	echo json_encode($arr);
}