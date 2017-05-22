<?php
class DanhMucCongTy {
	const COLLECTION = 'danhmuccongty';
	private $_mongo;
	private $_collection;

	public $id = '';
	public $ten = '';
	public $diachi = '';

	public function __construct(){
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(DanhMucCongTy::COLLECTION);
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

	public function get_id_by_ten(){
		$a = explode("-", $this->ten);
		if(strlen($a[0]) == 5){
			$query = array('ten' => new MongoRegex('/^'.$a[0].'/'));
			$field = array('_id' => true);
			$result = $this->_collection->findOne($query, $field);
			if(isset($result['_id']) && $result['_id']) return $result['_id'];
			else return false;
		} else {
			return false;
		}
	}

	public function insert(){
		$query = array(
			'ten' => $this->ten,
			'diachi' => $this->diachi
		);
		return $this->_collection->insert($query);
	}

	public function insert_id(){
		$query = array(
			'_id' => new MongoId($this->id),
			'ten' => $this->ten,
			'diachi' => $this->diachi
		);
		return $this->_collection->insert($query);
	}

	public function edit(){
		$query = array('$set' => array(
			'ten' => $this->ten,
			'diachi' => $this->diachi
		));
		$condition = array('_id' => new MongoId($this->id));
		return $this->_collection->update($condition, $query);	
	}

	public function search($search){
		$query = array('$or' => array(
			array('ten' => new MongoRegex('/' . $search . '/i')),
			array('diachi' => new MongoRegex('/' . $search . '/i'))
		));
		return $this->_collection->find($query);
	}

	public function delete(){
		$query = array('_id' => new MongoId($this->id));
		return $this->_collection->remove($query);
	}
}
?>
