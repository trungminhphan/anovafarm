<?php
require_once('header.php');
check_permis($users->is_admin());
$msg = isset($_GET['msg']) ? $_GET['msg'] : '';
$danhmucnongtrai = new DanhMucNongTrai();$danhmuccongty = new DanhMucCongTy();
$danhmucnongtrai_list = $danhmucnongtrai->get_all_list();
$danhmuccongty_list = $danhmuccongty->get_all_list();
?>
<link href="assets/plugins/select2/dist/css/select2.min.css" rel="stylesheet" />
<link href="assets/plugins/gritter/css/jquery.gritter.css" rel="stylesheet" />
<link href="assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css" rel="stylesheet" />
<link href="assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css" rel="stylesheet" />
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-list"></i> Danh mục Nông trại</h4>
            </div>
            <div class="panel-body">
            	<a href="#modal-dmnhamay" data-toggle="modal" class="btn btn-primary m-10 themdmnhamay"><i class="fa fa-plus"></i> Thêm mới</a>
            	<table id="data-table" class="table table-striped table-bordered table-hovered">
            		<thead>
            			<tr>
            				<th>STT</th>
                            <th>Tên công ty</th>
            				<th>Tên nông trại</th>
            				<th>Địa chỉ</th>
            				<th class="text-center"><i class="fa fa-trash"></i></th>
                            <th class="text-center"><i class="fa fa-pencil"></i></th>
            			</tr>
            		</thead>
            		<tbody>
            		<?php
            		if($danhmucnongtrai_list){
            			$i = 1;
            			foreach ($danhmucnongtrai_list as $dm) {
                            $danhmuccongty->id = $dm['id_congty'];$ct = $danhmuccongty->get_one();
            				echo '<tr>
	            				<td>'.$i.'</td>
	            				<td>'.$ct['ten'].'</td>
                                <td>'.$dm['ten'].'</td>
	            				<td>'.$dm['diachi'].'</td>
	            				<td class="text-center"><a href="get.danhmucnongtrai.html?id='.$dm['_id'].'&act=del" onclick="return confirm(\'Chắc chắn muốn xoá?\');"><i class="fa fa-trash"></i></a></td>
	            				<td class="text-center"><a href="get.danhmucnongtrai.html?id='.$dm['_id'].'&act=edit#modal-dmnhamay" data-toggle="modal" class="suadmnhamay"><i class="fa fa-pencil"></i></a></td>
	            			</tr>';$i++;
            			}
            		}
            		?>
            		</tbody>
            	</table>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="modal-dmnhamay">
<form action="post.danhmucnongtrai.html" method="POST" class="form-horizontal" data-parsley-validate="true" name="nhamayform">
	<div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title">Thông tin nhà máy sản xuất</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="col-md-3 control-label">Chọn công ty</label>
                    <div class="col-md-9">
                        <select name="id_congty" id="id_congty" class="select2" style="width:100%;">
                        <?php
                        if($danhmuccongty_list){
                            foreach($danhmuccongty_list as $ct){
                                echo '<option value="'.$ct['_id'].'">'.$ct['ten'].', '.$ct['diachi'].'</option>';
                            }
                        }
                        ?>
                        </select>
                    </div>
                </div>
            	<div class="form-group">
            		<label class="col-md-3 control-label">Tên Nông trại</label>
            		<div class="col-md-9">
            			<input type="hidden" name="id" id="id" />
            			<input type="hidden" name="act" id="act" />
                        <input type="hidden" name="url" id="url" value="<?php echo $_SERVER['REQUEST_URI']; ?>">
            			<input type="text" name="ten" id="ten" value="" class="form-control" data-parsley-required="true"/>
            		</div>
            	</div>
            	<div class="form-group">
            		<label class="col-md-3 control-label">Địa chỉ</label>
            		<div class="col-md-9">
            			<input type="text" name="diachi" id="diachi" value="" class="form-control" data-parsley-required="true"/>
            		</div>
            	</div>
            </div>
            <div class="modal-footer">
                <a href="#" class="btn btn-sm btn-white" data-dismiss="modal">Đóng</a>
                <button type="submit" name="submit" id="submit" class="btn btn-sm btn-success">Lưu</button>
            </div>
        </div>
    </div>
</form>
</div>
<div style="clear:both;"></div>
<?php require_once('footer.php'); ?>
<!-- ================== BEGIN PAGE LEVEL JS ================== -->
<script src="assets/plugins/select2/dist/js/select2.min.js"></script>
<script src="assets/plugins/gritter/js/jquery.gritter.js"></script>
<script src="assets/plugins/parsley/dist/parsley.js"></script>
<script src="assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
        $(".select2").select2();
    	$("#themdmnhamay").click(function(){
    		$("#id").val();$("#act").val();
    	});
    	$(".suadmnhamay").click(function(){
    		var _link = $(this).attr("href");
    		$.getJSON(_link, function(data){
    			$("#id").val(data.id); $("#act").val(data.act);
    			$("#ten").val(data.ten); $("#diachi").val(data.diachi);
                $("#id_congty").val(data.id_congty);$("#id_congty").select2();
    		});
    	});
    	<?php if(isset($msg) && $msg): ?>
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