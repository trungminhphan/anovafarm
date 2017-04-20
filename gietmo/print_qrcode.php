<?php
function __autoload($class_name) {
    require_once('../cls/class.' . strtolower($class_name) . '.php');
}
$session = new SessionManager();
$users = new Users();
require_once('../inc/functions.inc.php');
require_once('../inc/config.inc.php');
if(!$users->isLoggedIn()){ transfers_to('./login.html?url=' . $_SERVER['REQUEST_URI']); }
$id = isset($_GET['id']) ? $_GET['id'] : '';
$type = isset($_GET['type']) ? $_GET['type'] : '';
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
	<link href="../assets/plugins/jquery-ui/themes/base/minified/jquery-ui.min.css" rel="stylesheet" />
	<link href="../assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
	<link href="../assets/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
	<link href="../assets/css/style.min.css" rel="stylesheet" />    
	<link rel="stylesheet" type="text/css" href="../assets/css/custom.css">
</head>
<body>
<?php
//set it to writable location, a place for temp generated PNG files
$PNG_TEMP_DIR = dirname(__FILE__).DIRECTORY_SEPARATOR.'../inc/qrcode/temp'.DIRECTORY_SEPARATOR;
//html PNG location prefix
$PNG_WEB_DIR = '../inc/qrcode/temp/';
include "../inc/qrcode/qrlib.php";    
//ofcourse we need rights to create temp dir
if (!file_exists($PNG_TEMP_DIR)) mkdir($PNG_TEMP_DIR);
$filename = $PNG_TEMP_DIR.'test.png';
$matrixPointSize = 10; //1-10
$errorCorrectionLevel = 'L'; //L,M,Q,H
//$data = 'http://traceweb.org/?id='.$id.'&type=' . $type;
$data = $link_frontend . '/?id='.$id.'&type=' . $type . '&q=gietmo';
// user data
$filename = $PNG_TEMP_DIR . '_' . $id .'_'.$type. '_' .date("YmdhHis") . '.png';
QRcode::png($data, $filename, $errorCorrectionLevel, $matrixPointSize, 2);    
//display generated file
echo '<div class="qrcode_area" id="qrcode">';
	echo '<img src="'.$PNG_WEB_DIR.basename($filename).'" class="qrcode_img" />';  
	echo '<div class="title_qrcode">RAU MUỐN</div>';
	echo '<div class="content_qrcode">
		<p>Quy cách: 500g</p>
		<p>Ngày đóng gói: 18-04-2017</p>
		<p>Hạn sử dụng: 2 ngày từ ngày đóng gói</p>
	</div>';
	echo '<div class="title_qrcode_1">CTY CP CO-OP  NOVA SAFE FOODS</div>';
echo '</div>';
//echo '<div class="title_qrcode">'. $data . '</div>';
                   
?>
<div id="editor"></div>
<button id="cmd">generate PDF</button>

</body>
</html>
<!-- end #footer -->	
<!-- ================== BEGIN BASE JS ================== -->
<script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="../assets/js/jspdf.debug.js"></script>
<!--[if lt IE 9]>
	<script src="assets/crossbrowserjs/html5shiv.js"></script>
	<script src="assets/crossbrowserjs/respond.min.js"></script>
	<script src="assets/crossbrowserjs/excanvas.min.js"></script>
<![endif]-->


<script src="../assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
    	var doc = new jsPDF();
		var specialElementHandlers = {
		    '#editor': function (element, renderer) {
		        return true;
		    }
		};

		$('#cmd').click(function () {
		    doc.fromHTML($('#qrcode').html(), 15, 15, {
		        'width': 170,
		            'elementHandlers': specialElementHandlers
		    });
		    doc.save('sample-file.pdf');
		});
        App.init();
    });
</script>