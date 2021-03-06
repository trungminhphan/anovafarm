<?php require_once('header.php');
check_permis_child($users->is_admin() || $users->is_retail());
use \Models\DBConnect;
use \Models\NhaMay;
use \Models\NongTrai;
use \Models\BanLe;
use \Models\DanhMucNhaMay;
use \Models\DanhMucNongTrai;
use \Models\DongGoi;
use \Models\DanhMucBanLe;
$msg = isset($_GET['msg']) ? $_GET['msg'] : '';
$nhamay = new NhaMay();$nongtrai = new NongTrai();$banle = new BanLe();
$danhmucnhamay = new DanhMucNhaMay(); $danhmucnongtrai = new DanhMucNongTrai();
$donggoi = new DongGoi();$danhmucbanle = new DanhMucBanLe();
//$nhamay_list = $nhamay->get_all_list();
//$nongtrai_list = $nongtrai->get_all_list();
$donggoi_list = $donggoi->get_all_list();
$danhmucbanle_list = $danhmucbanle->get_all_list();
if(isset($_POST['submit'])){
    $banle_check = isset($_POST['banle_check']) ? $_POST['banle_check'] : '';
    if($banle_check){
        foreach ($banle_check as $key => $value) {
            $check = isset($_POST['bl_'.$value]) ? $_POST['bl_'.$value] : 0;
            $banle->id = $value; $banle->lock($check);
        }
    }
}
if($users->is_admin()){
    $banle_list =  $banle->get_all_list();
} else {
    $banle->id_congty = $id_congty;
    $banle_list =  $banle->get_list_by_congty();
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
                <h4 class="panel-title"><i class="fa fa-gears"></i> Thông tin Nơi bán lẻ</h4>
            </div>
            <div class="panel-body">
                <?php if($users->is_admin()): ?>
                <form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="POST">
                <button type="submit" name="submit" id="submit" value="OK" class="btn btn-success"><i class="fa fa-lock"></i> Cập nhật khóa dữ liệu</button>
                <?php endif; ?>
            	<a href="#modal-banle" data-toggle="modal" class="btn btn-primary m-10 thembanle"><i class="fa fa-plus"></i> Thêm mới</a>
                <a href="../export_data.html?collect=banle&submit=OK" class="btn btn-primary"><i class="fa fa-file-excel-o"></i> Xuất Excel</a>
            	<table id="data-table" class="table table-striped table-bordered table-hovered">
            		<thead>
            			<tr>
                            <?php if($users->is_admin()) : ?>
                            <th >Khóa<input type="checkbox" name="check_all" id="check_all"></th>
                            <?php endif; ?>
            				<th>STT</th>
            				<th>Tên sản phẩm</th>
            				<th>Nơi bán lẻ</th>
            				<!--<th class="text-center">Tên quầy, sạp</th>
            				<th class="text-center">Ngày giờ bán</th>-->
            				<th class="text-center">Hiển thị</th>
            				<th class="text-center"><i class="fa fa-qrcode"></i></th>
            				<th class="text-center"><i class="fa fa-trash"></i></th>
            				<th class="text-center"><i class="fa fa-pencil"></i></th>
            			</tr>
            		</thead>
            		<tbody>
            		<?php
            		if($banle_list){
            			$i=1;
            			foreach($banle_list as $bl){
                            $donggoi->id = $bl['id_donggoi'];$dg = $donggoi->get_one();
                            $check_lock = isset($bl['lock']) ? $bl['lock'] : 0;
            				echo '<tr>';
                            if($users->is_admin()) :
                            echo '<input type="hidden" name="banle_check[]" value="'.$bl['_id'].'" />';
                            echo '<td><input type="checkbox" value="1" name="bl_'.$bl['_id'].'" class="check" '.($check_lock == 1 ? ' checked' : '').'/></td>';
                            endif;
            				echo '<td>'.$i.'</td>';
            				echo '<td>'.$dg['tensanpham'].'</td>';
                            echo '<td>';
                            if($bl['id_dmbanle']){
                                foreach($bl['id_dmbanle'] as $key => $value){
                                    $danhmucbanle->id = $value; $dmbl = $danhmucbanle->get_one();
                                    echo $dmbl['ten'] .', '. $dmbl['diachi'] . '<br />';
                                }
                            }
                            echo '</td>';
                            echo '<td class="text-center link_hienthi"><a href="'.$link_frontend.'/?id='.$bl['_id'].'&type=4&q=gietmo" class="sethienthi" target="_blank"><i class="fa fa-eye text-primary"></i></a></td>';
            				echo '<td class="text-center"><a href="../print_qrcode.html?id='.$bl['_id'].'&type=4&q=gietmo" class="open_window"><i class="fa fa-qrcode"></i></a></td>';
                            if($check_lock == 1){
                                echo '<td class="text-center"><i class="fa fa-lock text-danger"></i></td>';
                                echo '<td class="text-center"><i class="fa fa-lock text-danger"></i></td>';
                            } else {
                				echo '<td class="text-center"><a href="get.banle.html?id='.$bl['_id'].'&act=del" onclick="return confirm(\'Chắc chắn muốn xoá?\');"><i class="fa fa-trash"></i></a></td>';
                				echo '<td class="text-center"><a href="get.banle.html?id='.$bl['_id'].'&act=edit#modal-banle" data-toggle="modal" class="suabanle"><i class="fa fa-pencil"></i></a></td>';
                            }

            				echo '</tr>'; $i++;
            			}
            		}
            		?>
            		</tbody>
            	</table>
                <?php if($users->is_admin()) : ?>
                </form>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="modal-banle">
<form action="post.banle.html" method="POST" class="form-horizontal" data-parsley-validate="true" name="nhamayform">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title">Thông tin nơi bán lẻ</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="col-md-3 control-label">Chọn sản phẩm đóng gói:</label>
                    <div class="col-md-9 p-t-5">
                        <input type="hidden" name="id" id="id">
                        <input type="hidden" name="act" id="act">
                        <input type="hidden" name="url" id="url" value="<?php echo $_SERVER['REQUEST_URI']; ?>">
                    	<select name="id_donggoi" id="id_donggoi" class="select2" style="width:100%;">
                    	<?php
                    	if($donggoi_list){
                    		foreach($donggoi_list as $dg){
                                if($users->is_admin() || $dg['id_congty'] == $id_congty){
                                    $nhamay->id = $dg['id_nhamay']; $nm = $nhamay->get_one();
                                    $danhmucnhamay->id = $nm['id_dmnhamay'];$dmnm = $danhmucnhamay->get_one();
                    			    $nongtrai->id = $nm['id_nongtrai']; $nt = $nongtrai->get_one();
                                    $danhmucnongtrai->id = $nt['id_dmnongtrai']; $dmnt = $danhmucnongtrai->get_one();
                    			    echo '<option value="'.$dg['_id'].'">'.$dmnm['ten'].' - '.$nt['madan'].' - '.$dg['tensanpham'].' - '.$dg['quicachdonggoi'].' - '.$dg['solo'].' - '.DBConnect::getDate($dg['ngaygiodonggoi'],"d/m/Y").(isset($nt['CODE']) ? ' - ' . $nt['CODE'] : '').' - '.$nt['soxevanchuyen'].'</option>';
                                }
                    		}
                    	}
                    	?>
                    	</select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Nơi bán lẻ</label>
                    <div class="col-md-9">
                     <select name="id_dmbanle[]" multiple id="id_dmbanle" class="select2" style="width:100%;">
                    <?php
                    if($danhmucbanle_list){
                        foreach($danhmucbanle_list as $dmbl){
                            echo '<option value="'.$dmbl['_id'].'">'.$dmbl['ten'].','.$dmbl['diachi'].'</option>';
                        }
                    }
                    ?>
                     </select>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-3 control-label">Hiển thị</label>
                <div class="col-md-3" id="hienthi">
                    <input type="checkbox" data-render="switchery" data-theme="default" name="hienthi" value="1" checked/>
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
<script src="../assets/plugins/switchery/switchery.min.js"></script>
<script src="../assets/js/form-slider-switcher.demo.min.js"></script>
<script src="../assets/js/table-manage-default.demo.min.js"></script>
<script type="text/javascript" src="../assets/js/custom.js"></script>
<script src="../assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
    	//set_hienthi();
    	$(".thembanle").click(function(){
            $("#id").val("");$("#act").val("");
        });
        $(".suabanle").click(function(){
            var _link = $(this).attr("href");
            $.getJSON(_link, function(data){
                $("#id").val(data.id); $("#act").val(data.act);
                $("#id_donggoi").val(data.id_donggoi);$("#id_donggoi").select2();
                $("#id_dmbanle").val(data.id_dmbanle);$("#id_dmbanle").select2();
                $("#hienthi").html(data.hienthi);FormSliderSwitcher.init();
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
        $("#check_all").click(function(){
            if($(this).prop("checked")){
                $(".check").prop("checked", true);
            } else {
                $(".check").prop("checked", false);
            }
        });
        App.init();FormSliderSwitcher.init();
        <?php if(!$users->is_admin()): ?>
            TableManageDefault.init();
        <?php endif; ?>
    });
</script>
