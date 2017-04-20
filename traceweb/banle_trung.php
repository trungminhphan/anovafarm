<?php
$danhmucnongtrai = new DanhMucNongTrai();
$danhmucnhamay = new DanhMucNhaMay();
$danhmucbanle = new DanhMucBanLe();
$banle = new BanLeTrung();$donggoi=new DongGoiTrung();$nongtrai = new NongTraiTrung();
$banle->id = $id; $bl = $banle->get_one();
$donggoi->id = $bl['id_donggoitrung']; $dg = $donggoi->get_one();
//$nhamay->id = $dg['id_nhamay']; $nm = $nhamay->get_one();
//$danhmucnhamay->id = $nm['id_dmnhamay']; $dmnm = $danhmucnhamay->get_one();
//$nongtrai->id = $nm['id_nongtrai']; $nt = $nongtrai->get_one();
//$danhmucnongtrai->id = $nt['id_dmnongtrai']; $dmnt = $danhmucnongtrai->get_one();
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