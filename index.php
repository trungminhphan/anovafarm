<?php
require_once('header.php');
$msg = isset($_GET['msg']) ? $_GET['msg'] : '';
$id_congty =  $users->get_id_congty();
?>
<link href="assets/plugins/gritter/css/jquery.gritter.css" rel="stylesheet" />
<!-- begin page-header -->
<h1 class="page-header">ANOVA FARM - CHỌN CHỨC NĂNG QUẢN LÝ HỆ THỐNG</h1>
<div class="row">
    <div class="col-md-4 col-sm-6">
        <div class="widget widget-stats bg-green">
            <div class="stats-icon"><i class="ion-egg"></i></div>
            <div class="stats-info">
                <h4>QUẢN LÝ</h4>
                <p>SẢN XUẤT TRỨNG</p>    
            </div>
            <div class="stats-link">
                <a href="trung/">Quản lý <i class="fa fa-arrow-circle-o-right"></i></a>
            </div>
        </div>
    </div>
    <div class="col-md-4 col-sm-6">
        <div class="widget widget-stats bg-blue">
            <div class="stats-icon"><i class="ion-leaf"></i></div>
            <div class="stats-info">
                <h4>QUẢN LÝ</h4>
                <p>SẢN XUẤT RAU QUẢ</p>   
            </div>
            <div class="stats-link">
                <a href="rauqua/">Quản lý <i class="fa fa-arrow-circle-o-right"></i></a>
            </div>
        </div>
    </div>
    <div class="col-md-4 col-sm-6">
        <div class="widget widget-stats bg-purple">
            <div class="stats-icon"><i class="fa fa-gears"></i></div>
            <div class="stats-info">
                <h4>QUẢN LÝ</h4>
                <p>QUI TRÌNH GIẾT MỔ</p>    
            </div>
            <div class="stats-link">
                <a href="gietmo/">Quản lý <i class="fa fa-arrow-circle-o-right"></i></a>
            </div>
        </div>
    </div>
    
</div>
<div style="clear:both;"></div>
<?php require_once('footer.php'); ?>
<!-- ================== BEGIN PAGE LEVEL JS ================== -->
<script src="assets/plugins/gritter/js/jquery.gritter.js"></script>
<script src="assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
        App.init();
    });
</script>