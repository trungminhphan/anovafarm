<?php require_once('header.php');
check_permis($users->is_admin() || $users->is_retail() || $users->is_packer());
$msg = isset($_GET['msg']) ? $_GET['msg'] : '';

$nhamay = new NhaMayRauQua();$nongtrai = new NongTraiRauQua();$donggoi = new DongGoiRauQua();
$danhmucbanle = new DanhMucBanLe();$danhmucnhamay = new DanhMucNhaMay();
$nhamay_list = $nhamay->get_all_list();
$danhmucnhamay_list = $danhmucnhamay->get_all_list();
$danhmucbanle_list = $danhmucbanle->get_all_list();
if($users->is_admin()){
    $donggoi_list = $donggoi->get_all_list();
} else {
    $donggoi->id_congty = $id_congty;
    $donggoi_list = $donggoi->get_list_by_congty();
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
                <h4 class="panel-title"><i class="fa fa-gears"></i> Thông tin Sản phẩm đóng gói rau quả</h4>
            </div>
            <div class="panel-body">
            	<?php if($users->is_admin() || $users->is_packer()): ?>
                <a href="#modal-donggoi" data-toggle="modal" class="btn btn-primary m-10 themdonggoi"><i class="fa fa-plus"></i> Thêm mới</a>
                <?php endif; ?>
            	<table id="data-table" class="table table-striped table-bordered table-hovered">
            		<thead>
            			<tr>
            				<th>STT</th>
            				<th>Nơi đóng gói</th>
            				<th>Tên sản phẩm</th>
            				<th>Qui cách đóng gói</th>
                            <th>Ngày giờ đóng gói</th>
                            <th>Hạn sử dụng</th>
                            <th>Số lô đóng gói</th>
                            <th>Ngày thu hoạch</th>
                            <th>Ngày sơ chế</th>
            				<?php if($users->is_admin() || $users->is_retail()): ?>
                            <th class="text-center">Hiển thị</th>
            				<th class="text-center"><i class="fa fa-qrcode"></i></th>
            				<th class="text-center"><i class="fa fa-shopping-cart"></i></th>
            				<?php endif;?>
            				<?php if($users->is_admin() || $users->is_packer()): ?>
            				<th class="text-center"><i class="fa fa-trash"></i></th>
            				<th class="text-center"><i class="fa fa-pencil"></i></th>
            				<?php endif; ?>
            			</tr>
            		</thead>
            		<tbody>
            		<?php
            		if($donggoi_list){
            			$i=1;
            			foreach ($donggoi_list as $dg) {
                            $nhamay->id = $dg['id_nhamayrauqua']; $nm = $nhamay->get_one();
            				$nongtrai->id = $nm['id_nongtrairauqua'];$nt=$nongtrai->get_one();
                            $danhmucnhamay->id = $nm['id_dmnhamay']; $dm = $danhmucnhamay->get_one();
            				echo '<tr>';
            				echo '<td>'.$i.'</td>';
            				echo '<td>'.$dm['ten'].'</td>';
            				echo '<td>'.$dg['tensanpham'].'</td>';
            				echo '<td>'.$dg['quicachdonggoi'].'</td>';
                            echo '<td>'.date("d/m/Y",$dg['ngaydonggoi']->sec).'</td>';
                            echo '<td>'.$dg['hansudung'].'</td>';
                            echo '<td>'.$dg['solo'].'</td>';
                            echo '<td>'.date("d/m/Y", $nt['ngaythuhoach']->sec).'</td>';
                            echo '<td>'.date("d/m/Y", $nm['ngaysoche']->sec).'</td>';
                            echo '<td class="text-center link_hienthi"><a href="'.$link_frontend.'/?id='.$dg['_id'].'&type=3&q=rauqua" class="sethienthi" target="_blank"><i class="fa fa-eye text-primary"></i></a></td>';
            				if($users->is_admin() || $users->is_retail()){
	            				echo '<td class="text-center"><a href="../print_qrcode.html?id='.$dg['_id'].'&type=3&q=rauqua" class="open_window"><i class="fa fa-qrcode"></i></a></td>';
	            				echo '<td class="text-center"><a href="get.donggoi.html?id='.$dg['_id'].'&act=thembanle#modal-banle" data-toggle="modal" name="'.$dg['_id'].'" class="thembanle"><i class="fa fa-shopping-cart"></i></a></td>';
            				}
            				if($users->is_admin() || $users->is_packer()){
            					echo '<td class="text-center"><a href="get.donggoi.html?id='.$dg['_id'].'&act=del" onclick="return confirm(\'Chắc chắn muốn xoá?\');"><i class="fa fa-trash"></i></a></td>';
            					echo '<td class="text-center"><a href="get.donggoi.html?id='.$dg['_id'].'&act=edit#modal-donggoi" data-toggle="modal" name="'.$dg['_id'].'" class="suadonggoi"><i class="fa fa-pencil"></i></a></td>';
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

<div class="modal fade" id="modal-banle">
<form action="post.banle.html" method="POST" class="form-horizontal" data-parsley-validate="true" name="dongoiform">
    <input type="hidden" name="id_donggoirauqua" id="id_donggoirauqua">
    <input type="hidden" name="url" id="url" value="<?php echo $_SERVER['REQUEST_URI']; ?>">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title">Thông tin nơi bán lẻ rau quả</h4>
            </div>
            <div class="modal-body">        
                <div class="form-group">
                    <label class="col-md-3 control-label">Tên sản phẩm</label>
                    <div class="col-md-3 p-t-5" id="tensanphambanle"></div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Qui cách đóng gói</label>
                    <div class="col-md-3 p-t-5" id="quicachdonggoibanle"></div>
                    <label class="col-md-3 control-label">Số lô</label>
                    <div class="col-md-3 p-t-5" id="solobanle"></div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Nơi đóng gói</label>
                    <div class="col-md-9 p-t-5" id="tennhamaybanle"></div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Nông trại</label>
                    <div class="col-md-9 p-t-5" id="tennongtraibanle"></div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Nơi bán lẻ</label>
                    <div class="col-md-9">
                     <select name="id_dmbanle[]" multiple id="id_dmbanle" class="select2" style="width:100%;">
                    <?php
                    if($danhmucbanle_list){
                        foreach($danhmucbanle_list as $dmbl){
                            echo '<option value="'.$dmbl['_id'].'">'.$dmbl['ten'].', '.$dmbl['diachi'].'</option>';
                        }
                    }
                    ?>
                     </select>   
                    </div>
                </div>
                <div class="form-group">
                <label class="col-md-3 control-label">Hiển thị</label>
                <div class="col-md-3" id="hienthibanle"></div>
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
    <input type="hidden" name="id" id="id" value="" />
    <input type="hidden" name="act" id="act" value="" />
    <input type="hidden" name="url" id="url" value="<?php echo $_SERVER['REQUEST_URI']; ?>" />
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title">Thông tin đóng gói sản phẩm rau quả</h4>
            </div>
            <div class="modal-body">
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
                        <select name="id_dmnhamay" id="id_dmnhamay" class="select2" style="width:100%">
                        <?php
                        if($danhmucnhamay_list){
                            foreach($danhmucnhamay_list as $dmnm){
                                echo '<option value="'.$dmnm['_id'].'">'.$dmnm['ten'].', '.$dmnm['diachi'].'</option>';
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
                    <label class="col-md-3 control-label">Nơi Sơ chế</label>
                    <div class="col-md-9">
                        <select name="id_nhamayrauqua" id="id_nhamayrauqua" class="select2" style="width:100%">
                        <?php
                        if($nhamay_list){
                            foreach($nhamay_list as $nm){
                                $danhmucnhamay->id = $nm['id_dmnhamay']; $dmnm = $danhmucnhamay->get_one();
                                echo '<option value="'.$nm['_id'].'">Mã truy xuất sản phẩm: ' . $nm['matruyxuatsanpham']. ', '.$dmnm['ten'].', '.$dmnm['diachi'].'</option>';
                            }
                        }
                        ?>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Ngày đóng gói</label>
                    <div class="col-md-3">
                        <input type="text" name="ngaydonggoi" id="ngaydonggoi" value="<?php echo date("d/m/Y"); ?>" class="form-control ngaythangnam" data-date-format="dd/mm/yyyys" data-inputmask="'alias': 'date'" data-parsley-required="true"/>
                    </div>
                    <label class="col-md-3 control-label">Hạn sử dụng</label>
                    <div class="col-md-3">
                        <input type="text" name="hansudung" id="hansudung" value="" class="form-control" data-parsley-required="true"/>
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
<script src="../assets/js/table-manage-default.demo.min.js"></script>
<script type="text/javascript" src="../assets/js/custom.js"></script>
<script src="../assets/plugins/switchery/switchery.min.js"></script>
<script src="../assets/js/form-slider-switcher.demo.min.js"></script>
<script src="../assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
    	//set_hienthi();
    	$(".themdonggoi").click(function(){
            $("#id").val("");$("#act").val("");
            $("#hienthi").html('<input type="checkbox" data-render="switchery" data-theme="default" name="hienthi" value="1" checked/>');
            FormSliderSwitcher.init();
        });
        $(".suadonggoi").click(function(){
            var _link = $(this).attr("href");
            $.getJSON(_link, function(data){
                $("#id").val(data.id); $("#act").val(data.act);
                $("#tensanpham").val(data.tensanpham);
                $("#quicachdonggoi").val(data.quicachdonggoi);
                $("#solo").val(data.solo);
                $("#id_dmnhamay").val(data.id_dmnhamay);$("#id_dmnhamay").select2();
                $("#tieuchuan").val(data.tieuchuan);
                $("#sochungnhantieuchuan").val(data.sochungnhantieuchuan);
                $("#id_nhamayrauqua").val(data.id_nhamayrauqua);$("#id_nhamayrauqua").select2();
                $("#ngaydonggoi").val(data.ngaydonggoi);
                $("#hansudung").val(data.hansudung);
                $("#hienthi").html(data.hienthi);
                FormSliderSwitcher.init();
            });
        });
        $(".thembanle").click(function(){
            var _link = $(this).attr("href");
            $.getJSON(_link, function(data){
                $("#id_donggoirauqua").val(data.id_donggoirauqua);
                $("#tensanphambanle").html(data.tensanpham);
                $("#quicachdonggoibanle").html(data.quicachdonggoi);
                $("#solobanle").html(data.solo);
                $("#tennongtraibanle").html(data.tentrai + ', ' + data.diachitrai);
                $("#tennhamaybanle") .html(data.tennhamay + ', ' + data.diachinhamay);
                $("#hienthibanle").html('<input type="checkbox" data-render="switchery" data-theme="default" name="hienthi" value="1" checked/>');
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
        App.init();TableManageDefault.init();
    });
</script>