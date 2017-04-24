<?php
$danhmucnongtrai = new DanhMucNongTrai();
$nongtrai = new NongTraiRauQua();
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
		<div>Ngày thu hoạch (Date of Harvest)</div>
		<div class="f-s-16"><?php echo $nt['ngaythuhoach'] ? date("d/m/Y", $nt['ngaythuhoach']->sec) : '' ; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Mã truy xuất sản phẩm (Trace code)</div>
		<div class="f-s-16"><?php echo $nt['matruyxuatsanpham']; ?></div>
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