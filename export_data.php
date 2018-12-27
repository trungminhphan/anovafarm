<?php
require_once('header_none.php');
use Models\NongTrai;
use Models\NhaMay;
use Models\DongGoi;
use Models\BanLe;
use Models\NongTraiTrung;
use Models\DongGoiTrung;
use Models\BanLeTrung;
use Models\NongTraiRauQua;
use Models\NhaMayRauQua;
use Models\DongGoiRauQua;
use Models\BanLeRauQua;
use Models\DanhMucNongTrai;
use Models\DanhMucNhaMay;
use Models\DanhMucBanLe;
use \Models\DBConnect;


$id_user = $users->get_userid();
$id_congty = $users->get_id_congty();
$nongtrai = new NongTrai();$nhamay = new NhaMay(); $donggoi = new DongGoi(); $banle = new BanLe();
$nongtraitrung = new NongTraiTrung();$donggoitrung = new DongGoiTrung(); $banletrung = new BanLeTrung();
$nongtrairauqua = new NongTraiRauQua();$nhamayrauqua = new NhaMayRauQua(); $donggoirauqua = new DongGoiRauQua(); $banlerauqua = new BanLeRauQua();
$danhmucnongtrai = new DanhMucNongTrai();$danhmucnhamay = new DanhMucNhaMay();$danhmucbanle = new DanhMucBanLe();
$collect = '';
if(isset($_GET['submit'])){
	$collect = isset($_GET['collect']) ? $_GET['collect'] : '';
    if($collect == 'nongtrai'){
    	if($users->is_admin()){
		    $list = $nongtrai->get_all_list();
		} else {
		    $nongtrai->id_congty = $id_congty;
		    $list = $nongtrai->get_list_by_congty();
		}
    }
    if($collect == 'nhamay'){
    	if($users->is_admin()){
		    $list = $nhamay->get_all_list();
		} else {
		    $nhamay->id_congty = $id_congty;
		    $list = $nhamay->get_list_by_congty();
		}
    }
    if($collect == 'donggoi'){
    	if($users->is_admin()){
		    $list = $donggoi->get_all_list();
		} else {
		    $donggoi->id_congty = $id_congty;
		    $list = $donggoi->get_list_by_congty();
		}
    }
    if($collect == 'banle'){
    	if($users->is_admin()){
		    $list =  $banle->get_all_list();
		} else {
		    $banle->id_congty = $id_congty;
		    $list =  $banle->get_list_by_congty();
		}
    }
    if($collect == 'nongtraitrung'){
    	if($users->is_admin()){
		    $list = $nongtraitrung->get_all_list();
		} else {
		    $nongtraitrung->id_congty = $id_congty;
		    $list = $nongtraitrung->get_list_by_congty();
		}
    }
    if($collect == 'donggoitrung'){
    	if($users->is_admin()){
		    $list = $donggoitrung->get_all_list();
		} else {
		    $donggoitrung->id_congty = $id_congty;
		    $list = $donggoitrung->get_list_by_congty();
		}
    }
    if($collect == 'banletrung'){
    	if($users->is_admin()){
		    $list =  $banletrung->get_all_list();
		} else {
		    $banletrung->id_congty = $id_congty;
		    $list =  $banletrung->get_list_by_congty();
		}
    }
    if($collect == 'nongtrairauqua'){
    	if($users->is_admin()){
		    $list = $nongtrairauqua->get_all_list();
		} else {
		    $nongtrairauqua->id_congty = $id_congty;
		    $list = $nongtrairauqua->get_list_by_congty();
		}
    }
    if($collect == 'nhamayrauqua'){
    	if($users->is_admin()){
		    $list = $nhamayrauqua->get_all_list();
		} else {
		    $nhamayrauqua->id_congty = $id_congty;
		    $list = $nhamayrauqua->get_list_by_congty();
		}
    }
    if($collect == 'donggoirauqua'){
    	if($users->is_admin()){
		    $list = $donggoirauqua->get_all_list();
		} else {
		    $donggoirauqua->id_congty = $id_congty;
		    $list = $donggoirauqua->get_list_by_congty();
		}
    }
    if($collect == 'banlerauqua'){
    	if($users->is_admin()){
		    $list =  $banlerauqua->get_all_list();
		} else {
		    $banlerauqua->id_congty = $id_congty;
		    $list =  $banlerauqua->get_list_by_congty();
		}
    }
}
require_once('cls/PHPExcel.php');
if($collect == 'nongtrai' && $list){
	$inputFileName = 'templates/nongtrai.xlsx';
	$objPHPExcel = PHPExcel_IOFactory::load($inputFileName);
	// Set document properties
	$objPHPExcel->getProperties()->setCreator("Phan Minh Trung")
								 ->setLastModifiedBy("Phan Minh Trung")
								 ->setTitle("Office 2007 XLSX Test Document")
								 ->setSubject("Office 2007 XLSX Test Document")
								 ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
								 ->setKeywords("office 2007 openxml php")
								 ->setCategory("Bao cao don hang ANOVA");
	$objPHPExcel->setActiveSheetIndex(0);
	$i=2; $stt=1;
	foreach($list as $nt){
		$url = $link_frontend.'/?id='.$nt['_id'].'&type=1&q=gietmo';
		$danhmucnongtrai->id = $nt['id_dmnongtrai'];$dm = $danhmucnongtrai->get_one();
		$objPHPExcel->setActiveSheetIndex()->setCellValue('A'.$i, $stt);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('B'.$i, $dm['ten']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('C'.$i, $nt['madan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('D'.$i, DBConnect::getDate($nt['ngaygioxuat'],"d/m/Y"));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('E'.$i, $nt['soluong']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('F'.$i, isset($nt['CODE']) ? $nt['CODE'] : '');
		$objPHPExcel->setActiveSheetIndex()->setCellValue('G'.$i, $nt['soxevanchuyen']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('H'.$i, $nt['tentaixe']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('I'.$i, $nt['sogiaykiemdichthusong']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('J'.$i, $nt['nhanvienkiemdich']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('K'.$i, $nt['tieuchuan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('L'.$i, $nt['nhamaycungcapthucan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('M'.$i, $url);
		$i++; $stt++;
	}
}
if($collect == 'nhamay' && $list){
	$inputFileName = 'templates/nhamay.xlsx';
	$objPHPExcel = PHPExcel_IOFactory::load($inputFileName);
	// Set document properties
	$objPHPExcel->getProperties()->setCreator("Phan Minh Trung")
								 ->setLastModifiedBy("Phan Minh Trung")
								 ->setTitle("Office 2007 XLSX Test Document")
								 ->setSubject("Office 2007 XLSX Test Document")
								 ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
								 ->setKeywords("office 2007 openxml php")
								 ->setCategory("Bao cao don hang ANOVA");
	$objPHPExcel->setActiveSheetIndex(0);
	$i=2; $stt=1;
	foreach($list as $nm){
		$nongtrai->id = $nm['id_nongtrai'];$nt=$nongtrai->get_one();
        $danhmucnhamay->id = $nm['id_dmnhamay']; $dm = $danhmucnhamay->get_one();
        $url = $link_frontend.'/?id='.$nm['_id'].'&type=2&q=gietmo';
		$objPHPExcel->setActiveSheetIndex()->setCellValue('A'.$i, $stt);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('B'.$i, $dm['ten']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('C'.$i, $nm['tieuchuan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('D'.$i, $nt['madan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('E'.$i, $nm['solo']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('F'.$i, DBConnect::getDate($nm['ngaygiogietmo'],"d/m/Y"));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('G'.$i, $nt['sogiaykiemdichthusong']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('H'.$i, isset($nt['CODE']) ? $nt['CODE'] : '');
		$objPHPExcel->setActiveSheetIndex()->setCellValue('I'.$i, $nt['soxevanchuyen']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('J'.$i, $nm['giaychungnhan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('K'.$i, $nm['nhanvienkiemsoat']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('L'.$i, $url);
		$i++; $stt++;
	}
}
if($collect == 'donggoi' && $list){
	$inputFileName = 'templates/donggoi.xlsx';
	$objPHPExcel = PHPExcel_IOFactory::load($inputFileName);
	// Set document properties
	$objPHPExcel->getProperties()->setCreator("Phan Minh Trung")
								 ->setLastModifiedBy("Phan Minh Trung")
								 ->setTitle("Office 2007 XLSX Test Document")
								 ->setSubject("Office 2007 XLSX Test Document")
								 ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
								 ->setKeywords("office 2007 openxml php")
								 ->setCategory("Bao cao don hang ANOVA");
	$objPHPExcel->setActiveSheetIndex(0);
	$i=2; $stt=1;
	foreach($list as $dg){
		$nhamay->id = $dg['id_nhamay']; $nm = $nhamay->get_one();
		$nongtrai->id = $nm['id_nongtrai'];$nt=$nongtrai->get_one();
        $danhmucnhamay->id = $nm['id_dmnhamay']; $dm = $danhmucnhamay->get_one();
        $url = $link_frontend.'/?id='.$dg['_id'].'&type=3&q=gietmo';
		$objPHPExcel->setActiveSheetIndex()->setCellValue('A'.$i, $stt);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('B'.$i, $dm['ten']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('C'.$i, $nt['madan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('D'.$i, $dg['tensanpham']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('E'.$i, $dg['solo']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('F'.$i, $dg['quicachdonggoi']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('G'.$i, DBConnect::getDate($dg['ngaygiodonggoi'],"d/m/Y"));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('H'.$i, isset($nt['CODE']) ? $nt['CODE'] : '');
		$objPHPExcel->setActiveSheetIndex()->setCellValue('I'.$i, $nt['soxevanchuyen']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('J'.$i, $dg['tieuchuan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('K'.$i, $dg['sochungnhantieuchuan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('L'.$i, DBConnect::getDate($dg['ngaygiogietmo'],"d/m/Y"));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('M'.$i, $dg['hansudung']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('N'.$i, $url);
		$i++; $stt++;
	}
}
if($collect == 'banle' && $list){
	$inputFileName = 'templates/banle.xlsx';
	$objPHPExcel = PHPExcel_IOFactory::load($inputFileName);
	// Set document properties
	$objPHPExcel->getProperties()->setCreator("Phan Minh Trung")
								 ->setLastModifiedBy("Phan Minh Trung")
								 ->setTitle("Office 2007 XLSX Test Document")
								 ->setSubject("Office 2007 XLSX Test Document")
								 ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
								 ->setKeywords("office 2007 openxml php")
								 ->setCategory("Bao cao don hang ANOVA");
	$objPHPExcel->setActiveSheetIndex(0);
	$i=2; $stt=1;
	foreach($list as $bl){
		$donggoi->id = $bl['id_donggoi'];$dg = $donggoi->get_one();
		$url = $link_frontend.'/?id='.$bl['_id'].'&type=4&q=gietmo';
		$str_banle = '';
		if($bl['id_dmbanle']){
            foreach($bl['id_dmbanle'] as $key => $value){
                $danhmucbanle->id = $value; $dmbl = $danhmucbanle->get_one();
                $str_banle .= $dmbl['ten'] .', '. $dmbl['diachi'] . "\n";
            }
        }
		$objPHPExcel->setActiveSheetIndex()->setCellValue('A'.$i, $stt);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('B'.$i, $dg['tensanpham']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('C'.$i, $str_banle);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('D'.$i, $url);
		$i++; $stt++;
	}
}
/***************** 	TRỨNG **********************/
if($collect == 'nongtraitrung' && $list){
	$inputFileName = 'templates/nongtraitrung.xlsx';
	$objPHPExcel = PHPExcel_IOFactory::load($inputFileName);
	// Set document properties
	$objPHPExcel->getProperties()->setCreator("Phan Minh Trung")
								 ->setLastModifiedBy("Phan Minh Trung")
								 ->setTitle("Office 2007 XLSX Test Document")
								 ->setSubject("Office 2007 XLSX Test Document")
								 ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
								 ->setKeywords("office 2007 openxml php")
								 ->setCategory("Bao cao don hang ANOVA");
	$objPHPExcel->setActiveSheetIndex(0);
	$i=2; $stt=1;
	foreach($list as $nt){
		$danhmucnongtrai->id = $nt['id_dmnongtrai'];$dm = $danhmucnongtrai->get_one();
		$url = $link_frontend.'/?id='.$nt['_id'].'&type=1&q=trung';
		$objPHPExcel->setActiveSheetIndex()->setCellValue('A'.$i, $stt);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('B'.$i, $dm['ten']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('C'.$i, $nt['madan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('D'.$i, DBConnect::getDate($nt['ngaythuhoach'],"d/m/Y"));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('E'.$i, $nt['soluong']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('F'.$i, $nt['soxevanchuyen']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('G'.$i, $nt['tentaixe']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('H'.$i, $nt['tieuchuan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('I'.$i, $nt['sochungnhantieuchuan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('J'.$i, $nt['nhamaycungcapthucan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('K'.$i, $url);
		$i++; $stt++;
	}
}
if($collect == 'donggoitrung' && $list){
	$inputFileName = 'templates/donggoitrung.xlsx';
	$objPHPExcel = PHPExcel_IOFactory::load($inputFileName);
	// Set document properties
	$objPHPExcel->getProperties()->setCreator("Phan Minh Trung")
								 ->setLastModifiedBy("Phan Minh Trung")
								 ->setTitle("Office 2007 XLSX Test Document")
								 ->setSubject("Office 2007 XLSX Test Document")
								 ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
								 ->setKeywords("office 2007 openxml php")
								 ->setCategory("Bao cao don hang ANOVA");
	$objPHPExcel->setActiveSheetIndex(0);
	$i=2; $stt=1;
	foreach($list as $dg){
		$nongtraitrung->id = $dg['id_nongtraitrung'];$nt=$nongtraitrung->get_one();
        $danhmucnhamay->id = $dg['id_dmnhamay']; $dm = $danhmucnhamay->get_one();
        $danhmucnongtrai->id = $nt['id_dmnongtrai']; $dmnt = $danhmucnongtrai->get_one();
        $url =$link_frontend.'/?id='.$dg['_id'].'&type=3&q=trung';
		$objPHPExcel->setActiveSheetIndex()->setCellValue('A'.$i, $stt);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('B'.$i, $dm['ten']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('C'.$i, $nt['madan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('D'.$i, $dg['tensanpham']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('E'.$i, $dg['quicachdonggoi']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('F'.$i, DBConnect::getDate($dg['ngaydonggoi'],"d/m/Y"));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('G'.$i, $dg['solo']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('H'.$i, DBConnect::getDate($nt['ngaythuhoach'],"d/m/Y"));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('I'.$i, $dmnt['ten']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('J'.$i, $dg['tieuchuan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('K'.$i, $dg['sochungnhantieuchuan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('L'.$i, $dg['hansudung']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('M'.$i, $url);
		$i++; $stt++;
	}
}
if($collect == 'banletrung' && $list){
	$inputFileName = 'templates/banletrung.xlsx';
	$objPHPExcel = PHPExcel_IOFactory::load($inputFileName);
	// Set document properties
	$objPHPExcel->getProperties()->setCreator("Phan Minh Trung")
								 ->setLastModifiedBy("Phan Minh Trung")
								 ->setTitle("Office 2007 XLSX Test Document")
								 ->setSubject("Office 2007 XLSX Test Document")
								 ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
								 ->setKeywords("office 2007 openxml php")
								 ->setCategory("Bao cao don hang ANOVA");
	$objPHPExcel->setActiveSheetIndex(0);
	$i=2; $stt=1;
	foreach($list as $bl){
		$donggoitrung->id = $bl['id_donggoitrung'];$dg = $donggoitrung->get_one();
		$url = $link_frontend.'/?id='.$bl['_id'].'&type=4&q=trung';
		$str_banle = '';
		if($bl['id_dmbanle']){
            foreach($bl['id_dmbanle'] as $key => $value){
                $danhmucbanle->id = $value; $dmbl = $danhmucbanle->get_one();
                $str_banle .= $dmbl['ten'] .', '. $dmbl['diachi'] . "\n";
            }
        }
		$objPHPExcel->setActiveSheetIndex()->setCellValue('A'.$i, $stt);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('B'.$i, $dg['tensanpham']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('C'.$i, $str_banle);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('D'.$i, $url);
		$i++; $stt++;
	}
}
/***************** 	RAU QUẢ **********************/
if($collect == 'nongtrairauqua' && $list){
	$inputFileName = 'templates/nongtrairauqua.xlsx';
	$objPHPExcel = PHPExcel_IOFactory::load($inputFileName);
	// Set document properties
	$objPHPExcel->getProperties()->setCreator("Phan Minh Trung")
								 ->setLastModifiedBy("Phan Minh Trung")
								 ->setTitle("Office 2007 XLSX Test Document")
								 ->setSubject("Office 2007 XLSX Test Document")
								 ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
								 ->setKeywords("office 2007 openxml php")
								 ->setCategory("Bao cao don hang ANOVA");
	$objPHPExcel->setActiveSheetIndex(0);
	$i=2; $stt=1;
	foreach($list as $nt){
		$danhmucnongtrai->id = $nt['id_dmnongtrai'];$dm = $danhmucnongtrai->get_one();
		$url =$link_frontend.'/?id='.$nt['_id'].'&type=1&q=rauqua';
		$objPHPExcel->setActiveSheetIndex()->setCellValue('A'.$i, $stt);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('B'.$i, $dm['ten']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('C'.$i, $nt['matruyxuatsanpham']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('D'.$i, DBConnect::getDate("d/m/Y",$nt['ngaythuhoach'],"d/m/Y"));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('E'.$i, $nt['soluong']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('F'.$i, $nt['soxevanchuyen']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('G'.$i, $nt['tentaixe']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('H'.$i, $nt['tieuchuan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('I'.$i, $nt['sochungnhantieuchuan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('J'.$i, $url);
		$i++; $stt++;
	}
}
if($collect == 'nhamayrauqua' && $list){
	$inputFileName = 'templates/nhamayrauqua.xlsx';
	$objPHPExcel = PHPExcel_IOFactory::load($inputFileName);
	// Set document properties
	$objPHPExcel->getProperties()->setCreator("Phan Minh Trung")
								 ->setLastModifiedBy("Phan Minh Trung")
								 ->setTitle("Office 2007 XLSX Test Document")
								 ->setSubject("Office 2007 XLSX Test Document")
								 ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
								 ->setKeywords("office 2007 openxml php")
								 ->setCategory("Bao cao don hang ANOVA");
	$objPHPExcel->setActiveSheetIndex(0);
	$i=2; $stt=1;
	foreach($list as $nm){
		$nongtrairauqua->id = $nm['id_nongtrairauqua'];$nt=$nongtrairauqua->get_one();
        $danhmucnhamay->id = $nm['id_dmnhamay']; $dm = $danhmucnhamay->get_one();
        $url = $link_frontend.'/?id='.$nm['_id'].'&type=2&q=rauqua';
		$objPHPExcel->setActiveSheetIndex()->setCellValue('A'.$i, $stt);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('B'.$i, $dm['ten']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('C'.$i, $nm['tieuchuan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('D'.$i, $nm['matruyxuatsanpham']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('E'.$i, DBConnect::getDate($nm['ngaysoche'],"d/m/Y"));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('F'.$i, DBConnect::getDate($nt['ngaythuhoach'],"d/m/Y"));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('G'.$i, $nt['soluong']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('H'.$i, $nt['soxevanchuyen']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('I'.$i, $nm['sochungnhantieuchuan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('J'.$i, $url);
		$i++; $stt++;
	}
}

if($collect == 'donggoirauqua' && $list){
	$inputFileName = 'templates/donggoirauqua.xlsx';
	$objPHPExcel = PHPExcel_IOFactory::load($inputFileName);
	// Set document properties
	$objPHPExcel->getProperties()->setCreator("Phan Minh Trung")
								 ->setLastModifiedBy("Phan Minh Trung")
								 ->setTitle("Office 2007 XLSX Test Document")
								 ->setSubject("Office 2007 XLSX Test Document")
								 ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
								 ->setKeywords("office 2007 openxml php")
								 ->setCategory("Bao cao don hang ANOVA");
	$objPHPExcel->setActiveSheetIndex(0);
	$i=2; $stt=1;
	foreach($list as $dg){
		$nhamayrauqua->id = $dg['id_nhamayrauqua']; $nm = $nhamayrauqua->get_one();
		$nongtrairauqua->id = $nm['id_nongtrairauqua'];$nt=$nongtrairauqua->get_one();
        $danhmucnhamay->id = $nm['id_dmnhamay']; $dm = $danhmucnhamay->get_one();
        $url = $link_frontend.'/?id='.$dg['_id'].'&type=3&q=rauqua';
		$objPHPExcel->setActiveSheetIndex()->setCellValue('A'.$i, $stt);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('B'.$i, $dm['ten']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('C'.$i, $dg['tensanpham']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('D'.$i, $dg['quicachdonggoi']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('E'.$i, DBConnect::getDate($dg['ngaydonggoi'],"d/m/Y"));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('F'.$i, $dg['hansudung']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('G'.$i, $dg['solo']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('H'.$i, DBConnect::getDate("d/m/Y",$nt['ngaythuhoach'],"d/m/Y"));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('I'.$i, DBConnect::getDate("d/m/Y", $nm['ngaysoche'],"d/m/Y"));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('J'.$i, $dg['tieuchuan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('K'.$i, $dg['sochungnhantieuchuan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('L'.$i, $url);
		$i++; $stt++;
	}
}
if($collect == 'banlerauqua' && $list){
	$inputFileName = 'templates/banlerauqua.xlsx';
	$objPHPExcel = PHPExcel_IOFactory::load($inputFileName);
	// Set document properties
	$objPHPExcel->getProperties()->setCreator("Phan Minh Trung")
								 ->setLastModifiedBy("Phan Minh Trung")
								 ->setTitle("Office 2007 XLSX Test Document")
								 ->setSubject("Office 2007 XLSX Test Document")
								 ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
								 ->setKeywords("office 2007 openxml php")
								 ->setCategory("Bao cao don hang ANOVA");
	$objPHPExcel->setActiveSheetIndex(0);
	$i=2; $stt=1;
	foreach($list as $bl){
		$donggoirauqua->id = $bl['id_donggoirauqua'];$dg = $donggoirauqua->get_one();
		$url = $link_frontend.'/?id='.$bl['_id'].'&type=4&q=rauqua';
		$str_banle = '';
		if($bl['id_dmbanle']){
            foreach($bl['id_dmbanle'] as $key => $value){
                $danhmucbanle->id = $value; $dmbl = $danhmucbanle->get_one();
                $str_banle .= $dmbl['ten'] .', '. $dmbl['diachi'] . "\n";
            }
        }
		$objPHPExcel->setActiveSheetIndex()->setCellValue('A'.$i, $stt);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('B'.$i, $dg['tensanpham']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('C'.$i, $str_banle);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('D'.$i, $url);
		$i++; $stt++;
	}
}
// Redirect output to a client’s web browser (Excel2007)
header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
header('Content-Disposition: attachment;filename="'.$collect.'_'.date("YmdHis").'.xlsx"');
header('Cache-Control: max-age=0');
// If you're serving to IE 9, then the following may be needed
header('Cache-Control: max-age=1');
// If you're serving to IE over SSL, then the following may be needed
header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
header ('Pragma: public'); // HTTP/1.0
$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
$objWriter->save('php://output');
?>
