<?php require_once('header.php');
check_permis($users->is_admin() || $users->is_factory() || $users->is_farmer());
$msg = isset($_GET['msg']) ? $_GET['msg'] : '';
$nongtrai = new NongTraiTrung();
$danhmucnhamay = new DanhMucNhaMay();$danhmucnongtrai = new DanhMucNongTrai();
$danhmucnhamay_list = $danhmucnhamay->get_all_list();
$danhmucnongtrai_list = $danhmucnongtrai->get_all_list();
if($users->is_admin()){
    $nongtrai_list = $nongtrai->get_all_list();
} else {
    $nongtrai->id_congty = $id_congty;
    $nongtrai_list = $nongtrai->get_list_by_congty();
}
?>
<link href="../assets/plugins/select2/dist/css/select2.min.css" rel="stylesheet" />
<link href="../assets/plugins/gritter/css/jquery.gritter.css" rel="stylesheet" />
<link href="../assets/plugins/switchery/switchery.min.css" rel="stylesheet" />
<link href="../assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css" rel="stylesheet" />
<link href="../assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css" rel="stylesheet" />
<link href="../assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css" rel="stylesheet" />
<link href="../assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css" rel="stylesheet" />
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-th"></i> Thông tin Nông trại sản xuất</h4>
            </div>
            <div class="panel-body">
                <a href="#modal-nongtrai" data-toggle="modal" class="btn btn-primary m-10 themnongtrai"><i class="fa fa-plus"></i> Thêm mới</a>
            	<table id="data-table" class="table table-striped table-bordered table-hovered">
            		<thead>
            			<tr>
            				<th>STT</th>
            				<th>Mã đàn</th>
            				<th>Tên trang trại</th>
            				<th>Ngày thu hoạch</th>
            				<th class="text-right">Số lượng</th>
                            <?php if($users->is_admin() || $users->is_factory()): ?>
            				<th class="text-center">Hiển thị</th>
            				<th class="text-center"><i class="fa fa-qrcode"></i></th>
            				<th class="text-center"><i class="fa fa-dropbox"></i></th>
                            <?php endif; ?>
                            <?php if($users->is_admin() || $users->is_farmer()): ?>
                            <th class="text-center"><i class="fa fa-trash"></i></th>
                            <th class="text-center"><i class="fa fa-pencil"></i></th>
                            <?php endif; ?>
            			</tr>
            		</thead>
            		<tbody>
            		<?php
            		if($nongtrai_list){
            			$i=1;
            			foreach ($nongtrai_list as $nt) {
                            $danhmucnongtrai->id = $nt['id_dmnongtrai'];$dm = $danhmucnongtrai->get_one();
            				echo '<tr>';
            				echo '<td>'.$i.'</td>';
            				echo '<td>'.$nt['madan'].'</td>';
            				echo '<td>'.$dm['ten'].'</td>';
            				echo '<td>'.date("d/m/Y",$nt['ngaythuhoach']->sec).'</td>';
            				echo '<td class="text-right">'.$nt['soluong'].'</td>';
                            echo '<td class="text-center link_hienthi"><a href="'.$link_frontend.'/?id='.$nt['_id'].'&type=1&q=trung" class="sethienthi" target="_blank"><i class="fa fa-eye text-primary"></i></a></td>';
                            if($users->is_admin() || $users->is_factory()){
                				echo '<td class="text-center"><a href="../print_qrcode.html?id='.$nt['_id'].'&type=1&q=trung" class="open_window"><i class="fa fa-qrcode"></i></a></td>';
                				echo '<td class="text-center"><a href="get.nongtrai.html?id='.$nt['_id'].'&act=themdonggoi#modal-donggoi" data-toggle="modal" name="'.$nt['_id'].'" class="themdonggoi"><i class="fa fa-dropbox"></i></a></td>';
                            }
                            if($users->is_admin() || $users->is_farmer()){
                                echo '<td class="text-center"><a href="get.nongtrai.html?id='.$nt['_id'].'&act=del" onclick="return confirm(\'Chắc chắn muốn xoá?\');"><i class="fa fa-trash"></i></a></td>';
                                echo '<td class="text-center"><a href="get.nongtrai.html?id='.$nt['_id'].'&act=edit#modal-nongtrai" data-toggle="modal" class="suanongtrai"><i class="fa fa-pencil"></i></a></td>';
                            }
            				echo '</tr>'; $i++;
            			}
            		}
            		?>
            		</tbody>
            	</table>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="modal-nongtrai">
