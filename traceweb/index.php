<?php
//http://http://traceweb.org/?PR_TYPE=01&PR_CODE=15204-100-1130867
function __autoload($classname){
    require_once('../cls/class.' . strtolower($classname) . '.php');
}
$nongtrai = new NongTrai();
$id = isset($_GET['id']) ? $_GET['id'] : '';
$type = isset($_GET['type']) ? $_GET['type'] : '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>ANOVA - THÔNG TIN TRUY XUẤT NGUỒN GỐC</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container-fluid">
<div class="row logo">
<div class="col-sm-12">
<?php
    echo '<img  src="images/logo_farm.gif" width="100px"/>';
    /*if(file_exists('images/' . $nt['code'] . '.gif')){
        echo '<img  src="images/'.$nt['code'].'.gif" width="100px"/>';
    } else {
        echo '<img  src="images/logo_farm.gif" width="100px"/>';
    }*/
?>
</div></div>
<div class="row title text-center">
	<div class="col-sm-12">
    <h4>THÔNG TIN TRUY XUẤT NGUỒN GỐC 
    <?php
    if($type == 1) echo ' NÔNG TRẠI'; 
    elseif($type==2) echo ' NHÀ MÁY GIẾT MỔ';
    elseif($type==3) echo ' ĐÓNG GÓI';
    elseif($type==4) echo ' NƠI BÁN LẺ';
    ?>
    </h4> 
    </div></div>
<?php
if($type==1 && $id) :
    $nongtrai = new NongTrai();$danhmucnongtrai = new DanhMucNongTrai();
    $nongtrai->id = $id; $nt = $nongtrai->get_one();
    $danhmucnongtrai->id = $nt['id_dmnongtrai']; $dm = $danhmucnongtrai->get_one();
?>
<div class="row index">
  	<div class="col-sm-2"></div>
    <div class="col-sm-8">
        <div class="row">
        <br>
        	<div class="col-sm-12 tag">Tên và địa chỉ trại <span class="english">(Farm)</span></div>
            <div class="col-sm-12 nt"><?php echo $dm['ten'] . ', ' . $dm['diachi'] ; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        	<div class="col-sm-12 tag">Tiêu chuẩn <span class="english">(Standard)</span></div>
            <div class="col-sm-12 nt">- <?php echo str_replace(',', '<br />- ',$nt['tieuchuan']); ?>
            <hr class="line">
            </div>
        </div>
         <div class="row">
        	<div class="col-sm-12 tag">Ngày và giờ xuất <span class="english">(Time of delivery)</span></div>
            <div class="col-sm-12 nt"><?php echo date("d/m/Y/ H:i", $nt['ngaygioxuat']->sec); ?>
            <hr class="line">
            </div>
        </div>
         <div class="row">
        	<div class="col-sm-12 tag">Mã đàn <span class="english">(Animal group code)</span></div>
            <div class="col-sm-12 nt"><?php echo $nt['madan']; ?>
            <hr class="line">
            </div>
        </div>
        
        <div class="row">
        	<div class="col-sm-12 tag">Số lượng heo <span class="english">(Quantity)</span></div>
            <div class="col-sm-12 nt"><?php echo $nt['soluong']; ?>
            <hr class="line">
            </div>
        </div>
        
        <div class="row">
        	<div class="col-sm-12 tag">Nhà máy cung cấp thức ăn <span class="english">(Feed Supplier)</span></div>
            <div class="col-sm-12 nt"><?php echo $nt['nhamaycungcapthucan']; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        	<div class="col-sm-12 tag">Số xe vận chuyển <span class="english">(Truck)</span></div>
            <div class="col-sm-12 nt"><?php echo $nt['soxevanchuyen']; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        	<div class="col-sm-12 tag">Tên tài xế <span class="english">(Driver)</span></div>
            <div class="col-sm-12 nt"><?php echo $nt['tentaixe']; ?>
            <hr class="line">
            </div>
        </div>
        
         <div class="row">
        	<div class="col-sm-12 tag">Số giấy kiểm dịch thú sống <span class="english">(Animal Health Certificate no.)</span></div>
            <div class="col-sm-12 nt"><?php echo $nt['sogiaykiemdichthusong']; ?>
            <hr class="line">
            </div>
        </div>        
    </div>
    <div class="col-sm-2"></div>
