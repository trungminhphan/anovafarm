<?php
require_once('header.php');
check_permis($users->is_admin());
?>
<link href="assets/plugins/select2/dist/css/select2.min.css" rel="stylesheet" />
<h1 class="page-header"><i class="fa fa-file-excel-o"></i> XUẤT DỮ LIỆU</h1>
<form action="xuatdulieu_export.html" method="POST">
<div class="form-group">
	<label class="col-md-3 control-label text-right p-t-5">CHỌN GIAI ĐOẠN CẦN XUẤT</label>
    <div class="col-md-4">
     	<select name="collect" id="collect" class="select2" style="width:100%;">
     	<?php
     	foreach($arr_giaidoan as $key => $value){
     		echo '<option value="'.$key.'" '.($collect == $key ? 'selected' : '').'>'.$value.'</option>';
     	}
     	?>
     	</select>
    </div>
    <button type="submit" name="submit" id="submit" class="btn btn-primary" value="OK"><i class="fa fa-file-excel-o"></i> Xuất dữ liệu</button>
</div>
</form>
<div style="clear:both;"></div>
<?php require_once('footer.php'); ?>
<!-- ================== BEGIN PAGE LEVEL JS ================== -->
<script src="assets/plugins/gritter/js/jquery.gritter.js"></script>
<script src="assets/plugins/select2/dist/js/select2.min.js"></script>
<script src="assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
    	$(".select2").select2();App.init();
    });
</script>