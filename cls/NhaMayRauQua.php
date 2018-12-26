<?php
namespace Models;
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
		$this->_mongo = DBConnect::getDB();
		$this->_collection = $this->_mongo->nhamayrauqua;
	}

	public function get_all_list(){
		return $this->_collection->find(array(), array('sort' => array('ten'=>-1)));
	}
	public function get_list_by_user(){
		$query = array('id_user' => DBConnect::ObjectId($this->id_user));
		return $this->_collection->find($query, array('sort' => array('date_post'=>-1)));
	}
	public function get_list_by_congty(){
		$query = array('id_congty' => DBConnect::ObjectId($this->id_congty));
		return $this->_collection->find($query, array('sort' => array('date_post'=>-1)));
	}

	public function get_list_condition($condition){
		return $this->_collection->find($condition, array('sort' => array('ten'=>-1)));
	}

	public function get_one(){
		$query = array('_id' => DBConnect::ObjectId($this->id));
		return $this->_collection->findOne($query);
	}

	public function insert(){
		$query = array(
			'id_nongtrairauqua' => DBConnect::ObjectId($this->id_nongtrairauqua),
			'id_dmnhamay' => DBConnect::ObjectId($this->id_dmnhamay),
			'tieuchuan' => $this->tieuchuan,
			'sochungnhantieuchuan' => $this->sochungnhantieuchuan,
			'matruyxuatsanpham' => $this->matruyxuatsanpham,
			'ngaysoche' => $this->ngaysoche,
			'hienthi' => intval($this->hienthi),
			'date_post' => DBConnect::setDate(),
			'id_user' => $this->id_user ? DBConnect::ObjectId($this->id_user) : '',
			'id_congty' => $this->id_congty ? DBConnect::ObjectId($this->id_congty) : ''
		);
		return $this->_collection->insertOne($query);
	}

	public function edit(){
		$query = array('$set' => array(
			'id_nongtrairauqua' => DBConnect::ObjectId($this->id_nongtrairauqua),
			'id_dmnhamay' => DBConnect::ObjectId($this->id_dmnhamay),
			'tieuchuan' => $this->tieuchuan,
			'sochungnhantieuchuan' => $this->sochungnhantieuchuan,
			'matruyxuatsanpham' => $this->matruyxuatsanpham,
			'ngaysoche' => $this->ngaysoche,
			'hienthi' => intval($this->hienthi),
			'date_post' => DBConnect::setDate(),
			'id_user' => $this->id_user ? DBConnect::ObjectId($this->id_user) : '',
			'id_congty' => $this->id_congty ? DBConnect::ObjectId($this->id_congty) : ''
		));
		$condition = array('_id' => DBConnect::ObjectId($this->id));
		return $this->_collection->updateOne($condition, $query);
	}

	public function set_hienthi($v){
		$query = array('$set' => array('hienthi' => $v));
		$condition = array('_id' => DBConnect::ObjectId($this->id));
		return $this->_collection->updateOne($condition, $query);
	}

	public function delete(){
		$query = array('_id' => DBConnect::ObjectId($this->id));
		return $this->_collection->deleteOne($query);
	}

	public function check_nongtrai($id_nongtrairauqua){
		$query = array('id_nongtrairauqua' => DBConnect::ObjectId($id_nongtrairauqua));
		$field = array('_id' => true);
		$result = $this->_collection->findOne($query, $field);
		if(isset($result['_id']) && $result['_id']) return true;
		else return false;
	}

	public function check_dmnhamay($id_dmnhamay){
		$query = array('id_dmnhamay' => DBConnect::ObjectId($id_dmnhamay));
		$field = array('_id' => true);
		$result = $this->_collection->findOne($query, $field);
		if(isset($result['_id']) && $result['_id']) return true;
		else return false;
	}

	public function check_dmcongty($id_congty){
		$query = array('id_congty' => DBConnect::ObjectId($id_congty));
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
		$start_date = $date1 ? DBConnect::setDate($date1) : DBConnect::setDate();
		$end_date = $date2 ? DBConnect::setDate($date2) : DBConnect::setDate();
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
		$start_date = $date1 ? DBConnect::setDate($date1) : DBConnect::setDate();
		$end_date = $date2 ? DBConnect::setDate($date2) : DBConnect::setDate();
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
				array('id_congty' => DBConnect::ObjectId($this->id_congty)), $query));
		$sort = array('date_post' => -1);
		$result = $this->_collection->find($q)->sort($sort);
		return iterator_to_array($result);
	}
	public function lock($lock){
		$query = array('$set' => array('lock' => intval($lock)));
		$condition = array('_id' => DBConnect::ObjectId($this->id));
		return $this->_collection->updateOne($condition, $query);
	}
}
?>