</div>
<?php
elseif($type==2 && $id):
$nongtrai = new NongTrai();$danhmucnongtrai = new DanhMucNongTrai();
$nhamay = new NhaMay();$nhamay->id = $id; $nm = $nhamay->get_one();
$danhmucnhamay = new DanhMucNhaMay(); $danhmucnhamay->id = $nm['id_dmnhamay']; $dm = $danhmucnhamay->get_one();
$nongtrai->id = $nm['id_nongtrai'];$nt = $nongtrai->get_one();
$danhmucnongtrai->id = $nt['id_dmnongtrai']; $dmnt = $danhmucnongtrai->get_one();
?>
<div class="row index">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Tên và địa chỉ nơi giết mổ <span class="english">(Factory)</span></div>
            <div class="col-sm-12 nt"><?php echo $dm['ten'] . ', ' . $dm['diachi'] ; ?>
            <hr class="line">
            </div>
        </div>
         <div class="row">
         <br />
            <div class="col-sm-12 tag">Tiêu chuẩn nơi giết mổ <span class="english">(Standard)</span></div>
            <div class="col-sm-12 nt">- <?php echo str_replace(',', '<br />- ',$nm['tieuchuan']); ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Tên và địa chỉ trại <span class="english">(Farm)</span></div>
            <div class="col-sm-12 nt"><?php echo $dmnt['ten'] . ', ' . $dmnt['diachi'] ; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Tiêu chuẩn của trại <span class="english">(Standard)</span></div>
            <div class="col-sm-12 nt"><?php echo $nt['tieuchuan']; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Mã đàn</span></div>
            <div class="col-sm-12 nt"><?php echo $nt['madan']; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br />
            <div class="col-sm-12 tag">Số lô heo giết mổ<span class="english">(No)</span></div>
            <div class="col-sm-12 nt"><?php echo $nm['solo']; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br />
            <div class="col-sm-12 tag">Số giấy kiểm dịch thú sống. <span class="english">(No)</span></div>
            <div class="col-sm-12 nt"><?php echo $nm['sogiaykiemdichthusong']; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br />
            <div class="col-sm-12 tag">Giấy chứng nhận kiểm soát giết mổ <span class="english">(Certificate no.)</span></div>
            <div class="col-sm-12 nt"><?php echo $nm['giaychungnhan']; ?>
            <hr class="line">
            </div>
        </div> 
        <div class="row">
        <br />
            <div class="col-sm-12 tag">Nhân viên thú y kiểm soát <span class="english">(Checker)</span></div>
            <div class="col-sm-12 nt"><?php echo $nm['nhanvienkiemsoat']; ?>
            <hr class="line">
            </div>
        </div> 
        <div class="row">
        <br />
            <div class="col-sm-12 tag">Ngày giờ giết mổ <span class="english">(Time)</span></div>
            <div class="col-sm-12 nt"><?php echo date("d/m/Y H:i", $nm['ngaygiogietmo']->sec); ?>
            <hr class="line">
            </div>
        </div> 
    </div>
    <div class="col-sm-2"></div>
</div>
<?php
elseif($type==3 && $id):
    $nongtrai = new NongTrai();$donggoi = new DongGoi();$nhamay = new NhaMay();
    $danhmucnhamay = new DanhMucNhaMay();$danhmucnongtrai = new DanhMucNongTrai();
    $donggoi->id = $id; $dg = $donggoi->get_one();
    $nhamay->id = $dg['id_nhamay']; $nm = $nhamay->get_one();
    $nongtrai->id = $nm['id_nongtrai'];$nt = $nongtrai->get_one();
    $danhmucnhamay->id = $nm['id_dmnhamay']; $dm = $danhmucnhamay->get_one();
    $danhmucnongtrai->id = $nt['id_dmnongtrai'];$dmnt = $danhmucnongtrai->get_one();
