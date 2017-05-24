<?php
require_once('header_none.php');
$id_user = $users->get_userid();
$nongtrai = new NongTrai();$nhamay = new NhaMay(); $donggoi = new DongGoi(); $banle = new BanLe();
$nongtraitrung = new NongTraiTrung();$donggoitrung = new DongGoiTrung(); $banletrung = new BanLeTrung();
$nongtrairauqua = new NongTraiRauQua();$nhamayrauqua = new NhaMayRauQua(); $donggoirauqua = new DongGoiRauQua(); $banlerauqua = new BanLeRauQua();
$danhmucnongtrai = new DanhMucNongTrai();$danhmucnhamay = new DanhMucNhaMay();$danhmucbanle = new DanhMucBanLe();
$collect = '';
if(isset($_POST['submit'])){
	$collect = isset($_POST['collect']) ? $_POST['collect'] : '';
    if($collect == 'nongtrai'){
        $nongtrai->id_user = $id_user; $list = $nongtrai->get_list_by_user();
    }
    if($collect == 'nhamay'){
    	$nhamay->id_user = $id_user; $list = $nhamay->get_list_by_user();
    }
    if($collect == 'donggoi'){
    	$donggoi->id_user = $id_user; $list = $donggoi->get_list_by_user();
    }
    if($collect == 'banle'){
    	$banle->id_user = $id_user;$list = $banle->get_list_by_user();
    }

    if($collect == 'nongtraitrung'){
        $nongtraitrung->id_user = $id_user; $list = $nongtraitrung->get_list_by_user();
    }
    if($collect == 'donggoitrung'){
    	$donggoitrung->id_user = $id_user; $list = $donggoitrung->get_list_by_user();
    }
    if($collect == 'banletrung'){
    	$banletrung->id_user = $id_user;$list = $banletrung->get_list_by_user();
    }

    if($collect == 'nongtrairauqua'){
        $nongtrairauqua->id_user = $id_user; $list = $nongtrairauqua->get_list_by_user();
    }
    if($collect == 'nhamayrauqua'){
    	$nhamayrauqua->id_user = $id_user; $list = $nhamayrauqua->get_list_by_user();
    }
    if($collect == 'donggoirauqua'){
    	$donggoirauqua->id_user = $id_user; $list = $donggoirauqua->get_list_by_user();
    }
    if($collect == 'banlerauqua'){
    	$banlerauqua->id_user = $id_user;$list = $banlerauqua->get_list_by_user();
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
		$objPHPExcel->setActiveSheetIndex()->setCellValue('D'.$i, date("d/m/Y",$nt['ngaygioxuat']->sec));
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
		$objPHPExcel->setActiveSheetIndex()->setCellValue('F'.$i, date("d/m/Y", $nm['ngaygiogietmo']->sec));
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
		$objPHPExcel->setActiveSheetIndex()->setCellValue('G'.$i, date("d/m/Y",$dg['ngaygiodonggoi']->sec));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('H'.$i, isset($nt['CODE']) ? $nt['CODE'] : '');
		$objPHPExcel->setActiveSheetIndex()->setCellValue('I'.$i, $nt['soxevanchuyen']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('J'.$i, $dg['tieuchuan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('K'.$i, $dg['sochungnhantieuchuan']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('L'.$i, date("d/m/Y", $dg['ngaygiogietmo']->sec));
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
		$objPHPExcel->setActiveSheetIndex()->setCellValue('D'.$i, date("d/m/Y",$nt['ngaythuhoach']->sec));
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
		$objPHPExcel->setActiveSheetIndex()->setCellValue('F'.$i, date("d/m/Y",$dg['ngaydonggoi']->sec));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('G'.$i, $dg['solo']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('H'.$i, date("d/m/Y",$nt['ngaythuhoach']->sec));
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
		$objPHPExcel->setActiveSheetIndex()->setCellValue('D'.$i, date("d/m/Y",$nt['ngaythuhoach']->sec));
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
		$objPHPExcel->setActiveSheetIndex()->setCellValue('E'.$i, date("d/m/Y", $nm['ngaysoche']->sec));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('F'.$i, date("d/m/Y", $nt['ngaythuhoach']->sec));
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
		$objPHPExcel->setActiveSheetIndex()->setCellValue('E'.$i, date("d/m/Y",$dg['ngaydonggoi']->sec));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('F'.$i, $dg['hansudung']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('G'.$i, $dg['solo']);
		$objPHPExcel->setActiveSheetIndex()->setCellValue('H'.$i, date("d/m/Y",$nt['ngaythuhoach']->sec));
		$objPHPExcel->setActiveSheetIndex()->setCellValue('I'.$i, date("d/m/Y", $nm['ngaysoche']->sec));
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