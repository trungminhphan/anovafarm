<?php
function __autoload($class_name) {
    require_once('../cls/class.' . strtolower($class_name) . '.php');
}
$session = new SessionManager();
$users = new Users();
require_once('../inc/functions.inc.php');
require_once('../inc/config.inc.php');
if(!$users->isLoggedIn()){ transfers_to('../login.html?url=' . $_SERVER['REQUEST_URI']); }
//$user_default = $users->get_one_default();
$id_user = $users->get_userid();
$id_congty = $users->get_id_congty();
$user_default = $users->get_one_default();
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
    <link href="../assets/plugins/ionicons/css/ionicons.min.css" rel="stylesheet" />
	<!-- ================== BEGIN BASE JS ================== -->
	<script src="../assets/plugins/pace/pace.min.js"></script>
	<!-- ================== END BASE JS ================== -->
</head>
<body>
	<!-- begin #page-loader -->
	<div id="page-loader" class="fade in"><span class="spinner"></span></div>
	<!-- end #page-loader -->
	<!-- begin #page-container -->
	<div id="page-container" class="page-container fade page-without-sidebar page-header-fixed page-with-top-menu">
		<!-- begin #header -->
		<div id="header" class="header navbar navbar-default navbar-fixed-top">
			<!-- begin container-fluid -->
			<div class="container-fluid">
				<!-- begin mobile sidebar expand / collapse button -->
				<div class="navbar-header">
					<a href="index.html" class="navbar-brand">
					<?php
					if(isset($user_default['hinhanh']) && $user_default['hinhanh']){
						echo '<img src="image.html?id='.$user_default['hinhanh'].'" height="30px;" align="left">';
					} else {
						echo '<img src="../images/default_logo.png" alt="" height="30" align="left"/>';
					}
					?>&nbsp;&nbsp;&nbsp;NOVA SAFE FOODS
					</a>
					<button type="button" class="navbar-toggle" data-click="top-menu-toggled">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>
				<!-- end mobile sidebar expand / collapse button -->
				<!-- begin header navigation right -->
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown navbar-user">
						<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
							<i class="fa fa-user"></i> 
							<span class="hidden-xs">
								<?php echo $user_default['person']; ?>
							</span> <b class="caret"></b>
						</a>
						<ul class="dropdown-menu animated fadeInLeft">
							<li class="arrow"></li>
							<li><a href="../change_password.html"><span class="fa fa-key"></span> Thay đổi mật khẩu</a></li>
                            <?php if($users->is_admin()) : ?>
                            <li class="arrow"></li>
                            <li><a href="../users.html"><span class="fa fa-users"></span> Danh sách tài khoản</a></li>
                            <?php endif; ?>
							<li class="divider"></li>
							<li><a href="../logout.html"><span class="fa fa-sign-out"></span> Đăng xuất</a></li>
						</ul>
					</li>
				</ul>
				<!-- end header navigation right -->
			</div>
			<!-- end container-fluid -->
		</div>
		<!-- end #header -->
		<!-- begin #top-menu -->
		<div id="top-menu" class="top-menu">
            <!-- begin top-menu nav -->
            <ul class="nav">
            	<li>
                    <a href="../">
                        <i class="fa fa-laptop"></i>
                        <span>DASHBOARD</span>
                    </a>
                </li>
                <li>
                    <a href="index.html">
                        <i class="ion-leaf"></i>
                        <span>QUẢN LÝ RAU QUẢ</span>
                    </a>
                </li>
                <?php if($users->is_admin() || $users->is_factory() || $users->is_farmer()): ?>
                <li>
                    <a href="nongtrai.html">
                        <i class="fa fa-th"></i>
                        <span>NÔNG TRẠI</span>
                    </a>
                </li>
                <?php endif; ?>
                <?php if($users->is_admin() || $users->is_factory() || $users->is_packer()): ?>
                <li>
                    <a href="nhamay.html">
                        <i class="fa fa-gears "></i> 
                        <span>SƠ CHẾ</span>
                    </a>
                </li>
            	<?php endif; ?>
            	<?php if($users->is_admin() || $users->is_retail() || $users->is_packer()): ?>
                <li>
                    <a href="donggoi.html">
                        <i class="fa fa-dropbox "></i> 
                        <span>ĐÓNG GÓI</span>
                    </a>
                </li>
                <?php endif; ?>
                <?php if($users->is_admin() || $users->is_retail()): ?>
                <li>
                    <a href="banle.html">
                        <i class="fa fa-shopping-cart"></i>
                        <span>BÁN LẺ</span>
                    </a>
                </li>
                <?php endif; ?>
                
                <li class="menu-control menu-control-right">
                    <a href="#" data-click="next-menu"><i class="fa fa-angle-right"></i></a>
                </li>
            </ul>
            <!-- end top-menu nav -->
		</div>
		<!-- end #top-menu -->
		<!-- begin #content -->
		<div id="content" class="content">
		<h1 class="page-header"><i class="ion-leaf text-primary"></i> QUẢN LÝ RAU QUẢ</h1>