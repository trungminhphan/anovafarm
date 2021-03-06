<?php
require_once "../vendor/autoload.php";
use \Models\HienThi;
use \Models\NongTrai;
use \Models\NhaMay;
use \Models\DongGoi;
use \Models\BanLe;
use \Models\NongTraiTrung;
use \Models\DongGoiTrung;
use \Models\BanLeTrung;
use \Models\NongTraiRauQua;
use \Models\NhaMayRauQua;
use \Models\DongGoiRauQua;
use \Models\BanLeRauQua;
use \Models\DanhMucNongTrai;
use \Models\DanhMucNhaMay;
use \Models\DanhMucBanLe;
use \Models\DBConnect;

require_once('../inc/functions.inc.php');
require_once('../inc/config.inc.php');
$id = isset($_GET['id']) ? $_GET['id'] : '';
$type = isset($_GET['type']) ? $_GET['type'] : '';
$q = isset($_GET['q']) ? $_GET['q'] : '';
$hienthi = new HienThi();
?>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<head>
	<meta charset="utf-8" />
	<title>Nova Safe Foods</title>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
    <meta content="Hệ thống quản lý truy xuất nguồn gốc trang trại Nova Safe Foods" />
    <meta content="Hệ thống quản lý truy xuất nguồn gốc trang trại Nova Safe Foods" />
	<!-- ================== BEGIN BASE CSS STYLE ================== -->
	<!--<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">-->
	<link href="../assets/plugins/jquery-ui/themes/base/minified/jquery-ui.min.css" rel="stylesheet" />
	<link href="../assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
	<link href="../assets/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
	<link href="../assets/css/animate.min.css" rel="stylesheet" />
	<link href="../assets/css/style.min.css" rel="stylesheet" />
	<link href="../assets/css/style-responsive.min.css" rel="stylesheet" />
	<link href="../assets/css/theme/blue.css" rel="stylesheet" id="theme" />
	<!-- ================== END BASE CSS STYLE ================== -->
</head>
<body>
<!-- begin #page-loader -->
<div id="page-container" class="page-container fade page-without-sidebar p-20">
	<?php
	if($q== 'rauqua' || $q=='trung' || $q=='gietmo'){
		if($type==4){
			//echo '<h4 class="text-center">GIAI ĐOẠN BÁN LẺ</h4>';
			if($q == 'gietmo') $ht = $hienthi->get_one_condition(array('giaidoan' => 'banle'));
			else $ht = $hienthi->get_one_condition(array('giaidoan' => 'banle'.$q));
			echo '<div class="row">
				<div class="col-md-12 text-center">
					<img src="../images/logocoopnova.png" height="100px"/>
				</div>
			</div>';
			echo '<h1 class="page-header text-center">'.$ht['title'].'</h1>';
			require_once('banle_'.$q.'.php');
		} else if($type == 3){
			//echo '<h4 class="text-center">GIAI ĐOẠN ĐÓNG GÓI</h4>';
			if($q == 'gietmo') $ht = $hienthi->get_one_condition(array('giaidoan' => 'donggoi'));
			else $ht = $hienthi->get_one_condition(array('giaidoan' => 'donggoi'.$q));
			echo '<div class="row">
				<div class="col-md-12 text-center">
					<img src="../images/logocoopnova.png" height="100px"/>
				</div>
			</div>';
			echo '<h1 class="page-header text-center">'.$ht['title'].'</h1>';
			echo '<h4 class="text-center">'.$ht['tengiaidoan'].'</h4>';
			require_once('donggoi_'.$q.'.php');
		} else if($type==2){
			if($q == 'gietmo') $ht = $hienthi->get_one_condition(array('giaidoan' => 'nhamay'));
			else $ht = $hienthi->get_one_condition(array('giaidoan' => 'nhamay'.$q));
			echo '<div class="row">
				<div class="col-md-12 text-center">
					<img src="../images/logocoopnova.png" height="100px"/>
				</div>
			</div>';
			echo '<h1 class="page-header text-center">'.$ht['title'].'</h1>';
			echo '<h4 class="text-center">'.$ht['tengiaidoan'].'</h4>';
			//if($q == 'rauqua') echo '<h4 class="text-center">GIAI ĐOẠN SƠ CHẾ</h4>';
			//else echo '<h4 class="text-center">GIAI ĐOẠN GIẾT MỔ</h4>';
			require_once('nhamay_'.$q.'.php');
		} else if($type==1){
			if($q == 'gietmo') $ht = $hienthi->get_one_condition(array('giaidoan' => 'nongtrai'));
			else $ht = $hienthi->get_one_condition(array('giaidoan' => 'nongtrai'.$q));
			echo '<div class="row">
				<div class="col-md-12 text-center">
					<img src="../images/logocoopnova.png" height="100px"/>
				</div>
			</div>';
			echo '<h1 class="page-header text-center">'.$ht['title'].'</h1>';
			echo '<h4 class="text-center">'.$ht['tengiaidoan'].'</h4>';
			require_once('nongtrai_'.$q.'.php');
		} else {
			echo '<h3 class="text-center">Xin lỗi! Sản phẩm không tồn tại</h3>';
		}
	} else {
		echo '<h3 class="text-center">Xin lỗi! Sản phẩm không tồn tại</h3>';
	}
	?>
</div>

<!-- end page container -->
<!-- begin #footer -->
	<div class="row p-10">
		<div class="col-md-3"></div>
		<div class="col-md-6 text-center">&copy; 2017 Bản quyền bởi JAYBranding</div>
		<!--<div class="col-md-3 text-center">Giải pháp bởi: <a href="http://JAYbranding.com" target="_blank">JAYbranding.com</a></div>-->
		<div class="col-md-3"></div>
	</div>

<!-- end #footer -->
<!-- ================== BEGIN BASE JS ================== -->
<script src="../assets/plugins/jquery/jquery-1.9.1.min.js"></script>
<script src="../assets/plugins/jquery/jquery-migrate-1.1.0.min.js"></script>
<script src="../assets/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
<script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
<!--[if lt IE 9]>
	<script src="../assets/crossbrowserjs/html5shiv.js"></script>
	<script src="../assets/crossbrowserjs/respond.min.js"></script>
	<script src="../assets/crossbrowserjs/excanvas.min.js"></script>
<![endif]-->
<script src="../assets/plugins/slimscroll/jquery.slimscroll.min.js"></script>
<script src="../assets/plugins/jquery-cookie/jquery.cookie.js"></script>
<!-- ================== END BASE JS ================== -->
<!-- ================== BEGIN PAGE LEVEL JS ================== -->
<script src="../assets/plugins/gritter/js/jquery.gritter.js"></script>
<script src="../assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
        App.init();
    });
</script>
</body>
</html>
