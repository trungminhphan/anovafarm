<?php
$danhmucnongtrai = new DanhMucNongTrai();
$danhmucnhamay = new DanhMucNhaMay();
$danhmucbanle = new DanhMucBanLe();
$banle = new BanLeRauQua();$nhamay = new NhaMayRauQua();
$donggoi=new DongGoiRauQua();$nongtrai = new NongTraiRauQua();
$banle->id = $id; $bl = $banle->get_one();
$donggoi->id = $bl['id_donggoirauqua']; $dg = $donggoi->get_one();
$nhamay->id = $dg['id_nhamayrauqua']; $nm = $nhamay->get_one();
$nongtrai->id = $nm['id_nongtrairauqua']; $nt = $nongtrai->get_one();

$danhmucnongtrai->id = $nt['id_dmnongtrai']; $dmnt = $danhmucnongtrai->get_one();
$danhmucnhamay->id = $dg['id_dmnhamay']; $nmdg = $danhmucnhamay->get_one();
$danhmucnhamay->id = $nm['id_dmnhamay']; $nmsc = $danhmucnhamay->get_one();
$danhmucnongtrai->id = $nt['id_dmnongtrai']; $dmnt = $danhmucnongtrai->get_one();
?>
<?php if($bl) : ?>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Tên sản phẩm (Products)</div>
		<div class="f-s-16"><?php echo $dg['tensanpham']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Qui cách (Packing)</div>
		<div class="f-s-16"><?php echo $dg['quicachdonggoi']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Số lô (Lot no.)</div>
		<div class="f-s-16"><?php echo $dg['solo']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Nông trại (Farm)</div>
		<div class="f-s-16"><?php echo $dmnt['ten'] .', ' . $dmnt['diachi']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Tiêu chuẩn của trại (Standard)</div>
		<div class="f-s-16"><?php echo $nt['tieuchuan']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Số chứng nhận tiêu chuẩn (Standard no.)</div>
		<div class="f-s-16"><?php echo $nt['sochungnhantieuchuan']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Nơi sơ chế (Processing factory)</div>
		<div class="f-s-16"><?php echo $nmsc['ten']  . ', ' . $nmsc['diachi'] ; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Nơi đóng gói (Packing factory)</div>
		<div class="f-s-16"><?php echo $nmdg['ten']  . ', ' . $nmdg['diachi'] ; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Ngày đóng gói (Date of packing)</div>
		<div class="f-s-16"><?php echo $dg['ngaydonggoi'] ? date("d/m/Y", $dg['ngaydonggoi']->sec) : '' ; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Hạn sử dụng (Expiry Date)</div>
		<div class="f-s-16"><?php echo $dg['hansudung']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Tên và địa chỉ nơi bán lẻ (Retailer)</div>
		<div class="f-s-16">
		<?php
		if($bl['id_dmbanle']){
			foreach($bl['id_dmbanle'] as $key => $value){
				$danhmucbanle->id = $value; $dmbl = $danhmucbanle->get_one();
				echo $dmbl['ten'] .', '. $dmbl['diachi'] . '<br/>';
			}
		}
		?>
		</div>
	</div>
	<div class="col-md-3"></div>
</div>
<?php else: ?>
	<h3 class="text-center">Xin lỗi! Sản phẩm không tồn tại</h3>
<?php endif; ?>