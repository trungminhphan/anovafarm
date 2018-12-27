<?php
require_once "../vendor/autoload.php";
use \Models\Users;
use \Models\SessionManager;
use \Models\NongTrai;
require_once('../inc/functions.inc.php');
require_once('../inc/config.inc.php');
$nongtrai = new NongTrai();
$dir = 'uploads/';
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
							$ngaygioxuat = get_char($data[13], 1, 10);
							$gioxuat = intval(get_char($data[13], 12, 13));
							$phutxuat = intval(get_char($data[13], 15, 16));
							$ngaygioxuat = DBConnect::setDate(),//new MongoDate(convert_date_yyyy_mm_dd_2($ngaygioxuat, $gioxuat, $phutxuat));
							$nongtrai->type = $data[0];
							$nongtrai->code = $data[2];
							$nongtrai->filename = $data[7];
							$nongtrai->ten = $data[10];
							$nongtrai->diachi = $data[11];
							$nongtrai->tieuchuan = $data[12];
							$nongtrai->ngaygioxuat = $ngaygioxuat;
							$nongtrai->madan = $data[14];
							$nongtrai->soluong = $data[15];
							$nongtrai->nhamaycungcapthucan = $data[17];
							$nongtrai->ATTRIBUTE9 = $data[18];
							$nongtrai->soxevanchuyen = $data[19];
							$nongtrai->tentaixe = $data[20];
							$nongtrai->sogiaykiemdichthusong = $data[21];
							$nongtrai->nhanvienkiemdich = $data[22];
							if($nongtrai->check_exist()){
					            $nongtrai->delete();
					        }
					        $nongtrai->insert();
					    }
					    $row++;
					}
				}
			}
		}
	}
}

?>
