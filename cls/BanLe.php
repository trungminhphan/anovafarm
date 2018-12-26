<?php
namespace Models;
class BanLe {
	const COLLECTION = 'banle';
	private $_mongo;
	private $_collection;

	public $id = '';
	public $id_donggoi = '';
	public $id_dmbanle = '';
	public $hienthi = 1;
	public $date_post = '';
	public $id_user = '';
	public $id_congty = '';

	public function __construct(){
		$this->_mongo = DBConnect::getDB();
		$this->_collection = $this->_mongo->banle;
	}
	public function get_all_list(){
		return $this->_collection->find(array(),array('sort' => array('ten'=>-1)));
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
			'id_donggoi' => DBConnect::ObjectId($this->id_donggoi),
			'id_dmbanle' => $this->id_dmbanle,
			'hienthi' => intval($this->hienthi),
			'date_post' => DBConnect::setDate(),
			'id_user' => $this->id_user ? DBConnect::ObjectId($this->id_user) : '',
			'id_congty' => $this->id_congty ? DBConnect::ObjectId($this->id_congty) : ''
		);
		return $this->_collection->insertOne($query);
	}
	public function edit(){
		$query = array('$set' => array(
			'id_donggoi' => DBConnect::ObjectId($this->id_donggoi),
			'id_dmbanle' => $this->id_dmbanle,
			'hienthi' => intval($this->hienthi),
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
	public function check_donggoi($id_donggoi){
		$query = array('id_donggoi' => DBConnect::ObjectId($id_donggoi));
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

	public function check_dmcongty($id_congty){
		$query = array('id_congty' => DBConnect::ObjectId($id_congty));
		$field = array('_id' => true);
		$result = $this->_collection->findOne($query, $field);
		if(isset($result['_id']) && $result['_id']) return true;
		else return false;
	}

	public function search($search){
		$arr_list = array();$danhmuc = new DanhMucBanLe();
		$list = $danhmuc->search($search);
		if($list){
			foreach($list as $l){
				$arr_list[] = strval($l['_id']);
			}
		}
		$query = array('id_dmbanle' => array('$in' => $arr_list));
		$sort = array('date_post' => -1);
		$result = $this->_collection->find($query)->sort($sort);
		return iterator_to_array($result);
	}

	public function search_by_congty($search){
		$arr_list = array();$danhmuc = new DanhMucBanLe();
		$list = $danhmuc->search($search);
		$donggoi = new DongGoi();
		$list_donggoi = $donggoi->search($search);
		$arr_donggoi = array();
		if($list_donggoi){
			foreach($list_donggoi as $d){
				$arr_donggoi[] = $d['_id'];
			}
		}
		if($list){
			foreach($list as $l){
				$arr_list[] = strval($l['_id']);
			}
		}
		$query = array('$or' => array(
			array('id_dmbanle' => array('$in' => $arr_list)),
			array('id_donggoi' => array('$in' => $arr_donggoi))
		));
		$q = array('$and' => array(array('id_congty' => DBConnect::ObjectId($this->id_congty)), $query));
		//$query = array('id_dmbanle' => array('$in' => $arr_list), 'id_congty' => DBConnect::ObjectId($this->id_congty));
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
