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
$nongtrai = new NongTraiTrung();
$nongtrai->id = $id; $nt = $nongtrai->get_one();
$danhmucnongtrai->id = $nt['id_dmnongtrai']; $dmnt = $danhmucnongtrai->get_one();
?>
<?php if($nt) : ?>
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
		<div>Tiêu chuẩn (Standard)</div>
		<div class="f-s-16"><?php echo $nt['tieuchuan']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Số chứng nhận tiêu chuẩn (Standard No.)</div>
		<div class="f-s-16"><?php echo $nt['sochungnhantieuchuan']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Mã đàn (Bird group code)</div>
		<div class="f-s-16"><?php echo $nt['madan']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Số lượng (Quantity)</div>
		<div class="f-s-16"><?php echo $nt['soluong']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Ngày thu hoạch (Date of Harvest)</div>
		<div class="f-s-16"><?php echo $nt['ngaythuhoach'] ? DBConnect::getDate($nt['ngaythuhoach'],"d/m/Y") : '' ; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Nhà máy cung cấp thức ăn (Feed Supplier)</div>
		<div class="f-s-16"><?php echo $nt['nhamaycungcapthucan']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Số xe vận chuyển (Truck)</div>
		<div class="f-s-16"><?php echo $nt['soxevanchuyen']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Tên tài xế (Driver)</div>
		<div class="f-s-16"><?php echo $nt['tentaixe']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<?php else: ?>
	<h3 class="text-center">Xin lỗi! Sản phẩm không tồn tại</h3>
<?php endif; ?>
