<?php require_once('header.php');
$msg = isset($_GET['msg']) ? $_GET['msg'] : '';
?>
<link href="../assets/plugins/gritter/css/jquery.gritter.css" rel="stylesheet" />
<!-- begin page-header -->
<div class="row">
    <?php if($users->is_admin() || $users->is_farmer()): ?>
    <div class="col-md-3 col-sm-6">
        <div class="widget widget-stats bg-green">
            <div class="stats-icon"><i class="fa fa-th"></i></div>
            <div class="stats-info">
                <h4>QUẢN LÝ</h4>
                <p>NÔNG TRẠI</p>    
            </div>
            <div class="stats-link">
                <a href="nongtrai.html">Quản lý <i class="fa fa-arrow-circle-o-right"></i></a>
            </div>
        </div>
    </div>
    <?php endif; ?>
    <?php if($users->is_admin() || $users->is_factory()): ?>
    <div class="col-md-3 col-sm-6">
        <div class="widget widget-stats bg-blue">
            <div class="stats-icon"><i class="fa fa-gears"></i></div>
            <div class="stats-info">
                <h4>QUẢN LÝ</h4>
                <p>NHÀ MÁY GIẾT MỔ</p>   
            </div>
            <div class="stats-link">
                <a href="nhamay.html">Quản lý <i class="fa fa-arrow-circle-o-right"></i></a>
            </div>
        </div>
    </div>
    <?php endif; ?>
    <?php if($users->is_admin() || $users->is_packer()): ?>
    <div class="col-md-3 col-sm-6">
        <div class="widget widget-stats bg-red">
            <div class="stats-icon"><i class="fa fa-dropbox"></i></div>
            <div class="stats-info">
                <h4>QUẢN LÝ</h4>
                <p>ĐÓNG GÓI SẢN PHẨM</p>   
            </div>
            <div class="stats-link">
                <a href="donggoi.html">Quản lý <i class="fa fa-arrow-circle-o-right"></i></a>
            </div>
        </div>
    </div>
    <?php endif; ?>
    <?php if($users->is_admin() || $users->is_retail()): ?>
    <div class="col-md-3 col-sm-6">
        <div class="widget widget-stats bg-purple">
            <div class="stats-icon"><i class="fa fa-shopping-cart"></i></div>
            <div class="stats-info">
                <h4>QUẢN LÝ</h4>
                <p>NƠI BÁN LẺ</p>    
            </div>
            <div class="stats-link">
                <a href="banle.html">Quản lý <i class="fa fa-arrow-circle-o-right"></i></a>
            </div>
        </div>
    </div>
    <?php endif; ?>
</div>
<div style="clear:both;"></div>
<?php require_once('footer.php'); ?>
<!-- ================== BEGIN PAGE LEVEL JS ================== -->
<script src="../assets/plugins/gritter/js/jquery.gritter.js"></script>
<script src="../assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
        App.init();
    });
</script>