?>
<div class="row index">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Tên sản phẩm <span class="english">(Products)</span></div>
            <div class="col-sm-12 nt"><?php echo $dg['tensanpham']; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Quy cách</div>
            <div class="col-sm-12 nt"><?php echo $dg['quicachdonggoi']; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Số lô</div>
            <div class="col-sm-12 nt"><?php echo $dg['solo']; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Tiêu chuẩn</div>
            <div class="col-sm-12 nt"><?php echo $dg['tieuchuan']; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Số chứng nhận tiêu chuẩn</div>
            <div class="col-sm-12 nt"><?php echo $dg['sochungnhantieuchuan']; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Nhà máy giết mổ và đóng gói <span class="english">(Factory)</span></div>
            <div class="col-sm-12 nt"><?php echo $dm['ten'] . ', ' . $dm['diachi'] ; ?>
            <hr class="line">
            </div>
        </div>
                
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Qui cách đóng gói<span class="english">(Packing)</span></div>
            <div class="col-sm-12 nt"><?php echo $dg['quicachdonggoi']; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Ngày giờ giết mổ</div>
            <div class="col-sm-12 nt"><?php echo date("d/m/Y/ H:i", $nm['ngaygiogietmo']->sec); ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Ngày giờ đóng gói <span class="english">(Time)</span></div>
            <div class="col-sm-12 nt"><?php echo date("d/m/Y/ H:i", $dg['ngaygiodonggoi']->sec); ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Hạn sử dụng</span></div>
            <div class="col-sm-12 nt"><?php echo $dg['hansudung']; ?>
            <hr class="line">
            </div>
        </div>
    </div>
   <div class="col-sm-2"></div>
</div>
<?php
elseif($type==4 && $id):
    $nongtrai = new NongTrai();$donggoi = new DongGoi();$nhamay = new NhaMay();$banle = new BanLe();
    $danhmucnhamay = new DanhMucNhaMay();$danhmucnongtrai = new DanhMucNongTrai();$danhmucbanle = new DanhMucBanLe();
    $banle->id = $id; $bl = $banle->get_one();
    $donggoi->id = $bl['id_donggoi']; $dg = $donggoi->get_one();
    $nhamay->id = $dg['id_nhamay']; $nm = $nhamay->get_one();
    $nongtrai->id = $nm['id_nongtrai'];$nt = $nongtrai->get_one();
    $danhmucnhamay->id = $nm['id_dmnhamay']; $dm = $danhmucnhamay->get_one();
    $danhmucnongtrai->id = $nt['id_dmnongtrai']; $dmnt = $danhmucnongtrai->get_one();
?>
<div class="row index">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Tên và địa chỉ nơi bán lẻ <span class="english"> (Retailer)</span></div>
            <div class="col-sm-12 nt">
            <?php
            if($bl['id_dmbanle']){
                foreach($bl['id_dmbanle'] as $key=>$value){
                    $danhmucbanle->id = $value; $dmbl = $danhmucbanle->get_one();
                    echo $dmbl['ten'] . ', ' . $dmbl['diachi'] . '<br />';
                }
            }
            ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Tên sản phẩm <span class="english"> (Products)</span></div>
            <div class="col-sm-12 nt"><?php echo $dg['tensanpham']; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Tên và địa chỉ trại <span class="english"> (Farm)</span></div>
            <div class="col-sm-12 nt"><?php echo $dmnt['ten'] . ', ' . $dmnt['diachi'] ; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Tiêu chuẩn của trại</div>
            <div class="col-sm-12 nt"><?php echo $nt['tieuchuan']; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Số chứng nhận tiêu chuẩn</div>
            <div class="col-sm-12 nt"><?php echo $dg['sochungnhantieuchuan']; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Số lô</div>
            <div class="col-sm-12 nt"><?php echo $dg['solo']; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Tên và địa chỉ nơi giết mổ <span class="english"> (Factory)</span></div>
            <div class="col-sm-12 nt"><?php echo $dm['ten'] . ', ' . $dm['diachi'] ; ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Ngày giờ giết mổ</div>
            <div class="col-sm-12 nt"><?php echo date("d/m/Y/ H:i", $nm['ngaygiogietmo']->sec); ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Qui cách đóng gói<span class="english"> (Packing)</span></div>
            <div class="col-sm-12 nt">- <?php echo str_replace(',', '<br />- ',$dg['quicachdonggoi']); ?>
            <hr class="line">
            </div>
        </div>
        <div class="row">
        <br>
            <div class="col-sm-12 tag">Ngày giờ đóng gói <span class="english"> (Time)</span></div>
            <div class="col-sm-12 nt"><?php echo date("d/m/Y/ H:i", $dg['ngaygiodonggoi']->sec); ?>
            <hr class="line">
            </div>
        </div>
    </div>
   <div class="col-sm-2"></div>
</div>

<?php else: ?>
    <div class="row title text-center">
        <div class="col-sm-12">
            <h4>Không tìm thấy thông tin</h4> 
        </div>
    </div>
<?php endif; ?>
  
</div>
<footer class="container-fluid text-center">
  <p>Copyright 2016 by Anova Corp. All rights reserved</p>
</footer>
</body>
</html>


