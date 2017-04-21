<?php
function __autoload($class_name) {
    require_once('cls/class.' . strtolower($class_name) . '.php');
}
$session = new SessionManager();
$users = new Users();
require_once('inc/functions.inc.php');
require_once('inc/config.inc.php');
if(!$users->isLoggedIn()){ transfers_to('./login.html?url=' . $_SERVER['REQUEST_URI']); }
$id = isset($_GET['id']) ? $_GET['id'] : '';
$type = isset($_GET['type']) ? $_GET['type'] : '';
$q = isset($_GET['q']) ? $_GET['q'] : '';
if($id && $q=='trung'){
	if($type==4){
		$banle = new BanLeTrung(); $banle->id = $id; $bl = $banle->get_one();
		$donggoi = new DongGoiTrung(); $donggoi->id = $bl['id_donggoitrung']; $dg = $donggoi->get_one();
		$tensanpham = $dg['tensanpham']; $quicachdonggoi = $dg['quicachdonggoi'];
		$ngaydonggoi = date("d-m-Y", $dg['ngaydonggoi']->sec);
		$hansudung = $dg['hansudung'];
	} else if($type==3){
		$donggoi = new DongGoiTrung(); $donggoi->id = $id; $dg = $donggoi->get_one();
		$tensanpham = $dg['tensanpham']; $quicachdonggoi = $dg['quicachdonggoi'];
		$ngaydonggoi = date("d-m-Y", $dg['ngaydonggoi']->sec);
		$hansudung = $dg['hansudung'];
	}
} else if ($id && $q == 'rauqua'){
	if($type==4){
		$banle = new BanLeRauQua(); $banle->id = $id; $bl = $banle->get_one();
		$donggoi = new DongGoiRauQua(); $donggoi->id = $bl['id_donggoirauqua']; $dg = $donggoi->get_one();
		$tensanpham = $dg['tensanpham']; $quicachdonggoi = $dg['quicachdonggoi'];
		$ngaydonggoi = date("d-m-Y", $dg['ngaydonggoi']->sec);
		$hansudung = $dg['hansudung'];
	} else if($type==3){
		$donggoi = new DongGoiRauQua(); $donggoi->id = $id; $dg = $donggoi->get_one();
		$tensanpham = $dg['tensanpham']; $quicachdonggoi = $dg['quicachdonggoi'];
		$ngaydonggoi = date("d-m-Y", $dg['ngaydonggoi']->sec);
		$hansudung = $dg['hansudung'];
	}

} else if($id && $q=='gietmo') {
	if($type==4){
		$banle = new BanLe();$banle->id = $id; $bl = $banle->get_one();
		$donggoi = new DongGoi(); $donggoi->id = $bl['id_donggoi']; $dg = $donggoi->get_one();
		$tensanpham = $dg['tensanpham'];
		$quicachdonggoi = $dg['quicachdonggoi'];
		$ngaydonggoi = date("d-m-Y", $dg['ngaygiodonggoi']->sec);
		$hansudung = $dg['hansudung'];	
	} else if($type==3){
		$donggoi = new DongGoi(); $donggoi->id = $id; $dg = $donggoi->get_one();
		$tensanpham = $dg['tensanpham'];
		$quicachdonggoi = $dg['quicachdonggoi'];
		$ngaydonggoi = date("d-m-Y", $dg['ngaygiodonggoi']->sec);
		$hansudung = $dg['hansudung'];	
	}
} else {
	$tensanpham = ''; $quicachdonggoi = ''; $ngaydonggoi = ''; $hansudung = '';
}

?>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<head>
	<meta charset="utf-8" />
	<title>Anova Farm</title>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
    <meta content="Hệ thống quản lý truy xuất nguồn gốc trang trại ANOVA FARM" />
    <meta content="Hệ thống quản lý truy xuất nguồn gốc trang trại ANOVA FARM" />
	<!-- ================== BEGIN BASE CSS STYLE ================== -->
	<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
	<link href="assets/plugins/jquery-ui/themes/base/minified/jquery-ui.min.css" rel="stylesheet" />
	<link href="assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
	<link href="assets/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
	<link href="assets/css/style.min.css" rel="stylesheet" />    
	<link rel="stylesheet" type="text/css" href="assets/css/custom.css">
</head>
<body style="background:#fff;">
<?php
//set it to writable location, a place for temp generated PNG files
$PNG_TEMP_DIR = dirname(__FILE__).DIRECTORY_SEPARATOR.'inc/qrcode/temp'.DIRECTORY_SEPARATOR;
//html PNG location prefix
$PNG_WEB_DIR = 'inc/qrcode/temp/';
include "inc/qrcode/qrlib.php";    
//ofcourse we need rights to create temp dir
if (!file_exists($PNG_TEMP_DIR)) mkdir($PNG_TEMP_DIR);
$filename = $PNG_TEMP_DIR.'test.png';
$matrixPointSize = 10; //1-10
$errorCorrectionLevel = 'L'; //L,M,Q,H
//$data = 'http://traceweb.org/?id='.$id.'&type=' . $type;
$data = $link_frontend . '/?id='.$id.'&type=' . $type . '&q='.$q;
// user data
$filename = $PNG_TEMP_DIR . '_' . $id .'_'.$type. '_' .date("YmdhHis") . '.png';
QRcode::png($data, $filename, $errorCorrectionLevel, $matrixPointSize, 2);    
//display generated file
echo '<div class="qrcode_area" id="qrcode">';
	echo '<img src="'.$PNG_WEB_DIR.basename($filename).'" class="qrcode_img" />';  
	echo '<div class="title_qrcode"><span>'.$tensanpham.'</span></div>';
	echo '<div class="content_qrcode">
		<p>Quy cách: '.$quicachdonggoi.'</p>
		<p>Ngày đóng gói: '.$ngaydonggoi.'</p>
		<p>Hạn sử dụng: '.$hansudung.'</p>
	</div>';
	echo '<div class="title_qrcode_1">CTY CP CO-OP  NOVA SAFE FOODS</div>';
echo '</div>';
//echo '<div class="title_qrcode">'. $data . '</div>';
                   
?>
</body>
</html>
<!-- end #footer -->	
<!-- ================== BEGIN BASE JS ================== -->
<script src="assets/plugins/jquery/jquery-1.9.1.min.js"></script>
<script src="assets/plugins/jquery/jquery-migrate-1.1.0.min.js"></script>
<script src="assets/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
<script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
<!--[if lt IE 9]>
	<script src="assets/crossbrowserjs/html5shiv.js"></script>
	<script src="assets/crossbrowserjs/respond.min.js"></script>
	<script src="assets/crossbrowserjs/excanvas.min.js"></script>
<![endif]-->
<script src="assets/plugins/slimscroll/jquery.slimscroll.min.js"></script>
<script src="assets/plugins/jquery-cookie/jquery.cookie.js"></script>
<!-- ================== END BASE JS ================== -->
<!--[if lt IE 9]>
	<script src="assets/crossbrowserjs/html5shiv.js"></script>
	<script src="assets/crossbrowserjs/respond.min.js"></script>
	<script src="assets/crossbrowserjs/excanvas.min.js"></script>
<![endif]-->
<script src="../assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
    	//window.print();
        App.init();
    });
</script>