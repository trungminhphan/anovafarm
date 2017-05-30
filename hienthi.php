<?php
require_once('header.php');
$hienthi = new HienThi();$gridfs = new GridFS();
$hienthi_list = $hienthi->get_all_list();
/*foreach($arr_giaidoan as $key => $value){
	$hienthi->giaidoan = $key;
	$hienthi->tengiaidoan = $value;
	$hienthi->title = 'THÔNG TIN NGUỒN GỐC SẢN PHẨM';
	$hienthi->hinhanh = '';
	$hienthi->insert();
}*/
$hinhanh = '';
if(isset($_POST['submit'])){
	foreach($hienthi_list as $key => $value){
		$id = isset($_POST['id_'.$value['giaidoan']]) ? $_POST['id_'.$value['giaidoan']] : '';
		$giaidoan = isset($_POST[$value['giaidoan']]) ? $_POST[$value['giaidoan']] : '';
		$tengiaidoan = isset($_POST['tengiaidoan_'.$value['giaidoan']]) ? $_POST['tengiaidoan_'.$value['giaidoan']] : '';
		$title = isset($_POST['title_'.$value['giaidoan']]) ? $_POST['title_'.$value['giaidoan']] : '';
		$hienthi->id = $id;
		$hienthi->giaidoan = $giaidoan;
		$hienthi->tengiaidoan = $tengiaidoan;
		$hienthi->title = $title;
		$hinhanh_file = strtolower($_FILES["hinhanh_".$value['giaidoan']]["name"]);
	    $hinhanh_size = $_FILES["hinhanh_".$value['giaidoan']]["size"];
	    $hinhanh_type = $_FILES["hinhanh_".$value['giaidoan']]["type"];
	    $hinhanh_tmp = $_FILES['hinhanh_'.$value['giaidoan']]['tmp_name'];
	    $old_hinhanh = isset($_POST['old_hinhanh_'.$value['giaidoan']]) ? $_POST['old_hinhanh_'.$value['giaidoan']] : '';
	    $temp = explode(".", $hinhanh_file);
	    if($hinhanh_file){
	        $ext = end($temp);
	        if($hinhanh_size < $max_file_size && in_array($ext, $images_extension)){
	            $gridfs->filename = $hinhanh_file;
	            $gridfs->filetype = $hinhanh_type;
	            $gridfs->tmpfilepath = $hinhanh_tmp;
	            $gridfs->caption = $hinhanh_file;
	        } else {
	            $msg = 'Dung lượng hình ảnh quá lớn hoặc không đúng định dạng';
	        }
	    } else {
	        $hinhanh = $old_hinhanh;
	    }
	    if($old_hinhanh && $hinhanh_file){
            $gridfs->id = $old_hinhanh; $gridfs->delete();
        }
	    if($hinhanh_file) $hinhanh = $gridfs->insert_files();
	    $hienthi->hinhanh = $hinhanh;
	    $hienthi->edit();
	}
}
?>
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload-ui.css" rel="stylesheet" />
<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="POST" class="form-horizontal" data-parsley-validate="true" name="hienthiform" enctype="multipart/form-data">
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
            	<div class="form-group">
            		<label class="col-md-3 control-label text-center">TÊN GIAI ĐOẠN</label>
            		<label class="col-md-5 control-label text-center">NỘI DUNG</label>
            		<label class="col-md-4 control-label text-center">LOGO</label>
            	</div>
            <?php $i=1; foreach($hienthi_list as $ht) :?>
            	<div class="form-group">
            		<div class="col-md-3">
            			<input type="hidden" name="id_<?php echo $ht['giaidoan'];?>" id="id_<?php echo $ht['giaidoan']; ?>" value="<?php echo $ht['_id']; ?>" class="form-control" data-parsley-required="true"/>
            			<input type="hidden" name="<?php echo $ht['giaidoan'];?>" id="<?php echo $ht['giaidoan']; ?>" value="<?php echo $ht['giaidoan']; ?>" class="form-control" data-parsley-required="true"/>
            			<div class="input-group">
            				<span class="input-group-addon"><?php echo $i; ?></span>
            				<input type="text" name="tengiaidoan_<?php echo $ht['giaidoan'];?>" id="tengiaidoan_<?php echo $ht['giaidoan']; ?>" value="<?php echo $ht['tengiaidoan']; ?>" class="form-control" data-parsley-required="true"/>
            			</div>
            		</div>
            		<div class="col-md-5">
            			<input type="text" name="title_<?php echo $ht['giaidoan'];?>" id="title_<?php echo $ht['giaidoan'];?>" value="<?php echo $ht['title']; ?>" class="form-control" data-parsley-required="true"/>
            		</div>
            		<div class="col-md-2">
                        <span class="btn btn-success fileinput-button">
                            <i class="fa fa-plus"></i>
                            <span>Chọn hình ảnh...</span>
                            <input type="file" name="hinhanh_<?php echo $ht['giaidoan']; ?>" id="hinhanh_<?php echo $ht['giaidoan']; ?>" accept="*/image">
                        </span>
                    </div>
                    <div class="col-md-2">
                    	<input type="hidden" name="old_hinhanh_<?php echo $ht['giaidoan']; ?>" id="old_hinhanh_<?php echo $ht['giaidoan']; ?>" value="<?php echo $ht['hinhanh'] ? $ht['hinhanh'] : ''; ?>"/>
                    	<?php
                    	if($ht['hinhanh']){
                    		//$gridfs->id = $ht['hinhanh']; $object = $gridfs->get_one_file();
                    		echo '<img src="image.html?id='.$ht['hinhanh'].'" height="30"/>';
                    	}
                    	?>
                    </div>
            	</div>
            <?php $i++; endforeach; ?>
            </div>
            <div class="panel-footer text-center">
            	<button name="submit" id="submit" value="OK" class="btn btn-primary"><i class="fa fa-check-circle-o"></i> Cập nhật</button>
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