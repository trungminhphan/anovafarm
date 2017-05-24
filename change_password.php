<?php
require_once('header.php');
$sum_roles = 0; $roles = 0; $password = '';
if(isset($_POST['submit'])){
	$id = $users->get_userid();
	$password = isset($_POST['password']) ? $_POST['password'] : '';
	$repassword = isset($_POST['repassword']) ? $_POST['repassword'] : '';
	if($password === $repassword){
		$users->id = $id;
		//$users->username = $username;
		$users->password = $password;
		//$users->roles = $sum_roles;
		//$users->person = $person;
		if($id == $users->get_userid()){
			$users->change_password();
            $msg = 'Thay đổi mật khẩu thành công';
		} else {
			$msg= 'Bạn không có quyền thay đổi mật khẩu, vui lòng liên hệ quản trị.';
		}
	} else {
		$msg = 'Mật khẩu không trùng';
	}
}

if($users->get_userid()){
	$users->id = $users->get_userid();
	$edit_user = $users->get_one();
	$id = $edit_user['_id'];
	$username = $edit_user['username'];
	$password = '';
}
?>
<link href="assets/plugins/gritter/css/jquery.gritter.css" rel="stylesheet" />
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" id="adduserform" class="form-horizontal" data-parsley-validate="true">
<div class="row">
    <div class="col-md-12">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-search"></i> Thông tin tài khoản người dùng</h4>
            </div>
            <div class="panel-body">
            	<div class="form-group">
            		<label class="col-md-3 control-label">Tài khoản:</label>
            		<div class="col-md-6">
            			<input type="text" name="username" id="username" class="form-control" value="<?php echo isset($username) ? $username : ''; ?>" placeholder="Nhập tài khoản" <?php echo $users->get_userid() ? 'disabled' : ''; ?> data-parsley-required="true"/>
            		</div>
            	</div>
            	<div class="form-group">
            		<label class="col-md-3 control-label">Mật khẩu:</label>
            		<div class="col-md-6">
            			<input type="password" name="password" id="password" value="" class="form-control" placeholder="Nhập mật khẩu" data-parsley-required="true" />
            		</div>
            	</div>
            	<div class="form-group">
            		<label class="col-md-3 control-label">Nhập lại khẩu:</label>
            		<div class="col-md-6">
            			<input type="password" name="repassword" class="form-control" id="repassword" value="" placeholder="Nhập lại mật khẩu" data-parsley-required="true" />
            		</div>
            	</div>
           	</div>
           	<div class="panel-footer text-center">
            	<button name="submit" id="submit" value="OK" class="btn btn-primary"><i class="fa fa-check-circle-o"></i> Cập nhật</button>
                <?php if($users->is_admin()) : ?>
				    <a href="users.php" class="btn btn-success"><i class="fa fa-mail-reply-all"></i> Trở về danh mục Tài khoản</a>
                <?php else: ?>
                    <a href="index.php" class="btn btn-success"><i class="fa fa-mail-reply-all"></i> Trở về</a>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>
</form>
<?php require_once('footer.php'); ?>
<!-- ================== BEGIN PAGE LEVEL JS ================== -->
<script src="assets/plugins/gritter/js/jquery.gritter.js"></script>
<script src="assets/plugins/parsley/dist/parsley.js"></script>
<script src="assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
    	<?php if(isset($msg) && $msg) : ?>
        $.gritter.add({
            title:"Thông báo !",
            text:"<?php echo $msg; ?>",
            image:"assets/img/login.png",
            sticky:false,
            time:""
        });
        <?php endif; ?>
        App.init();
    });
</script>