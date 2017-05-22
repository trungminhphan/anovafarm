<?php
require_once('header_sync.php');
$id_congty = $users->get_id_congty();
$id_user = $users->get_userid();
$nongtrai = new NongTrai();
$danhmucnongtrai = new DanhMucNongTrai();$danhmuccongty = new DanhMucCongTy();
$dir = '../uploads/';
$files = scandir($dir);
foreach($files as $file => $filename){
	if($nongtrai->check_exist_file($filename)){
		echo 'Trung file rồi <br />';
	} else {
		$arr_file = explode('.', $filename);
		if(file_exists($dir . $filename)){
			$ext = end($arr_file);
			if(strtolower($ext) == 'csv'){
				$row = 0;
				if (($handle = fopen($dir . $filename, "r")) !== FALSE) {
					while (($data = fgetcsv($handle, '', ",")) !== FALSE) {
						if($row > 0){
							$danhmuccongty->ten = trim($data[29]);
							$id_dmcongty = $danhmuccongty->get_id_by_ten();
							if($id_dmcongty == $id_congty && $data[29]){
								$danhmucnongtrai->ten = trim($data[10]);
								$id_dmnongtrai = $danhmucnongtrai->get_id_by_ten();
								if(!$id_dmnongtrai){
									$id_dmnongtrai = new MongoId();
									$danhmucnongtrai->id = $id_dmnongtrai;
									$danhmucnongtrai->diachi = $data[11];
									$danhmucnongtrai->id_congty = $id_dmcongty;
									$danhmucnongtrai->insert_id();
								}
								$nongtrai->TYPE= $data[0];//0
								$nongtrai->SUB_TYPE=$data[1];//1
								$nongtrai->CODE=$data[2];//2
								$nongtrai->TRANSFER_DATE=$data[6];//6
								$nongtrai->TRANSFER_FILE_NAME=$data[7];//7
								$nongtrai->CREATED_BY=$data[9];//9
								$nongtrai->id_dmnongtrai = $id_dmnongtrai;
								$nongtrai->tieuchuan = $data[12];
								$nongtrai->ngaygioxuat = new MongoDate(convert_date_yyyy_mm_dd(substr($data[13],0,10)));
								$nongtrai->ngaygioxuat_1 = $data[13];
								$nongtrai->madan = $data[14];
								$nongtrai->soluong = intval($data[15]);
								$nongtrai->nhamaycungcapthucan = $data[17];
								$nongtrai->soxevanchuyen = $data[19];
								$nongtrai->tentaixe = $data[20];
								$nongtrai->sogiaykiemdichthusong = $data[21];
								$nongtrai->nhanvienkiemdich =  $data[22];
								$nongtrai->hienthi = 1;
								$nongtrai->id_user = $id_user;
								$nongtrai->id_congty = $id_dmcongty;
								if($nongtrai->check_exist()){
						            $nongtrai->delete_by_code();
						        }
						       $nongtrai->sync();
								echo 'Tên trại: '. $data[10] .'<br />';
								echo 'Địa chỉ: '. $data[11] .'<br />';
								echo 'Tiêu chuẩn: '. $data[12] .'<br />';
								echo 'Ngày giờ xuất: '. $data[13].'<br />';
								echo 'Mã đàn: '. $data[14] .'<br />';
								echo 'Số lượng: '. $data[15] .'<br />';
								echo 'Nhà máy cung cấp thức ăn: '. $data[17] .'<br />';
								echo 'Số xe vận chuyển: '. $data[19] .'<br />';
								echo 'Tên tài xế: '. $data[21] .'<br />';
								echo 'Số giấy kiểm dịch thú sống: '. $data[21] .'<br />';
								echo 'Nhân viên kiểm dịch: '. $data[22] .'<br />';
								echo 'Công ty: ' . $data[24] . '<br />';
								echo 'Địa chỉ: ' . $data[26] . '<br />';
								echo '<hr />';
							}
					    }
					    $row++;
					}
				}
			}	
		}
	}
}
?>
<div style="clear:both;"></div>
<?php require_once('footer.php'); ?>
<!-- ================== BEGIN PAGE LEVEL JS ================== -->
<script src="../assets/plugins/gritter/js/jquery.gritter.js"></script>
<script src="../assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
        App.init();
    });
</script>