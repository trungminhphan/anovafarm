<?php
require_once('header.php');
use \Models\GridFS;
use \Models\Config;
$gridfs = new GridFS();
$config = new Config(); $ht = $config->get_one();
if(isset($_POST['submit'])){
	$title = isset($_POST['title']) ? $_POST['title'] : '';
	$text = isset($_POST['text']) ? $_POST['text'] : '';
	$hinhanh_file = isset($_FILES["hinhanh"]["name"]) ? strtolower($_FILES["hinhanh"]["name"]) : '';
    $hinhanh_size = isset($_FILES["hinhanh"]["size"]) ? $_FILES["hinhanh"]["size"] : '';
    $hinhanh_type = isset($_FILES["hinhanh"]["type"]) ? $_FILES["hinhanh"]["type"] : '';
    $hinhanh_tmp = isset($_FILES['hinhanh']['tmp_name']) ? $_FILES['hinhanh']['tmp_name'] : '';
    $old_hinhanh = isset($_POST['old_hinhanh']) ? $_POST['old_hinhanh'] : '';
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
    $config->title = $title;
    $config->text = $text;
    if($hinhanh_file) $hinhanh = $gridfs->insert_files();
    if($old_hinhanh && $hinhanh_file){
        $gridfs->id = $old_hinhanh; $gridfs->delete();
    }
    $config->image = $hinhanh;
    if($config->edit()) transfers_to('config.html?msg=Chỉnh sửa thành công');
}
?>
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload-ui.css" rel="stylesheet" />
<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="POST" class="form-horizontal" data-parsley-validate="true" name="hienthiform" enctype="multipart/form-data">
<h1 class="page-header"><i class="fa fa-cog"></i> CẤU HÌNH GIAO DIỆN ĐĂNG NHẬP</h1>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-list"></i> GIAO DIỆN ĐĂNG NHẬP</h4>
            </div>
            <div class="panel-body">
            	<div class="form-group">
            		<div class="col-md-4">
            			<input type="text" name="title" id="title" value="<?php echo $ht['title']; ?>" class="form-control" data-parsley-required="true" placeholder="ANOVA FARM" />
            		</div>
            		<div class="col-md-4">
            			<input type="text" name="text" id="text" value="<?php echo $ht['text']; ?>" class="form-control" data-parsley-required="true" placeholder="ANOVA FARM" />
            		</div>
            		<div class="col-md-2">
                        <span class="btn btn-success fileinput-button">
                            <i class="fa fa-plus"></i>
                            <span>Chọn hình ảnh...</span>
                            <input type="file" name="hinhanh" id="hinhanh" accept="*/image">
                        </span>
                    </div>
                    <div class="col-md-2">
                    	<input type="hidden" name="old_hinhanh" id="old_hinhanh" value="<?php echo isset($ht['image']) ? $ht['image'] : ''; ?>"/>
                    	<?php
                    	if(isset($ht['image']) && $ht['image']){
                    		//$gridfs->id = $ht['hinhanh']; $object = $gridfs->get_one_file();
                    		echo '<img src="image.html?id='.$ht['image'].'" height="30"/>';
                    	}
                    	?>
                    </div>
            	</div>
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
