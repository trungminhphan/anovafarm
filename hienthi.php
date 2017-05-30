<?php
require_once('header.php');
$hienthi = new HienThi();
$hienthi_list = $hienthi->get_all_list();
/*foreach($arr_giaidoan as $key => $value){
	$hienthi->giaidoan = $key;
	$hienthi->tengiaidoan = $value;
	$hienthi->title = 'THÔNG TIN NGUỒN GỐC SẢN PHẨM';
	$hienthi->hinhanh = '';
	$hienthi->insert();
}*/
?>
<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="POST" class="form-horizontal" data-parsley-validate="true" name="hienthiform">
<h1 class="page-header"><i class="fa fa-qrcode"></i> CẤU HÌNH HIỂN THỊ TRA CỨU CHO CÁC GIAI ĐOẠN</h1>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-list"></i> DANH MỤC CÁC GIAI ĐOẠN HIỂN THỊ</h4>
            </div>
            <div class="panel-body">
            <?php foreach($hienthi_list as $ht) :?>
            	<div class="form-group">
            		<div class="col-md-3">
            			<input type="text" name="ten" id="ten" value="" class="form-control" data-parsley-required="true"/>
            		</div>
            		<div class="col-md-6">
            			<input type="text" name="ten" id="ten" value="" class="form-control" data-parsley-required="true"/>
            		</div>
            		<div class="col-md-3">
            			<input type="text" name="ten" id="ten" value="" class="form-control" data-parsley-required="true"/>
            		</div>
            	</div>
            <?php endforeach; ?>
            </div>
        </div>
    </div>
</div>
</form>
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