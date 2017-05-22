<?php
class NongTrai {
	const COLLECTION = 'nongtrai';
	private $_mongo;
	private $_collection;
	public $id = '';
	public $TYPE='';//0
	public $SUB_TYPE='';//1
	public $CODE='';//2
	public $TRANSFER_DATE='';//6
	public $TRANSFER_FILE_NAME='';//7
	public $CREATED_BY='';//9
	public $id_dmnongtrai = '';
	public $tieuchuan = '';
	public $ngaygioxuat = '';
	public $ngaygioxuat_1 = '';
	public $madan = '';
	public $soluong = '';
	public $nhamaycungcapthucan = '';
	public $soxevanchuyen = '';
	public $tentaixe = '';
	public $sogiaykiemdichthusong = '';
	public $nhanvienkiemdich = '';
	public $hienthi = 0;
	public $date_post = '';
	public $id_user = '';
	public $id_congty = '';

	public function __construct(){
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(NongTrai::COLLECTION);
	}

	public function get_all_list(){
		return $this->_collection->find()->sort(array('date_post'=>-1));
	}

	public function get_list_by_user(){
		$query = array('id_user' => new MongoId($this->id_user));
		return $this->_collection->find($query)->sort(array('date_post'=>-1));
	}

	public function get_list_by_congty(){
		$query = array('id_congty' => new MongoId($this->id_congty));
		return $this->_collection->find($query)->sort(array('date_post'=>-1));	
	}

	public function get_list_condition($condition){
		return $this->_collection->find($condition)->sort(array('date_post'=>-1));
	}

	public function get_one(){
		$query = array('_id' => new MongoId($this->id));
		return $this->_collection->findOne($query);
	}

	public function insert(){
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
		);
		return $this->_collection->insert($query);
	}
	public function sync(){
		$query = array(
			'TYPE' => $this->TYPE,
			'SUB_TYPE' => $this->SUB_TYPE,
			'CODE' => $this->CODE,
			'TRANSFER_DATE' => $this->TRANSFER_DATE,
			'TRANSFER_FILE_NAME' => $this->TRANSFER_FILE_NAME,
			'CREATED_BY' => $this->CREATED_BY,
			'id_dmnongtrai' => $this->id_dmnongtrai ? new MongoId($this->id_dmnongtrai) : '',
			'tieuchuan' => $this->tieuchuan,
			'ngaygioxuat' => $this->ngaygioxuat,
			'ngaygioxuat_1' => $this->ngaygioxuat_1,
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
		);
		return $this->_collection->insert($query);
	}
	public function edit(){
		$query = array('$set' => array(
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
			'id_user' => $this->id_user ? new MongoId($this->id_user) : '',
			'id_congty' => $this->id_congty ? new MongoId($this->id_congty) : ''));
		$condition = array('_id' => new MongoId($this->id));
		return $this->_collection->update($condition, $query);
	}

	public function set_hienthi($v){
		$query = array('$set' => array('hienthi' => $v));
		$condition = array('_id' => new MongoId($this->id));
		return $this->_collection->update($condition, $query);
	}

	public function delete(){
		$query = array('_id' => new MongoId($this->id));
		return $this->_collection->remove($query);
	}

	public function delete_by_code(){
		return $this->_collection->remove(array('TYPE'=> $this->TYPE, 'CODE' => $this->CODE));
	}

	public function check_exist(){
		$query = array('TYPE'=> $this->TYPE, 'CODE' => $this->CODE);
		$result = $this->_collection->findOne($query);
		if($result['_id']) return true;
		return false;
	}

	public function check_exist_file($file){
		$query = array('TRANSFER_FILE_NAME' => $file);
		$result = $this->_collection->findOne($query);
		if($result['_id']) return true;
		return false;	
	}

	public function check_dmnongtrai($id_dmnongtrai){
		$query = array('id_dmnongtrai' => new MongoId($id_dmnongtrai));
		$field = array('_id' => true);
		$result = $this->_collection->findOne($query, $field);
		if($result['_id']) return true;
		return false;
	}

	public function check_dmcongty($id_congty){
		$query = array('id_congty' => new MongoId($id_congty));
		$field = array('_id' => true);
		$result = $this->_collection->findOne($query, $field);
		if(isset($result['_id']) && $result['_id']) return true;
		else return false;
	}

	public function search($search){
		$arr_list = array();$danhmuc = new DanhMucNongTrai();
		$list = $danhmuc->search($search);
		if($list){
			foreach($list as $l){
				$arr_list[] = $l['_id'];
			}
		}
		$date1 = convert_date_yyyy_mm_dd_1($search, 0 , 0);
		$date2 = convert_date_yyyy_mm_dd_1($search, 24 , 0);
		$start_date = $date1 ? new MongoDate($date1) : new MongoDate();
		$end_date = $date2 ? new MongoDate($date2) : new MongoDate();
		$query = array( '$or' => array(
			array('tieuchuan' => new MongoRegex('/' . $search . '/i')),
			array('madan' => new MongoRegex('/' . $search . '/i')),
			array('soluong' => intval($search)),
			array('$and' => array(
				array('ngaygioxuat' => array('$gte' => $start_date)),
				array('ngaygioxuat' => array('$lte' => $end_date)),
				)),
			array('soxevanchuyen' => new MongoRegex('/' . $search . '/i')),
			array('tentaixe' => new MongoRegex('/' . $search . '/i')),
			array('sogiaykiemdichthusong' => new MongoRegex('/' . $search . '/i')),
			array('nhanvienkiemdich' => new MongoRegex('/' . $search . '/i')),
			array('id_dmnongtrai' => array('$in' => $arr_list)),
		));
		$sort = array('date_post' => -1);
		return $this->_collection->find($query)->sort($sort);
	}
}
?>