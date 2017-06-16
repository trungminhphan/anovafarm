<?php
class DongGoi{
	const COLLECTION = 'donggoi';
	private $_mongo;
	private $_collection;

	public $id = '';
	public $id_nhamay = '';
	public $tensanpham = '';
	public $quicachdonggoi = '';
	public $solo = '';
	public $tieuchuan = '';
	public $sochungnhantieuchuan = '';
	public $ngaygiogietmo = '';
	public $ngaygiodonggoi = '';
	public $hansudung = '';
	public $hienthi = 0;
	public $date_post = '';
	public $id_user = '';
	public $id_congty = '';

	public function __construct(){
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(DongGoi::COLLECTION);
	}
	public function get_all_list(){
		return $this->_collection->find()->sort(array('ten'=>-1));
	}
	public function get_list_condition($condition){
		return $this->_collection->find($condition)->sort(array('ten'=>-1));
	}
	public function get_one(){
		$query = array('_id' => new MongoId($this->id));
		return $this->_collection->findOne($query);
	}
	public function get_list_by_user(){
		$query = array('id_user' => new MongoId($this->id_user));
		return $this->_collection->find($query)->sort(array('date_post'=>-1));
	}
	public function get_list_by_congty(){
		$query = array('id_congty' => new MongoId($this->id_congty));
		return $this->_collection->find($query)->sort(array('date_post'=>-1));	
	}
	public function insert(){
		$query = array(
			'id_nhamay' => new MongoId($this->id_nhamay),
			'tensanpham' => $this->tensanpham,
			'quicachdonggoi' => $this->quicachdonggoi,
			'solo' => $this->solo,
			'tieuchuan' => $this->tieuchuan,
			'sochungnhantieuchuan' => $this->sochungnhantieuchuan,
			'ngaygiogietmo' => $this->ngaygiogietmo,
			'ngaygiodonggoi' => $this->ngaygiodonggoi,
			'hansudung' => $this->hansudung,
			'hienthi' => intval($this->hienthi),
			'date_post' => new MongoDate(),
			'id_user' => $this->id_user ? new MongoId($this->id_user) : '',
			'id_congty' => $this->id_congty ? new MongoId($this->id_congty) : ''
		);
		return $this->_collection->insert($query);
	}

	public function edit(){
		$query = array('$set' => array(
			'id_nhamay' => new MongoId($this->id_nhamay),
			'tensanpham' => $this->tensanpham,
			'quicachdonggoi' => $this->quicachdonggoi,
			'solo' => $this->solo,
			'tieuchuan' => $this->tieuchuan,
			'sochungnhantieuchuan' => $this->sochungnhantieuchuan,
			'ngaygiogietmo' => $this->ngaygiogietmo,
			'ngaygiodonggoi' => $this->ngaygiodonggoi,
			'hansudung' => $this->hansudung,
			'hienthi' => intval($this->hienthi),
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

	public function check_nhamay($id_nhamay){
		$query = array('id_nhamay' => new MongoId($id_nhamay));
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
		$this->_collection->createIndex(array(
				'tensanpham' => 'text', 
				'quicachdonggoi' => 'text',
				'tieuchuan' => 'text',
				'sochungnhantieuchuan' => 'text',
				'hansudung' => 'text'));
		$date1 = convert_date_yyyy_mm_dd_1($search, 0 , 0);
		$date2 = convert_date_yyyy_mm_dd_1($search, 24 , 0);
		$start_date = $date1 ? new MongoDate($date1) : new MongoDate();
		$end_date = $date2 ? new MongoDate($date2) : new MongoDate();
		$query = array( '$or' => array(
			array('tensanpham' => new MongoRegex('/' . $search . '/i')),
			array('quicachdonggoi' => new MongoRegex('/' . $search . '/i')),
			array('solo' => new MongoRegex('/' . $search . '/i')),
			array('tieuchuan' => new MongoRegex('/' . $search . '/i')),
			array('sochungnhantieuchuan' => new MongoRegex('/' . $search . '/i')),
			array('hansudung' => new MongoRegex('/' . $search . '/i')),
			array('$and' => array(
				array('ngaygiogietmo' => array('$gte' => $start_date)),
				array('ngaygiogietmo' => array('$lte' => $end_date)),
				)),
			array('$and' => array(
				array('ngaygiodonggoi' => array('$gte' => $start_date)),
				array('ngaygiodonggoi' => array('$lte' => $end_date)),
				))
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
		$date1 = convert_date_yyyy_mm_dd_1($search, 0 , 0);
		$date2 = convert_date_yyyy_mm_dd_1($search, 24 , 0);
		$start_date = $date1 ? new MongoDate($date1) : new MongoDate();
		$end_date = $date2 ? new MongoDate($date2) : new MongoDate();
		$query = array( '$or' => array(
			array('tensanpham' => new MongoRegex('/' . $search . '/i')),
			array('quicachdonggoi' => new MongoRegex('/' . $search . '/i')),
			array('solo' => new MongoRegex('/' . $search . '/i')),
			array('tieuchuan' => new MongoRegex('/' . $search . '/i')),
			array('sochungnhantieuchuan' => new MongoRegex('/' . $search . '/i')),
			array('hansudung' => new MongoRegex('/' . $search . '/i')),
			array('$and' => array(
				array('ngaygiogietmo' => array('$gte' => $start_date)),
				array('ngaygiogietmo' => array('$lte' => $end_date)),
				)),
			array('$and' => array(
				array('ngaygiodonggoi' => array('$gte' => $start_date)),
				array('ngaygiodonggoi' => array('$lte' => $end_date)),
				))
		));
		$q = array('$and' => array(
				array('id_congty' => new MongoId($this->id_congty)), $query));
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
		$condition = array('_id' => new MongoId($this->id));
		return $this->_collection->update($condition, $query);
	}
}

?>