<?php
use \Models\NongTrai;
use \Models\NhaMay;
use \Models\DongGoi;
use \Models\BanLe;
use \Models\NongTraiTrung;
use \Models\DongGoiTrung;
use \Models\BanLeTrung;
use \Models\NongTraiRauQua;
use \Models\NhaMayRauQua;
use \Models\DongGoiRauQua;
use \Models\BanLeRauQua;
use \Models\DanhMucNongTrai;
use \Models\DanhMucNhaMay;
use \Models\DanhMucBanLe;
use \Models\DBConnect;

$danhmucnongtrai = new DanhMucNongTrai();
$danhmucnhamay = new DanhMucNhaMay();
$danhmucbanle = new DanhMucBanLe();
$nhamay = new NhaMayRauQua();$nongtrai = new NongTraiRauQua();
$nhamay->id = $id; $nm = $nhamay->get_one();
$nongtrai->id = $nm['id_nongtrairauqua']; $nt = $nongtrai->get_one();
$danhmucnongtrai->id = $nt['id_dmnongtrai']; $dmnt = $danhmucnongtrai->get_one();
$danhmucnhamay->id = $nm['id_dmnhamay']; $nmsc = $danhmucnhamay->get_one();
$danhmucnongtrai->id = $nt['id_dmnongtrai']; $dmnt = $danhmucnongtrai->get_one();
?>
<?php if($nm) : ?>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Nơi sơ chế (Processing factory)</div>
		<div class="f-s-16"><?php echo $nmsc['ten'] .'<br/>' . $nmsc['diachi']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>

<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Tiêu chuẩn nơi sơ chế (Standard)</div>
		<div class="f-s-16"><?php echo $nm['tieuchuan']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Số chứng nhận tiêu chuẩn (Standard no.)</div>
		<div class="f-s-16"><?php echo $nm['sochungnhantieuchuan']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Nông trại (Farm)</div>
		<div class="f-s-16"><?php echo $dmnt['ten'] . '<br />' . $dmnt['diachi']; ?></div>
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
		<div>Mã truy xuất sản phẩm (Trace code)</div>
		<div class="f-s-16"><?php echo $nm['matruyxuatsanpham']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Ngày sơ chế (Date of processing)</div>
		<div class="f-s-16"><?php echo $nm['ngaysoche'] ? DBConnet::getDate($nm['ngaysoche'],"d/m/Y") : '' ; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<?php else: ?>
	<h3 class="text-center">Xin lỗi! Sản phẩm không tồn tại</h3>
<?php endif; ?>
