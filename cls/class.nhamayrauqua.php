<?php
class NhaMayRauQua {
	const COLLECTION = 'nhamayrauqua';
	private $_mongo;
	private $_collection;

	public $id = '';
	public $id_nongtrairauqua = '';
	public $id_dmnhamay = '';
	public $tieuchuan = '';
	public $sochungnhantieuchuan = '';
	public $matruyxuatsanpham = '';
	public $ngaysoche = '';
	public $hienthi = 0;
	public $date_post = '';
	public $id_user = '';
	public $id_congty = '';

	public function __construct(){
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(NhaMayRauQua::COLLECTION);
	}

	public function get_all_list(){
		return $this->_collection->find()->sort(array('ten'=>-1));
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
		return $this->_collection->find($condition)->sort(array('ten'=>-1));
	}

	public function get_one(){
		$query = array('_id' => new MongoId($this->id));
		return $this->_collection->findOne($query);
	}

	public function insert(){
		$query = array(
			'id_nongtrairauqua' => new MongoId($this->id_nongtrairauqua),
			'id_dmnhamay' => new MongoId($this->id_dmnhamay),
			'tieuchuan' => $this->tieuchuan,
			'sochungnhantieuchuan' => $this->sochungnhantieuchuan,
			'matruyxuatsanpham' => $this->matruyxuatsanpham,
			'ngaysoche' => $this->ngaysoche,
			'hienthi' => intval($this->hienthi),
			'date_post' => new MongoDate(),
			'id_user' => $this->id_user ? new MongoId($this->id_user) : '',
			'id_congty' => $this->id_congty ? new MongoId($this->id_congty) : ''
		);
		return $this->_collection->insert($query);
	}

	public function edit(){
		$query = array('$set' => array(
			'id_nongtrairauqua' => new MongoId($this->id_nongtrairauqua),
			'id_dmnhamay' => new MongoId($this->id_dmnhamay),
			'tieuchuan' => $this->tieuchuan,
			'sochungnhantieuchuan' => $this->sochungnhantieuchuan,
			'matruyxuatsanpham' => $this->matruyxuatsanpham,
			'ngaysoche' => $this->ngaysoche,
			'hienthi' => intval($this->hienthi),
			'date_post' => new MongoDate(),
			'id_user' => $this->id_user ? new MongoId($this->id_user) : '',
			'id_congty' => $this->id_congty ? new MongoId($this->id_congty) : ''
		));
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

	public function check_nongtrai($id_nongtrairauqua){
		$query = array('id_nongtrairauqua' => new MongoId($id_nongtrairauqua));
		$field = array('_id' => true);
		$result = $this->_collection->findOne($query, $field);
		if(isset($result['_id']) && $result['_id']) return true;
		else return false;
	}

	public function check_dmnhamay($id_dmnhamay){
		$query = array('id_dmnhamay' => new MongoId($id_dmnhamay));
		$field = array('_id' => true);
		$result = $this->_collection->findOne($query, $field);
		if(isset($result['_id']) && $result['_id']) return true;
		else return false;
	}

	public function check_dmcongty($id_congty){
		$query = array('id_congty' => new MongoId($id_congty));
		$field = array('_id' => true);
		$result = $this->_collection->findOne($query, $field);
		if(isset($result['_id']) && $result['_id']) return true;
		else return false;
	}

	public function search($search){
		$arr_list = array();$danhmuc = new DanhMucNhaMay();
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
			array('sochungnhantieuchuan' => new MongoRegex('/' . $search . '/i')),
			array('matruyxuatsanpham' => new MongoRegex('/' . $search . '/i')),
			array('$and' => array(
				array('ngaysoche' => array('$gte' => $start_date)),
				array('ngaysoche' => array('$lte' => $end_date)),
				)),
			array('giaychungnhan' => new MongoRegex('/' . $search . '/i')),
			array('nhanvienkiemsoat' => new MongoRegex('/' . $search . '/i')),
			array('sogiaykiemdichthusong' => new MongoRegex('/' . $search . '/i')),
			array('id_dmnhamay' => array('$in' => $arr_list))
		));
		$sort = array('date_post' => -1);
		$result = $this->_collection->find($query)->sort($sort);
		return iterator_to_array($result);
	}
	public function search_by_congty($search){
		$arr_list = array();$danhmuc = new DanhMucNhaMay();
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
			array('sochungnhantieuchuan' => new MongoRegex('/' . $search . '/i')),
			array('matruyxuatsanpham' => new MongoRegex('/' . $search . '/i')),
			array('$and' => array(
				array('ngaysoche' => array('$gte' => $start_date)),
				array('ngaysoche' => array('$lte' => $end_date)),
				)),
			array('giaychungnhan' => new MongoRegex('/' . $search . '/i')),
			array('nhanvienkiemsoat' => new MongoRegex('/' . $search . '/i')),
			array('sogiaykiemdichthusong' => new MongoRegex('/' . $search . '/i')),
			array('id_dmnhamay' => array('$in' => $arr_list))
		));
		$q = array('$and' => array(
				array('id_congty' => new MongoId($this->id_congty)), $query));
		$sort = array('date_post' => -1);
		$result = $this->_collection->find($q)->sort($sort);
		return iterator_to_array($result);
	}
	public function lock($lock){
		$query = array('$set' => array('lock' => intval($lock)));
		$condition = array('_id' => new MongoId($this->id));
		return $this->_collection->update($condition, $query);
	}
}
?>