<form action="post.nongtrai.html" method="POST" class="form-horizontal" data-parsley-validate="true" name="nhamayform">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title">Thông tin Nông trại</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="col-md-3 control-label">Chọn nông trại</label>
                    <div class="col-md-9">
                        <input type="hidden" name="id" id="id">
                        <input type="hidden" name="act" id="act">
                        <input type="hidden" name="url" id="url" value="<?php echo $_SERVER['REQUEST_URI']; ?>">
                        <select name="id_dmnongtrai" id="id_dmnongtrai" class="select2" style="width:100%;">
                        <?php
                        if($danhmucnongtrai_list){
                            foreach($danhmucnongtrai_list as $dm){
                                echo '<option value="'.$dm['_id'].'">'.$dm['ten'] .' - '. $dm['diachi'].'</option>';
                            }
                        }
                        ?>
                        </select>
                    </div>
                </div>
                
                <div class="form-group">
                    <label class="col-md-3 control-label">Tiêu chuẩn</label>
                    <div class="col-md-3">
                        <input type="text" name="tieuchuan" id="tieuchuannongtrai" value="" class="form-control" data-parsley-required="true"/>
                    </div>
                    <label class="col-md-3 control-label">Số chứng nhận tiêu chuẩn</label>
                    <div class="col-md-3">
                        <input type="text" name="sochungnhantieuchuan" id="sochungnhantieuchuan" value="" class="form-control" data-parsley-required="true"/>
                    </div>
                   
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Mã đàn</label>
                    <div class="col-md-3">
                        <input type="text" name="madan" id="madannongtrai" value="" class="form-control" data-parsley-required="true"/>
                    </div>
                    <label class="col-md-3 control-label">Số lượng</label>
                    <div class="col-md-3">
                        <input type="number" name="soluong" id="soluong" value="" class="form-control" data-parsley-required="true"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Ngày thu hoạch</label>
                    <div class="col-md-3">
                        <input type="text" name="ngaythuhoach" id="ngaythuhoach" value="<?php echo date("d/m/Y"); ?>" class="form-control ngaythangnam" placeholder="Ngày giờ xuất" data-date-format="dd/mm/yyyys" data-inputmask="'alias': 'date'" data-parsley-required="true"/>
                    </div>
                    <label class="col-md-3 control-label">Nhà máy cung cấp thức ăn</label>
                    <div class="col-md-3">
                        <input type="text" name="nhamaycungcapthucan" id="nhamaycungcapthucan" value="" class="form-control" data-parsley-required="true"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Số xe vận chuyển</label>
                    <div class="col-md-3">
                        <input type="text" name="soxevanchuyen" id="soxevanchuyen" value="" class="form-control" data-parsley-required="true"/>
                    </div>
                    <label class="col-md-3 control-label">Tên tài xế</label>
                    <div class="col-md-3">
                        <input type="text" name="tentaixe" id="tentaixe" value="" class="form-control" data-parsley-required="true"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Hiển thị</label>
                    <div class="col-md-3" id="hienthi">
                        <input type="checkbox" data-render="switchery" data-theme="default" name="hienthi" value="1" checked/>
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
<div class="modal fade" id="modal-donggoi">
<form action="post.donggoi.html" method="POST" class="form-horizontal" data-parsley-validate="true" name="nhamayform">
    <input type="hidden" name="url" id="url" value="<?php echo $_SERVER['REQUEST_URI']; ?>">
    <input type="hidden" name="id_nongtraitrung" id="id_nongtraitrung" value="" />
	<div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title">Thông tin nơi đóng gói Trứng</h4>
            </div>
            <div class="modal-body">
            	<div class="form-group">
            		<label class="col-md-3 control-label">Tên và địa chỉ trại</label>
            		<div class="col-md-9 p-t-5" id="tentrai"></div>
            	</div>
            	<div class="form-group">
            		<label class="col-md-3 control-label">Mã đàn</label>
            		<div class="col-md-3 p-t-5" id="madan"></div>
            		<label class="col-md-3 control-label">Tiêu chuẩn trại</label>
            		<div class="col-md-3 p-t-5" id="tieuchuantrai"></div>
            	</div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Tên sản phẩm</label>
                    <div class="col-md-9">
                        <input type="text" name="tensanpham" id="tensanpham" value="" class="form-control" data-parsley-required="true"/>
                    </div>
                </div>
                <div class="form-group">
                     <label class="col-md-3 control-label">Qui cách đóng gói</label>
                    <div class="col-md-3">
                        <input type="text" name="quicachdonggoi" id="quicachdonggoi" value="" class="form-control" data-parsley-required="true"/>
                    </div>
                    <label class="col-md-3 control-label">Số lô</label>
                    <div class="col-md-3">
                        <input type="text" name="solo" id="solo" value="" class="form-control" data-parsley-required="true"/>
                    </div>
                </div>
            	<div class="form-group">
                    <label class="col-md-3 control-label">Nơi đóng gói</label>
                    <div class="col-md-9">
                        <select name="id_dmnhamay" id="id_dmnhamay" class="select2" style="width:100%;">
                        <?php
                        if($danhmucnhamay_list){
                            foreach($danhmucnhamay_list as $dm){
                                echo '<option value="'.$dm['_id'].'">'.$dm['ten'] .' - '. $dm['diachi'].'</option>';
                            }
                        }
                        ?>
                        </select>
                    </div>
                </div>
            	<div class="form-group">
            		<label class="col-md-3 control-label">Tiêu chuẩn</label>
            		<div class="col-md-3">
            			<input type="text" name="tieuchuan" id="tieuchuan" value="" class="form-control" data-parsley-required="true"/>
            		</div>
                    <label class="col-md-3 control-label">Số chứng nhận tiêu chuẩn</label>
                    <div class="col-md-3">
                        <input type="text" name="sochungnhantieuchuan" id="sochungnhantieuchuan" value="" class="form-control" data-parsley-required="true"/>
                    </div>
            	</div>
            	<div class="form-group">
            		<label class="col-md-3 control-label">Ngày đóng gói</label>
            		<div class="col-md-3">
            			<input type="text" name="ngaydonggoi" id="ngaydonggoi" placeholder="ngày đóng gói" value="<?php echo date("d/m/Y"); ?>" class="form-control ngaythangnam" data-date-format="dd/mm/yyyys" data-inputmask="'alias': 'date'" data-parsley-required="true"/>
            		</div>
                    <label class="col-md-3 control-label">Hạn sử dụng</label>
                    <div class="col-md-3">
                        <input type="text" name="hansudung" id="hansudung" placeholder="hạn sử dụng" value="" class="form-control" data-parsley-required="true"/>
                    </div>
            	</div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Hiển thị</label>
                    <div class="col-md-3" id="hienthidonggoi">
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
<script src="../assets/plugins/select2/dist/js/select2.min.js"></script>
<script src="../assets/plugins/gritter/js/jquery.gritter.js"></script>
<script src="../assets/plugins/DataTables/media/js/jquery.dataTables.js"></script>
<script src="../assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js"></script>
<script src="../assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js"></script>
<script src="../assets/plugins/parsley/dist/parsley.js"></script>
<script src="../assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script src="../assets/plugins/input-mask/jquery.inputmask.js"></script>
<script src="../assets/js/table-manage-default.demo.min.js"></script>
<script src="../assets/js/custom.js" type="text/javascript"></script>
<script src="../assets/plugins/switchery/switchery.min.js"></script>
<script src="../assets/js/form-slider-switcher.demo.min.js"></script>
<script src="../assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
    	//set_hienthi();
    	$(".themdonggoi").click(function(){
    		var _link = $(this).attr("href");
    		$.getJSON(_link, function(data){
    			$("#id_nongtraitrung").val(data.id);
    			$("#tentrai").html(data.ten +  ' ' + data.diachi);
    			$("#madan").html(data.madan);
    			$("#tieuchuantrai").html(data.tieuchuan);
                $("#hienthidonggoi").html('<input type="checkbox" data-render="switchery" data-theme="default" name="hienthi" value="1" checked/>');
                FormSliderSwitcher.init();
    		});    		
    	});
        $(".open_window").click(function(){
          window.open($(this).attr("href"), '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=100, width=1024, height=800');
          return false;
        });
    	$(".ngaythangnam").datepicker({todayHighlight:!0});
    	$(".ngaythangnam").inputmask();
    	$(".select2").select2();
		<?php if(isset($msg) && $msg): ?>
        $.gritter.add({
            title:"Thông báo !",
            text:"<?php echo $msg; ?>",
            image:"../assets/img/login.png",
            sticky:false,
            time:""
        });
        <?php endif; ?>  
        $(".themnongtrai").click(function(){
            $("#id").val("");$("#act").val("");
            $("#hienthi").html('<input type="checkbox" data-render="switchery" data-theme="default" name="hienthi" value="1" checked/>');
            FormSliderSwitcher.init();
        });
        $(".suanongtrai").click(function(){
            var _link = $(this).attr("href");
            $.getJSON(_link, function(data){
                $("#id").val(data.id);$("#act").val(data.act);
                $("#id_dmnongtrai").val(data.id_dmnongtrai);$("#id_dmnongtrai").select2();
                $("#tieuchuannongtrai").val(data.tieuchuan);
                $("#sochungnhantieuchuan").val(data.sochungnhantieuchuan);
                $("#ngaythuhoach").val(data.ngaythuhoach);              
                $("#madannongtrai").val(data.madan);
                $("#soluong").val(data.soluong);
                $("#nhamaycungcapthucan").val(data.nhamaycungcapthucan);
                $("#soxevanchuyen").val(data.soxevanchuyen);
                $("#tentaixe").val(data.tentaixe);
                $("#hienthi").html(data.hienthi);
                FormSliderSwitcher.init();
            });
        });
        App.init();TableManageDefault.init();
    });
</script>