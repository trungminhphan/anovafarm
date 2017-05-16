<?php
require_once('header_sync.php');
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
				//echo '<table border="1">';
				$row = 0;
				if (($handle = fopen($dir . $filename, "r")) !== FALSE) {
					while (($data = fgetcsv($handle, '', ",")) !== FALSE) {
						if($row > 0){
							$danhmucnongtrai->ten = trim($data[10]);
							$id_dmnongtrai = $danhmucnongtrai->get_id_by_ten();
							if(!$id_dmnongtrai){
								$id_dmnongtrai = new MongoId();
								$danhmuccongty->ten = trim($data[24]);
								$id_dmcongty = $danhmuccongty->get_id_by_ten();
								if(!$id_dmcongty){
									$id_dmcongty = new MongoId();
									$danhmuccongty->id = $id_dmcongty;
									$danhmuccongty->diachi = $data[26];
									$danhmuccongty->insert_id();
								}
								$danhmucnongtrai->id = $id_dmnongtrai;
								$danhmucnongtrai->diachi = $data[11];
								$danhmucnongtrai->id_congty = $id_dmcongty;
								$danhmucnongtrai->insert_id();
							} else {
								$id_dmcongty = $danhmucnongtrai->get_id_congty();
							}
							$nongtrai->TYPE= $data[0];//0
							$nongtrai->SUB_TYPE=$data[1];//1
							$nongtrai->CODE=$data[2];//2
							$nongtrai->TRANSFER_DATE=$data[6];//6
							$nongtrai->TRANSFER_FILE_NAME=$data[7];//7
							$nongtrai->CREATED_BY=$data[9];//9
							$nongtrai->id_dmnongtrai = $id_dmnongtrai;
							$nongtrai->tieuchuan = $data[12];
							$nongtrai->ngaygioxuat = new MongoDate(convert_date_yyyy_mm_dd(get_char($data[13],1,10)));
							$nongtrai->ngaygioxuat_1 = $data[13];
							$nongtrai->madan = $data[14];
							$nongtrai->soluong = intval($data[15]);
							$nongtrai->nhamaycungcapthucan = $data[17];
							$nongtrai->soxevanchuyen = $data[19];
							$nongtrai->tentaixe = $data[21];
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

							/*$query = array (
								'type' => $data[0],
								'sub_type' => $data[1],
								'code' => $data[2],
								''
							);*/

							/*
							$query = array(
								'id_dmnongtrai' => $this->id_dmnongtrai ? new MongoId($this->id_dmnongtrai) : '',
								'tieuchuan' => $this->tieuchuan,
								'ngaygioxuat' => $this->ngaygioxuat,
								'madan' => $this->madan,
								'soluong' => intval($this->soluong),
								'nhamaycungcapthucan' => $this->nhamaycungcapthucan,
								'soxevanchuyen' => $this->soxevanchuyen,
								'tentaixe' => $this->tentaixe,
								'sogiaykiemdichthusong' => $this->sogiaykiemdichthusong,
								'nhanvienkiemdich' => $this->nhanvienkiemdich,
								'hienthi' => intval($this->hienthi),
								'date_post' => new MongoDate(),
								'id_user' => $this->id_user ? new MongoId($this->id_user) : '',
								'id_congty' => $this->id_congty ? new MongoId($this->id_congty) : ''
							);*/
							/*$nongtrai->TYPE = $data[0];
							$nongtrai->SUB_TYPE = $data[1];
							$nongtrai->CODE = $data[2];
							$nongtrai->UPDATE_ALLOWED = $data[3];
							$nongtrai->MANUAL = $data[4];
							$nongtrai->TRANSFERRED = $data[5];
							$nongtrai->TRANSFER_DATE = $data[6];
							$nongtrai->TRANSFER_FILE_NAME = $data[7];
							$nongtrai->CREATION_DATE = $data[8];
							$nongtrai->CREATED_BY = $data[9];
							$nongtrai->ATTRIBUTE1 = $data[10];
							$nongtrai->ATTRIBUTE2 = $data[11];
							$nongtrai->ATTRIBUTE3 = $data[12];
							$nongtrai->ATTRIBUTE4 = $data[13];
							$nongtrai->ATTRIBUTE5 = $data[14];
							$nongtrai->ATTRIBUTE6 = $data[15];
							$nongtrai->ATTRIBUTE7 = $data[16];
							$nongtrai->ATTRIBUTE8 = $data[17];
							$nongtrai->ATTRIBUTE9 = $data[18];
							$nongtrai->ATTRIBUTE10 = $data[19];
							$nongtrai->ATTRIBUTE11 = $data[20];
							$nongtrai->ATTRIBUTE12 = $data[21];
							$nongtrai->ATTRIBUTE13 = $data[22];
							$nongtrai->ATTRIBUTE14 = $data[23];
							$nongtrai->ATTRIBUTE15 = $data[24];
							$nongtrai->ATTRIBUTE16 = $data[25];
							$nongtrai->ATTRIBUTE17 = $data[26];
							$nongtrai->ATTRIBUTE18 = $data[27];
							$nongtrai->ATTRIBUTE19 = $data[28];
							$nongtrai->ATTRIBUTE20 = $data[29];
							$nongtrai->ATTRIBUTE21 = $data[30];
							$nongtrai->ATTRIBUTE22 = $data[31];
							$nongtrai->ATTRIBUTE23 = $data[32];
							$nongtrai->ATTRIBUTE24 = $data[33];
							$nongtrai->ATTRIBUTE25 = $data[34];
							$nongtrai->ATTRIBUTE26 = $data[35];
							$nongtrai->ATTRIBUTE27 = $data[36];
							$nongtrai->ATTRIBUTE28 = $data[37];
							$nongtrai->ATTRIBUTE29 = $data[38];
							$nongtrai->ATTRIBUTE30 = $data[39];
							$nongtrai->ATTRIBUTE31 = $data[40];
							$nongtrai->ATTRIBUTE32 = $data[41];
							$nongtrai->ATTRIBUTE33 = $data[42];
							$nongtrai->ATTRIBUTE34 = $data[43];
							$nongtrai->ATTRIBUTE35 = $data[44];
							$nongtrai->ATTRIBUTE36 = $data[45];
							$nongtrai->ATTRIBUTE37 = $data[46];
							$nongtrai->ATTRIBUTE38 = $data[47];
							$nongtrai->ATTRIBUTE39 = $data[48];
							$nongtrai->ATTRIBUTE40 = $data[49];
							$nongtrai->ATTRIBUTE41 = $data[50];
							$nongtrai->ATTRIBUTE42 = $data[51];
							$nongtrai->ATTRIBUTE43 = $data[52];
							$nongtrai->ATTRIBUTE44 = $data[53];
							$nongtrai->ATTRIBUTE45 = $data[54];
							$nongtrai->ATTRIBUTE46 = $data[55];
							$nongtrai->ATTRIBUTE47 = $data[56];
							$nongtrai->ATTRIBUTE48 = $data[57];
							$nongtrai->ATTRIBUTE49 = $data[58];
							$nongtrai->ATTRIBUTE50 = $data[59];
							$nongtrai->ATTRIBUTE51 = $data[60];
							$nongtrai->ATTRIBUTE52 = $data[61];
							$nongtrai->ATTRIBUTE53 = $data[62];
							$nongtrai->ATTRIBUTE54 = $data[63];
							$nongtrai->ATTRIBUTE55 = $data[64];
							$nongtrai->ATTRIBUTE56 = $data[65];
							$nongtrai->ATTRIBUTE57 = $data[66];
							$nongtrai->ATTRIBUTE58 = $data[67];
							$nongtrai->ATTRIBUTE59 = $data[68];
							$nongtrai->ATTRIBUTE60 = $data[69];
							if($nongtrai->check_exist()){
					            $nongtrai->delete();
					        }*/
					        //$nongtrai->insert();
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