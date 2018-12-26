<?php
namespace Models;
class DongGoiRauQua{
	const COLLECTION = 'donggoirauqua';
	private $_mongo;
	private $_collection;

	public $id = '';
	public $tensanpham = '';
	public $quicachdonggoi = '';
	public $solo = '';
	public $id_nhamayrauqua = '';
	public $id_dmnhamay = '';
	public $tieuchuan = '';
	public $sochungnhantieuchuan='';
	public $ngaydonggoi = '';
	public $hansudung = '';
	public $hienthi = 0;
	public $date_post = '';
	public $id_user = '';
	public $id_congty = '';

	public function __construct(){
		$this->_mongo = DBConnect::getDB();
		$this->_collection = $this->_mongo->donggoirauqua;
	}
	public function get_all_list(){
		return $this->_collection->find(array(), array('sort' => array('ten'=>-1)));
	}
	public function get_list_condition($condition){
		return $this->_collection->find($condition, array('sort' => array('ten'=>-1)));
	}
	public function get_one(){
		$query = array('_id' => DBConnect::ObjectId($this->id));
		return $this->_collection->findOne($query);
	}
	public function get_list_by_user(){
		$query = array('id_user' => DBConnect::ObjectId($this->id_user));
		return $this->_collection->find($query)->sort(array('date_post'=>-1));
	}
	public function get_list_by_congty(){
		$query = array('id_congty' => DBConnect::ObjectId($this->id_congty));
		return $this->_collection->find($query)->sort(array('date_post'=>-1));
	}
	public function insert(){
		$query = array(
			'tensanpham' => $this->tensanpham,
			'quicachdonggoi' => $this->quicachdonggoi,
			'solo' => $this->solo,
			'id_nhamayrauqua' => DBConnect::ObjectId($this->id_nhamayrauqua),
			'id_dmnhamay' => DBConnect::ObjectId($this->id_dmnhamay),
			'tieuchuan' => $this->tieuchuan,
			'sochungnhantieuchuan' => $this->sochungnhantieuchuan,
			'ngaydonggoi' => $this->ngaydonggoi,
			'hansudung' => $this->hansudung,
			'hienthi' => intval($this->hienthi),
			'date_post' => DBConnect::setDate(),
			'id_user' => $this->id_user ? DBConnect::ObjectId($this->id_user) : '',
			'id_congty' => $this->id_congty ? DBConnect::ObjectId($this->id_congty) : ''
		);
		return $this->_collection->insertOne($query);
	}

	public function edit(){
		$query = array('$set' => array(
			'tensanpham' => $this->tensanpham,
			'quicachdonggoi' => $this->quicachdonggoi,
			'solo' => $this->solo,
			'id_nhamayrauqua' => DBConnect::ObjectId($this->id_nhamayrauqua),
			'id_dmnhamay' => DBConnect::ObjectId($this->id_dmnhamay),
			'tieuchuan' => $this->tieuchuan,
			'sochungnhantieuchuan' => $this->sochungnhantieuchuan,
			'ngaydonggoi' => $this->ngaydonggoi,
			'hansudung' => $this->hansudung,
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

	public function check_nhamay($id_nhamayrauqua){
		$query = array('id_nhamayrauqua' => DBConnect::ObjectId($id_nhamayrauqua));
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
		$this->_collection->createIndex(array(
				'tensanpham' => 'text',
				'quicachdonggoi' => 'text',
				'tieuchuan' => 'text',
				'sochungnhantieuchuan' => 'text',
				'hansudung' => 'text'));
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
			array('tensanpham' => new MongoRegex('/' . $search . '/i')),
			array('quicachdonggoi' => new MongoRegex('/' . $search . '/i')),
			array('solo' => new MongoRegex('/' . $search . '/i')),
			array('tieuchuan' => new MongoRegex('/' . $search . '/i')),
			array('sochungnhantieuchuan' => new MongoRegex('/' . $search . '/i')),
			array('hansudung' => new MongoRegex('/' . $search . '/i')),
			array('$and' => array(
				array('ngaydonggoi' => array('$gte' => $start_date)),
				array('ngaydonggoi' => array('$lte' => $end_date)),
				)),
			array('id_dmnhamay' => array('$in' => $arr_list))
		));
		$sort = array('date_post' => -1);
		$result = array();
		$result1 = $this->_collection->find($query)->sort($sort);
		$result2 = $this->_collection->find(array('$text' => array('$search' => $search)));
		if($result1){
			foreach ($result1 as $r1) {
				array_push($result, $r1);
			}
		}
		if($result2){
			foreach ($result2 as $r2) {
				array_push($result, $r2);
			}
		}
		return $result;
	}

	public function search_by_congty($search){
		$this->_collection->createIndex(array(
				'tensanpham' => 'text',
				'quicachdonggoi' => 'text',
				'tieuchuan' => 'text',
				'sochungnhantieuchuan' => 'text',
				'hansudung' => 'text'));
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
			array('tensanpham' => new MongoRegex('/' . $search . '/i')),
			array('quicachdonggoi' => new MongoRegex('/' . $search . '/i')),
			array('solo' => new MongoRegex('/' . $search . '/i')),
			array('tieuchuan' => new MongoRegex('/' . $search . '/i')),
			array('sochungnhantieuchuan' => new MongoRegex('/' . $search . '/i')),
			array('hansudung' => new MongoRegex('/' . $search . '/i')),
			array('$and' => array(
				array('ngaydonggoi' => array('$gte' => $start_date)),
				array('ngaydonggoi' => array('$lte' => $end_date)),
				)),
			array('id_dmnhamay' => array('$in' => $arr_list))
		));
		$q = array('$and' => array(
				array('id_congty' => DBConnect::ObjectId($this->id_congty)), $query));
		$sort = array('date_post' => -1);
		$result = array();
		$result1 =  $this->_collection->find($q)->sort($sort);
		$result2 = $this->_collection->find(array('$text' => array('$search' => $search)));
		if($result1){
			foreach ($result1 as $r1) {
				array_push($result, $r1);
			}
		}
		if($result2){
			foreach ($result2 as $r2) {
				if($r2['id_congty'] == $this->id_congty){
					array_push($result, $r2);
				}
			}
		}
		return $result;
	}

	public function lock($lock){
		$query = array('$set' => array('lock' => intval($lock)));
		$condition = array('_id' => DBConnect::ObjectId($this->id));
		return $this->_collection->updateOne($condition, $query);
	}
}

?>
