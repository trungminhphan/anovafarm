<?php
require_once('header.php');
$nongtrai = new NongTrai();$nhamay = new NhaMay(); $donggoi = new DongGoi(); $banle = new BanLe();
$nongtraitrung = new NongTraiTrung();$donggoitrung = new DongGoiTrung(); $banletrung = new BanLeTrung();
$nongtrairauqua = new NongTraiRauQua();$nhamayrauqua = new NhaMayRauQua(); $donggoirauqua = new DongGoiRauQua(); $banlerauqua = new BanLeRauQua();
$danhmucnongtrai = new DanhMucNongTrai();$danhmucnhamay = new DanhMucNhaMay();$danhmucbanle = new DanhMucBanLe();
if(isset($_GET['submit'])){
	$search = isset($_GET['search']) ? trim($_GET['search']) : '';
	if($search){
		$nongtrai = new NongTrai();$nhamay = new NhaMay(); $dongoi = new DongGoi(); $banle = new BanLe();
        if($users->is_admin()) {
    		$nongtrai_list = $nongtrai->search($search);
    		$nhamay_list = $nhamay->search($search);
    		$donggoi_list = $donggoi->search($search);
    		$banle_list = $banle->search($search);
    		$nongtraitrung_list = $nongtraitrung->search($search);
    		$donggoitrung_list = $donggoitrung->search($search);
    		$banletrung_list = $banletrung->search($search);
    		$nongtrairauqua_list = $nongtrairauqua->search($search);
    		$nhamayrauqua_list = $nhamayrauqua->search($search);
    		$donggoirauqua_list = $donggoirauqua->search($search);
    		$banlerauqua_list = $banlerauqua->search($search);
        } else {
            if($users->is_farmer()){
                $nongtrai->id_congty = $id_congty;
                $nongtraitrung->id_congty = $id_congty;
                $nongtrairauqua->id_congty = $id_congty;
                $nongtrai_list = $nongtrai->search_by_congty($search);
                $nongtraitrung_list = $nongtraitrung->search_by_congty($search);
                $nongtrairauqua_list = $nongtrairauqua->search_by_congty($search);
            }
            if($users->is_factory()){
                $nhamay->id_congty = $id_congty;
                $nhamayrauqua->id_congty = $id_congty;
                $nhamay_list = $nhamay->search_by_congty($search);
                $nhamayrauqua_list = $nhamayrauqua->search_by_congty($search);
            }

            if($users->is_packer()){
                $donggoi->id_congty = $id_congty;
                $donggoitrung->id_congty = $id_congty;
                $donggoirauqua->id_congty = $id_congty;
                $donggoi_list = $donggoi->search_by_congty($search);
                $donggoitrung_list = $donggoitrung->search_by_congty($search);
                $donggoirauqua_list = $donggoirauqua->search_by_congty($search);
            }
            if($users->is_retail()){
                $banle->id_congty = $id_congty;
                $banletrung->id_congty = $id_congty;
                $banlerauqua->id_congty = $id_congty;
                $banle_list = $banle->search_by_congty($search);
                $banletrung_list = $banletrung->search_by_congty($search);
                $banlerauqua_list = $banlerauqua->search_by_congty($search);
            }
        }
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
<?php if(isset($nongtrai_list) && $nongtrai_list->count() > 0): ?>
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
                            <th>Tên trang trại</th>
                            <th>Mã đàn</th>
                            <th>Ngày xuất</th>
                            <th>Số lượng</th>
                            <th>CODE</th>
                            <th>Số xe vận chuyển</th>
                            <th>Tên tài xế</th>
                            <th>Số giấy kiểm dịch thú sống</th>
                            <th class="text-center">Hiển thị</th>
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
                            echo '<td>'.$dm['ten'].'</td>';
                            echo '<td>'.$nt['madan'].'</td>';
                            echo '<td>'.date("d/m/Y",$nt['ngaygioxuat']->sec).'</td>';
                            echo '<td>'.$nt['soluong'].'</td>';
                            echo '<td>'.(isset($nt['CODE']) ? $nt['CODE'] : '').'</td>';
                            echo '<td>'.$nt['soxevanchuyen'].'</td>';
                            echo '<td>'.$nt['tentaixe'].'</td>';
                            echo '<td>'.$nt['sogiaykiemdichthusong'].'</td>';
                            echo '<td class="text-center link_hienthi"><a href="'.$link_frontend.'/?id='.$nt['_id'].'&type=1&q=gietmo" class="sethienthi" target="_blank"><i class="fa fa-eye text-primary"></i></a></td>';
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
<?php endif; ?>
<?php if(isset($nhamay_list) && $nhamay_list->count() > 0): ?>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-gears"></i> GIẾT MỔ - NHÀ MÁY</h4>
            </div>
            <div class="panel-body">
            	<table id="data-table" class="table table-striped table-bordered table-hovered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên nhà máy</th>
                            <th>Tiêu chuẩn</th>
                            <th>Mã đàn</th>
                            <th>Số lô</th>
                            <th>Ngày giết mổ</th>
                            <th>Số giấy kiểm dịch thú sống</th>
                            <th>CODE</th>
                            <th>Số xe vận chuyển</th>
                            <th class="text-center">Hiển thị</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php
                    if($nhamay_list){
                        $i=1;
                        foreach ($nhamay_list as $nm) {
                            $nongtrai->id = $nm['id_nongtrai'];$nt=$nongtrai->get_one();
                            $danhmucnhamay->id = $nm['id_dmnhamay']; $dm = $danhmucnhamay->get_one();
                            echo '<tr>';
                            echo '<td>'.$i.'</td>';
                            echo '<td>'.$dm['ten'].'</td>';
                            echo '<td>'.$nm['tieuchuan'].'</td>';
                            echo '<td>'.$nt['madan'].'</td>';
                            echo '<td>'.$nm['solo'].'</td>';
                            echo '<td>'.date("d/m/Y", $nm['ngaygiogietmo']->sec).'</td>';
                            echo '<td>'.$nt['sogiaykiemdichthusong'].'</td>';
                            echo '<td>'.(isset($nt['CODE']) ? $nt['CODE'] : '').'</td>';
                            echo '<td>'.$nt['soxevanchuyen'].'</td>';
                            echo '<td class="text-center link_hienthi"><a href="'.$link_frontend.'/?id='.$nm['_id'].'&type=2&q=gietmo" target="_blank" class="sethienthi"><i class="fa fa-eye text-primary"></i></a></td>';
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
<?php endif; ?>
<?php if(isset($donggoi_list) && $donggoi_list->count() > 0): ?>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-gears"></i> GIẾT MỔ - ĐÓNG GÓI</h4>
            </div>
            <div class="panel-body">
            	<table id="data-table" class="table table-striped table-bordered table-hovered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên nhà máy</th>
                            <th>Mã đàn</th>
                            <th>Tên sản phẩm</th>
                            <th>Qui cách đóng gói</th>
                            <th>Số lô</th>
                            <th>Ngày đóng gói</th>
                            <th>CODE</th>
                            <th>Số xe vận chuyển</th>
                            <th class="text-center">Hiển thị</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php
                    if($donggoi_list){
                        $i=1;
                        foreach ($donggoi_list as $dg) {
                            $nhamay->id = $dg['id_nhamay']; $nm = $nhamay->get_one();
                            $nongtrai->id = $nm['id_nongtrai'];$nt=$nongtrai->get_one();
                            $danhmucnhamay->id = $nm['id_dmnhamay']; $dm = $danhmucnhamay->get_one();
                            echo '<tr>';
                            echo '<td>'.$i.'</td>';
                            echo '<td>'.$dm['ten'].'</td>';
                            echo '<td>'.$nt['madan'].'</td>';
                            echo '<td>'.$dg['tensanpham'].'</td>';
                            echo '<td>'.$dg['solo'].'</td>';
                            echo '<td>'.$dg['quicachdonggoi'].'</td>';
                            echo '<td>'.date("d/m/Y",$dg['ngaygiodonggoi']->sec).'</td>';
                            echo '<td>'.(isset($nt['CODE']) ? $nt['CODE'] : '').'</td>';
                            echo '<td>'.$nt['soxevanchuyen'].'</td>';
                            echo '<td class="text-center link_hienthi"><a href="'.$link_frontend.'/?id='.$dg['_id'].'&type=3&q=gietmo" class="sethienthi" target="_blank"><i class="fa fa-eye text-primary"></i></a></td>';
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
<?php endif; ?>
<?php if(isset($banle_list) && $banle_list->count() > 0): ?>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-gears"></i> GIẾT MỔ - BÁN LẺ</h4>
            </div>
            <div class="panel-body">
            <table id="data-table" class="table table-striped table-bordered table-hovered">
            		<thead>
            			<tr>
            				<th>STT</th>
            				<th>Tên sản phẩm</th>
            				<th>Nơi bán lẻ</th>
            				<th class="text-center">Hiển thị</th>
            			</tr>
            		</thead>
            		<tbody>
            		<?php
            		if($banle_list){
            			$i=1;
            			foreach($banle_list as $bl){
                            $donggoi->id = $bl['id_donggoi'];$dg = $donggoi->get_one();
            				echo '<tr>';
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
<?php endif; ?>
<!--------------------------- TRỨNG ------------------------------ -->
<?php if(isset($nongtraitrung_list) && $nongtraitrung_list->count() > 0): ?>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title"><i class="ion-egg"></i> TRỨNG - NÔNG TRẠI</h4>
            </div>
            <div class="panel-body">
            <table id="data-table" class="table table-striped table-bordered table-hovered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên trang trại</th>
                            <th>Mã đàn</th>
                            <th>Ngày thu hoạch</th>
                            <th>Số lượng</th>
                            <th>Số xe vận chuyển</th>
                            <th>Tên tài xế</th>
                            <th class="text-center">Hiển thị</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php
                    if($nongtraitrung_list){
                        $i=1;
                        foreach ($nongtraitrung_list as $nt) {
                            $danhmucnongtrai->id = $nt['id_dmnongtrai'];$dm = $danhmucnongtrai->get_one();
                            echo '<tr>';
                            echo '<td>'.$i.'</td>';
                            echo '<td>'.$dm['ten'].'</td>';
                            echo '<td>'.$nt['madan'].'</td>';
                            echo '<td>'.date("d/m/Y",$nt['ngaythuhoach']->sec).'</td>';
                            echo '<td>'.$nt['soluong'].'</td>';
                            echo '<td>'.$nt['soxevanchuyen'].'</td>';
                            echo '<td>'.$nt['tentaixe'].'</td>';
                            echo '<td class="text-center link_hienthi"><a href="'.$link_frontend.'/?id='.$nt['_id'].'&type=1&q=trung" class="sethienthi" target="_blank"><i class="fa fa-eye text-primary"></i></a></td>';
                            $i++;
                        }
                    }
                    ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>
<?php if(isset($donggoitrung_list) && $donggoitrung_list->count() > 0): ?>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title"><i class="ion-egg"></i> TRỨNG - ĐÓNG GÓI</h4>
            </div>
            <div class="panel-body">
            <table id="data-table" class="table table-striped table-bordered table-hovered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Nơi đóng gói</th>
                            <th>Mã đàn</th>
                            <th>Tên sản phẩm</th>
                            <th>Qui cách đóng gói</th>
                            <th>Ngày đóng gói</th>
                            <th>Số lô</th>
                            <th>Ngày thu hoạch</th>
                            <th>Nông trại</th>
                            <th class="text-center">Hiển thị</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php
                    if($donggoitrung_list){
                        $i=1;
                        foreach ($donggoitrung_list as $dg) {
                            $nongtraitrung->id = $dg['id_nongtraitrung'];$nt=$nongtraitrung->get_one();
                            $danhmucnhamay->id = $dg['id_dmnhamay']; $dm = $danhmucnhamay->get_one();
                            $danhmucnongtrai->id = $nt['id_dmnongtrai']; $dmnt = $danhmucnongtrai->get_one();
                            echo '<tr>';
                            echo '<td>'.$i.'</td>';
                            echo '<td>'.$dm['ten'].'</td>';
                            echo '<td>'.$nt['madan'].'</td>';
                            echo '<td>'.$dg['tensanpham'].'</td>';
                            echo '<td>'.$dg['quicachdonggoi'].'</td>';
                            echo '<td>'.date("d/m/Y",$dg['ngaydonggoi']->sec).'</td>';
                            echo '<td>'.$dg['solo'].'</td>';
                            echo '<td>'.date("d/m/Y",$nt['ngaythuhoach']->sec).'</td>';
                            echo '<td>'.$dmnt['ten'].'</td>';
                            echo '<td class="text-center link_hienthi"><a href="'.$link_frontend.'/?id='.$dg['_id'].'&type=3&q=trung" class="sethienthi" target="_blank"><i class="fa fa-eye text-primary"></i></a></td>';
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
<?php endif; ?>
<?php if(isset($banletrung_list) && $banletrung_list->count() > 0): ?>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title"><i class="ion-egg"></i> TRỨNG - BÁN LẺ</h4>
            </div>
            <div class="panel-body">
            <table id="data-table" class="table table-striped table-bordered table-hovered">
            		<thead>
            			<tr>
            				<th>STT</th>
            				<th>Tên sản phẩm</th>
            				<th>Nơi bán lẻ</th>
            				<th class="text-center">Hiển thị</th>
            			</tr>
            		</thead>
            		<tbody>
            		<?php
            		if($banletrung_list){
            			$i=1;
            			foreach($banletrung_list as $bl){
                            $donggoitrung->id = $bl['id_donggoitrung'];$dg = $donggoitrung->get_one();
            				echo '<tr>';
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
            				echo '<td class="text-center link_hienthi"><a href="'.$link_frontend.'/?id='.$bl['_id'].'&type=4&q=trung" class="sethienthi" target="_blank"><i class="fa fa-eye text-primary"></i></a></td>';
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
<?php endif; ?>
<!--------------------------- RAU ------------------------------ -->
<?php if(isset($nongtrairauqua_list) && $nongtrairauqua_list->count() > 0): ?>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title"><i class="ion-leaf"></i> RAU QUẢ - NÔNG TRẠI</h4>
            </div>
            <div class="panel-body">
            <table id="data-table" class="table table-striped table-bordered table-hovered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên trang trại</th>
                            <th>Mã truy xuất</th>
                            <th>Ngày thu hoạch</th>
                            <th>Số lượng</th>
                            <th>Số xe vận chuyển</th>
                            <th>Tên tài xế</th>
                            <th class="text-center">Hiển thị</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php
                    if($nongtrairauqua_list){
                        $i=1;
                        foreach ($nongtrairauqua_list as $nt) {
                            $danhmucnongtrai->id = $nt['id_dmnongtrai'];$dm = $danhmucnongtrai->get_one();
                            echo '<tr>';
                            echo '<td>'.$i.'</td>';
                            echo '<td>'.$dm['ten'].'</td>';
                            echo '<td>'.$nt['matruyxuatsanpham'].'</td>';
                            echo '<td>'.date("d/m/Y",$nt['ngaythuhoach']->sec).'</td>';
                            echo '<td>'.$nt['soluong'].'</td>';
                            echo '<td>'.$nt['soxevanchuyen'].'</td>';
                            echo '<td>'.$nt['tentaixe'].'</td>';
                            echo '<td class="text-center link_hienthi"><a href="'.$link_frontend.'/?id='.$nt['_id'].'&type=1&q=rauqua" class="sethienthi" target="_blank"><i class="fa fa-eye text-primary"></i></a></td>';
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
<?php endif; ?>
<?php if(isset($nhamayrauqua_list) && $nhamayrauqua_list->count() > 0): ?>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title"><i class="ion-leaf"></i> RAU QUẢ - SƠ CHẾ</h4>
            </div>
            <div class="panel-body">
            	<table id="data-table" class="table table-striped table-bordered table-hovered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên nhà máy</th>
                            <th>Tiêu chuẩn</th>
                            <th>Mã truy xuất sản phẩm</th>
                            <th>Ngày sơ chế</th>
                            <th>Ngày thu hoạch</th>
                            <th>Số lượng</th>
                            <th>Số xe vận chuyển</th>
                            <th class="text-center">Hiển thị</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php
                    if($nhamayrauqua_list){
                        $i=1;
                        foreach ($nhamayrauqua_list as $nm) {
                            $nongtrairauqua->id = $nm['id_nongtrairauqua'];$nt=$nongtrairauqua->get_one();
                            $danhmucnhamay->id = $nm['id_dmnhamay']; $dm = $danhmucnhamay->get_one();
                            echo '<tr>';
                            echo '<td>'.$i.'</td>';
                            echo '<td>'.$dm['ten'].'</td>';
                            echo '<td>'.$nm['tieuchuan'].'</td>';
                            echo '<td>'.$nm['matruyxuatsanpham'].'</td>';
                            echo '<td>'.date("d/m/Y", $nm['ngaysoche']->sec).'</td>';
                            echo '<td>'.date("d/m/Y", $nt['ngaythuhoach']->sec).'</td>';
                            echo '<td>'.$nt['soluong'].'</td>';
                            echo '<td>'.$nt['soxevanchuyen'].'</td>';
                            echo '<td class="text-center link_hienthi"><a href="'.$link_frontend.'/?id='.$nm['_id'].'&type=2&q=rauqua" target="_blank" class="sethienthi"><i class="fa fa-eye text-primary"></i></a></td>';
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
<?php endif; ?>
<?php if(isset($donggoirauqua_list) && $donggoirauqua_list->count() > 0): ?>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title"><i class="ion-leaf"></i> RAU QUẢ - ĐÓNG GÓI</h4>
            </div>
            <div class="panel-body">
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
                            <th class="text-center">Hiển thị</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php
                    if($donggoirauqua_list){
                        $i=1;
                        foreach ($donggoirauqua_list as $dg) {
                            $nhamayrauqua->id = $dg['id_nhamayrauqua']; $nm = $nhamayrauqua->get_one();
                            $nongtrairauqua->id = $nm['id_nongtrairauqua'];$nt=$nongtrairauqua->get_one();
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
<?php endif; ?>
<?php if(isset($banlerauqua_list) && $banlerauqua_list->count() > 0): ?>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title"><i class="ion-leaf"></i> RAU QUẢ - BÁN LẺ</h4>
            </div>
            <div class="panel-body">
         	<table id="data-table" class="table table-striped table-bordered table-hovered">
            		<thead>
            			<tr>
            				<th>STT</th>
            				<th>Tên sản phẩm</th>
            				<th>Nơi bán lẻ</th>
            				<th class="text-center">Hiển thị</th>            				
            			</tr>
            		</thead>
            		<tbody>
            		<?php
            		if($banlerauqua_list){
            			$i=1;
            			foreach($banlerauqua_list as $bl){
                            $donggoirauqua->id = $bl['id_donggoirauqua'];$dg = $donggoirauqua->get_one();
            				echo '<tr>';
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
            				echo '<td class="text-center link_hienthi"><a href="'.$link_frontend.'/?id='.$bl['_id'].'&type=4&q=rauqua" class="sethienthi" target="_blank"><i class="fa fa-eye text-primary"></i></a></td>';
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