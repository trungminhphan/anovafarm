<?php
$danhmucnongtrai = new DanhMucNongTrai();
$danhmucnhamay = new DanhMucNhaMay();
$danhmucbanle = new DanhMucBanLe();
$banle = new BanLe();$donggoi=new DongGoi();
$nhamay = new NhaMay();$nongtrai = new NongTrai();
$banle->id = $id; $bl = $banle->get_one();
$donggoi->id = $bl['id_donggoi']; $dg = $donggoi->get_one();
$nhamay->id = $dg['id_nhamay']; $nm = $nhamay->get_one();
$danhmucnhamay->id = $nm['id_dmnhamay']; $dmnm = $danhmucnhamay->get_one();
$nongtrai->id = $nm['id_nongtrai']; $nt = $nongtrai->get_one();
$danhmucnongtrai->id = $nt['id_dmnongtrai']; $dmnt = $danhmucnongtrai->get_one();
?>
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
		<div>Trại chăn nuôi (Farm)</div>
		<div class="f-s-16"><?php echo $dmnt['ten'] . ', ' . $dmnt['diachi']; ?></div>
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
		<div class="f-s-16"><?php echo $nt['sogiaykiemdichthusong']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Nơi giết mổ (Slaughter House)</div>
		<div class="f-s-16"><?php echo $dmnm['ten'] . ', ' . $dmnm['diachi']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Tiêu chuẩn nhà máy giết mổ (Standard)</div>
		<div class="f-s-16"><?php echo $nm['tieuchuan']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Số chứng nhận tiêu chuẩn (Standard no.)</div>
		<div class="f-s-16"><?php echo $nm['giaychungnhan']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Ngày giết mổ (Date of Slaughter)</div>
		<div class="f-s-16"><?php echo date("d/m/Y", $nm['ngaygiogietmo']->sec); ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Ngày đóng gói (Date of Packing)</div>
		<div class="f-s-16"><?php echo date("d/m/Y", $dg['ngaygiodonggoi']->sec); ?></div>
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
		<div>Nơi bán lẻ (Retailer)</div>
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