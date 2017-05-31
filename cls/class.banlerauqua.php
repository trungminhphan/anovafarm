<?php
class BanLeRauQua {
	const COLLECTION = 'banlerauqua';
	private $_mongo;
	private $_collection;
	public $id = '';
	public $id_donggoirauqua = '';
	public $id_dmbanle = '';
	public $hienthi = 1;
	public $date_post = '';
	public $id_user = '';
	public $id_congty = '';

	public function __construct(){
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(BanLeRauQua::COLLECTION);
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
			'id_donggoirauqua' => new MongoId($this->id_donggoirauqua),
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
			'id_donggoirauqua' => new MongoId($this->id_donggoirauqua),
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
	
	public function check_donggoi($id_donggoirauqua){
		$query = array('id_donggoirauqua' => new MongoId($id_donggoirauqua));
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
		$query = array('id_congty' => new MongoId($id_congty));
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
		return $this->_collection->find($query)->sort($sort);
	}

	public function search_by_congty($search){
		$arr_list = array();$danhmuc = new DanhMucBanLe();
		$list = $danhmuc->search($search);
		$donggoi = new DongGoiRauQua();
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
			array('id_donggoirauqua' => array('$in' => $arr_donggoi))
		));
		$q = array('$and' => array(array('id_congty' => new MongoId($this->id_congty)), $query));
		//$query = array('id_dmbanle' => array('$in' => $arr_list), 'id_congty' => new MongoId($this->id_congty));
		$sort = array('date_post' => -1);
		return $this->_collection->find($q)->sort($sort);
	}

	public function lock($lock){
		$query = array('$set' => array('lock' => intval($lock)));
		$condition = array('_id' => new MongoId($this->id));
		return $this->_collection->update($condition, $query);
	}
}
?>