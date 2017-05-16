<?php
require_once('header.php');
$nongtrai = new NongTrai();$nhamay = new NhaMay(); $donggoi = new DongGoi(); $banle = new BanLe();
$danhmucnongtrai = new DanhMucNongTrai();
if(isset($_GET['submit'])){
	$search = isset($_GET['search']) ? $_GET['search'] : '';
	if($search){
		$nongtrai = new NongTrai();
		$nongtrai_list = $nongtrai->search($search);
	}
}
?>

<h1 class="page-header"><i class="fa fa-search"></i> TÌM KIẾM</h1>
<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="GET">
<div class="form-group">
	<label class="col-md-3 control-label text-right p-t-5">Từ khóa tìm kiếm</label>
    <div class="col-md-3">
        <input type="text" name="search" id="search" value="<?php echo isset($search) ? $search: ''; ?>" class="form-control" data-parsley-required="true"/>
    </div>
    <button type="submit" name="submit" id="submit" class="btn btn-primary" value="OK"><i class="fa fa-search"></i> Tìm kiếm</button>
</div>
</form>
<?php if(isset($nongtrai_list) && $nongtrai_list): ?>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-gears"></i> GIẾT MỔ - NÔNG TRẠI</h4>
            </div>
            <div class="panel-body">
            <table id="data-table" class="table table-striped table-bordered table-hovered">
            		<thead>
            			<tr>
            				<th>STT</th>
            				<th>Mã đàn</th>
            				<th>Tên trang trại</th>
            				<th>Ngày xuất</th>
            				<th>Số lượng</th>                            
            				<th class="text-center">Hiển thị</th>
            			</tr>
            		</thead>
            		<tbody>
            		<?php
            		$i=1;
        			foreach ($nongtrai_list as $nt) {
                        $danhmucnongtrai->id = $nt['id_dmnongtrai'];$dm = $danhmucnongtrai->get_one();
        				echo '<tr>';
        				echo '<td>'.$i.'</td>';
        				echo '<td>'.$nt['madan'].'</td>';
        				echo '<td>'.$dm['ten'].'</td>';
        				echo '<td>'.date("d/m/Y",$nt['ngaygioxuat']->sec).'</td>';
        				echo '<td>'.$nt['soluong'].'</td>';
                        echo '<td class="text-center link_hienthi"><a href="'.$link_frontend.'/?id='.$nt['_id'].'&type=1&q=gietmo" class="sethienthi" target="_blank"><i class="fa fa-eye text-primary"></i></a></td>';
        				echo '</tr>'; $i++;
        			}

            		?>
            		</tbody>
            	</table>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>
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