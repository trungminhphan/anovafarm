<?php
$danhmucnongtrai = new DanhMucNongTrai();
$danhmucnhamay = new DanhMucNhaMay();
$nhamay = new NhaMay();$nongtrai = new NongTrai();
$nhamay->id = $id; $nm = $nhamay->get_one();
$danhmucnhamay->id = $nm['id_dmnhamay']; $dmnm = $danhmucnhamay->get_one();
$nongtrai->id = $nm['id_nongtrai']; $nt = $nongtrai->get_one();
$danhmucnongtrai->id = $nt['id_dmnongtrai']; $dmnt = $danhmucnongtrai->get_one();
?>
<?php if($nm) : ?>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Nơi giết mổ (Slaughter House)</div>
		<div class="f-s-16"><?php echo $dmnm['ten'] . '<br />' . $dmnm['diachi']; ?></div>
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
		<div>Trại chăn nuôi (Farm)</div>
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
		<div>Mã đàn (Animal group code)</div>
		<div class="f-s-16"><?php echo $nt['madan']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Số lô giết mổ (Slaughter lot.no)</div>
		<div class="f-s-16"><?php echo $nm['solo']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Số giấy kiểm dịch thú sống (Animal Health Certificate no.)</div>
		<div class="f-s-16"><?php echo $nm['sogiaykiemdichthusong']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Giấy chứng nhận kiểm soát giết mổ (Certificate no.)</div>
		<div class="f-s-16"><?php echo $nm['giaychungnhan']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Nhân viên thú y kiểm soát (Veterinary Checker)</div>
		<div class="f-s-16"><?php echo $nm['nhanvienkiemsoat']; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>
<div class="row p-t-15">
	<div class="col-md-3"></div>
	<div class="col-md-6 p-b-5" style="border-bottom: 1px solid #bbb;">
		<div>Ngày giết mổ (Date of Slaughter)</div>
		<div class="f-s-16"><?php echo $nm['ngaygiogietmo'] ? date("d/m/Y", $nm['ngaygiogietmo']->sec) : ''; ?></div>
	</div>
	<div class="col-md-3"></div>
</div>


<?php else: ?>
	<h3 class="text-center">Xin lỗi! Sản phẩm không tồn tại</h3>
<?php endif; ?>