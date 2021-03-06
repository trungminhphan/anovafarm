<?php
namespace Models;
class DanhMucCongTy {
	const COLLECTION = 'danhmuccongty';
	private $_mongo;
	private $_collection;

	public $id = '';
	public $ten = '';
	public $diachi = '';
	public $title = '';

	public function __construct(){
		$this->_mongo = DBConnect::getDB();
		$this->_collection = $this->_mongo->danhmuccongty;
	}

	public function get_all_list(){
		return $this->_collection->find(array(), array('sort' => array('ten' => -1)));;
	}

	public function get_list_condition($condition){
		return $this->_collection->find($condition, array('sort' => array('ten' => -1)));
	}

	public function get_one(){
		$query = array('_id' => DBConnect::ObjectId($this->id));
		return $this->_collection->findOne($query);
	}

	public function get_id_by_ten(){
		$a = explode("-", $this->ten);
		$query = array('ten' => new MongoRegex('/^'.$a[0].'/'));
		$field = array('_id' => true);
		$result = $this->_collection->findOne($query, $field);
		if(isset($result['_id']) && $result['_id']) return strval($result['_id']);
		else return false;

	}

	public function insert(){
		$query = array(
			'ten' => $this->ten,
			'diachi' => $this->diachi,
			'title' => $this->title
		);
		return $this->_collection->insertOne($query);
	}

	public function insert_id(){
		$query = array(
			'_id' => DBConnect::ObjectId($this->id),
			'ten' => $this->ten,
			'diachi' => $this->diachi,
			'title' => $this->title
		);
		return $this->_collection->insertOne($query);
	}

	public function edit(){
		$query = array('$set' => array(
			'ten' => $this->ten,
			'diachi' => $this->diachi,
			'title' => $this->title
		));
		$condition = array('_id' => DBConnect::ObjectId($this->id));
		return $this->_collection->updateOne($condition, $query);
	}

	public function search($search){
		/*$query = array('$or' => array(
			array('ten' => new MongoRegex('/' . $search . '/i')),
			array('diachi' => new MongoRegex('/' . $search . '/i'))
		));
		return $this->_collection->find($query);*/
		$this->_collection->createIndex(array('ten' => 'text', 'diachi' => 'text'));
		$query = array('$text' => array('$search' => $search));
		return $this->_collection->find($query);
	}

	public function delete(){
		$query = array('_id' => DBConnect::ObjectId($this->id));
		return $this->_collection->deleteOne($query);
	}
}
?>
