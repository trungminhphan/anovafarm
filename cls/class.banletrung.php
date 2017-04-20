<?php
class BanLeTrung {
	const COLLECTION = 'banletrung';
	private $_mongo;
	private $_collection;

	public $id = '';
	public $id_donggoitrung = '';
	public $id_dmbanle = '';
	public $hienthi = 1;
	public $date_post = '';
	public $id_user = '';
	public $id_congty = '';

	public function __construct(){
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(BanLeTrung::COLLECTION);
	}
	public function get_all_list(){
		return $this->_collection->find()->sort(array('ten'=>-1));
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
			'id_donggoitrung' => new MongoId($this->id_donggoitrung),
			'id_dmbanle' => $this->id_dmbanle,
			'hienthi' => intval($this->hienthi),
			'date_post' => new MongoDate(),
			'id_user' => $this->id_user ? new MongoId($this->id_user) : '',
			'id_congty' => $this->id_congty ? new MongoId($this->id_congty) : ''
		);
		return $this->_collection->insert($query);
	}
	public function edit(){
		$query = array('$set' => array(
			'id_donggoitrung' => new MongoId($this->id_donggoitrung),
			'id_dmbanle' => $this->id_dmbanle,
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
	public function check_donggoi($id_donggoi){
		$query = array('id_donggoi' => new MongoId($id_donggoi));
		$field = array('_id' => true);
		$result = $this->_collection->findOne($query, $field);
		if(isset($result['_id']) && $result['_id']) return true;
		else return false;
	}

	public function check_dmbanle($id_dmbanle){
		$query = array('id_dmbanle' => $id_dmbanle);
		$field = array('_id' => true);
		$result = $this->_collection->findOne($query, $field);
		if($result['_id']) return true;
		else return false;
	}
}
?>