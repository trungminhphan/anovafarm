<?php
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
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(DongGoiRauQua::COLLECTION);
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
	public function get_list_by_congty(){
		$query = array('id_congty' => new MongoId($this->id_congty));
		return $this->_collection->find($query)->sort(array('date_post'=>-1));	
	}
	public function insert(){
		$query = array(
			'tensanpham' => $this->tensanpham,
			'quicachdonggoi' => $this->quicachdonggoi,
			'solo' => $this->solo,
			'id_nhamayrauqua' => new MongoId($this->id_nhamayrauqua),
			'id_dmnhamay' => new MongoId($this->id_dmnhamay),
			'tieuchuan' => $this->tieuchuan,
			'sochungnhantieuchuan' => $this->sochungnhantieuchuan,
			'ngaydonggoi' => $this->ngaydonggoi,
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
			'tensanpham' => $this->tensanpham,
			'quicachdonggoi' => $this->quicachdonggoi,
			'solo' => $this->solo,
			'id_nhamayrauqua' => new MongoId($this->id_nhamayrauqua),
			'id_dmnhamay' => new MongoId($this->id_dmnhamay),
			'tieuchuan' => $this->tieuchuan,
			'sochungnhantieuchuan' => $this->sochungnhantieuchuan,
			'ngaydonggoi' => $this->ngaydonggoi,
			'hansudung' => $this->hansudung,
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

	public function check_nhamay($id_nhamayrauqua){
		$query = array('id_nhamayrauqua' => new MongoId($id_nhamayrauqua));
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
}

?>