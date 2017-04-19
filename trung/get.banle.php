<?php
require_once('header_none.php');
$nhamay = new NhaMay();$nongtrai = new NongTrai();$banle = new BanLe();
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';

if($act == 'hienthi'){
	$hienthi = isset($_GET['hienthi']) ? $_GET['hienthi'] : '';
	$banle->id = $id;
	if($banle->set_hienthi(intval($hienthi))){
		if($hienthi == 1){
			echo '<a href="get.banle.html?id='.$id.'&hienthi=0&act=hienthi" class="sethienthi" onclick="return false;"><i class="fa fa-eye text-primary"></i></a>';
		} else {
			echo '<a href="get.banle.html?id='.$id.'&hienthi=1&act=hienthi" class="sethienthi" onclick="return false;"><i class="fa fa-eye-slash text-danger"></i></a>';
		}
	}
}

if($act == 'edit'){
	$banle->id = $id; $bl = $banle->get_one();
	$arr = array(
		'id' => $id,
		'act' => 'edit',
		'id_donggoi' => strval($bl['id_donggoi']),
		'noibansi' => $bl['noibansi'],
		'diachibansi' => $bl['diachibansi'],
		'ngaygiobansi' => date("d/m/Y", $bl['ngaygiobansi']->sec),
		'giobansi' => intval(date("H", $bl['ngaygiobansi']->sec)),
		'phutbansi' => intval(date("i", $bl['ngaygiobansi']->sec)),
		'noibanle' => $bl['noibanle'],
		'tenquaysap' => $bl['tenquaysap'],
		'ngaygiobanle' => date("d/m/Y", $bl['ngaygiobanle']->sec),
		'giobanle' => intval(date("H", $bl['ngaygiobanle']->sec)),
		'phutbanle' => intval(date("i", $bl['ngaygiobanle']->sec))
	);
	echo json_encode($arr);
}

if($act == 'del'){
	$banle->id = $id;
	if($banle->delete()){
		transfers_to('banle.html?msg=Xóa thành công!');
	}
}

?>